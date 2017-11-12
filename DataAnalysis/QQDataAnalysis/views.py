from django.shortcuts import render,render_to_response
from django.http import JsonResponse
from django import forms
import os
from QQDataAnalysis import wordcloud
import json

# 显示主页
def index(request):
    return render(request, 'index.html')
# 上传文件
def upload(request):
    if request.method == "POST":  # 请求方法为POST时，进行处理
        myFile = request.FILES.get("file", None)  # 获取上传的文件，如果没有文件，则默认为None
        context = {}
        if not myFile:
            context['message'] = "No File"
            return render(request,"index.html",context)
        d = os.path.dirname(__file__)
        f = open(os.path.join(d, '重庆大学人工智能协会.txt'), 'w', encoding='utf-8')
        for line in myFile.readlines():
            f.write(line.decode("utf-8"))
        f.close()
        context['message'] = "Get File"
        return render(request,"index.html",context)

# 显示词云图
def check(request):
    wordcloud.plotTitleCloud()
    return render(request, "show.html")

def getName(request):
    a = wordcloud.GetName()
    return JsonResponse(a,safe=False)
def getTime(request):
    a = wordcloud.GetTime()
    return JsonResponse(a, safe=False)
def getWord(request):
    a = wordcloud.GetWord()
    return JsonResponse(a)

















