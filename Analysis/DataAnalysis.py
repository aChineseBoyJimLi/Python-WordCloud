# -*- coding: utf-8 -*-
from os import path  #与磁盘文件路径有关模块
from PIL import Image
import re
import jieba
from jieba import analyse
from wordcloud import WordCloud, STOPWORDS, ImageColorGenerator
import numpy as np  #一个科学计算的库，提供了矩阵运算的功能，其一般与Scipy、matplotlib一起使用。
import matplotlib.pyplot as plt

stopwords = {}
d = path.dirname(__file__)
# 定义停词表
def stopword(textpath):
    global stopwords
    fl = open(path.join(textpath , 'stopwords.txt'),'r' ,encoding="utf-8")
    for line in fl.readlines():
        stopwords.setdefault(line.strip(), 0)
        stopwords[line.strip()] = 1
    fl.close()
stopword(d)


# jieba分词，并做词频统计
def cleancntxt(txt, stopwords):
    seg_generator = jieba.cut(txt,cut_all=True)
    seg_list = [i for i in seg_generator if i not in stopwords]
    #词频统计
    freq = {}
    for word in seg_list:
        freq_n = seg_list.count(word)
        if freq_n > 20  and freq_n<1000:
             freq[word] = freq_n
    print(freq)
    return seg_list

# 云词图生成函数，可以生成词云图，并保存在项目目录下
def wordcloudplot(txt):
    leaf = np.array(Image.open(path.join(d, "snowflake.png")))
    wc = WordCloud(background_color="white", max_words=200, mask=leaf, font_path="msyh.ttc", max_font_size=150,
                   random_state=42)
    wc.generate(txt)
    wc.to_file(path.join(d, "名称.png"))
    # Open a plot of the generated image.
    plt.imshow(wc)
    plt.axis("off")
    plt.show()


# 调用其他函数，
def plotTitleCloud(txtlist):
    txt = txtlist
    seg_list = cleancntxt(txt, stopwords)
    txt = r' '.join(seg_list)
    wordcloudplot(txt)

# 文本清理函数，使用正则表达式，粗铣文本
def TextClean(textpath):
    f = open(path.join(textpath, '重庆大学人工智能协会.txt'), 'r', encoding='utf-8')
    text = ""
    for line in f.readlines():
        if re.match(r'^\d', line) == None:
            text = text + line.strip()
        else:
            pass
    f.close()
    return text

# 词频统计返回一个列表，为最能水群的几位大佬
def GetName():
    f = open(path.join(d, '重庆大学人工智能协会.txt'), 'r', encoding='utf-8')
    name=[]
    for line in f.readlines():
        if re.match(r'^2017-',line) != None:
            m = re.match(r'^(.{19})(.+)',line)
            name.append(m.group(2))
        else:
            pass
    f.close()
    dic = {}
    list_name = []
    i = 0
    for word in name:
         if word not in dic:
            freq_n = name.count(word)
            if freq_n > 30:
                dic[word] = freq_n
                dic_name = {"value": "", "name": ""}
                dic_name["value"] = freq_n
                dic_name["name"] = word
                list_name.append(dic_name)
    return list_name

# 词频统计返回一个列表，为一天24小时内发言的人次数
def GetTime(textpath):
    f = open(path.join(textpath, '重庆大学人工智能协会.txt'), 'r', encoding='utf-8')
    time = []
    for line in f.readlines():
        if re.match(r'^2017-', line) != None:
            m = re.match(r'^(.{11})(\d{1,2})',line)
            time.append(int(m.group(2)))
    freq = []
    i = 0
    while i < 24:
        freq.append(time.count(i))
        i = i + 1
    return freq


# 开始生成云词图
txt = TextClean(d)
plotTitleCloud(txt)
