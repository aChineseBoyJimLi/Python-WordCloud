$(document).ready(
	function(){
		var myChart = echarts.init(document.getElementById('chart-1'));
		myChart.setOption(
			{
				title:{text:'高频词汇'},
				tooltips:{},
				legend:{data:['词频']},
				xAxis:{data:["学习","人工智能","大佬","机器人","同学","社团"]},
				yAxis:{},
				series:[{name:'词频',type:'bar',data:[37,17,12,5,9,6]}]
			}
		);


		var myChart1 = echarts.init(document.getElementById('chart-2'));
		option = {
			    series : [
			        {
			            name: '发言最多的几位老铁',
			            type: 'pie',
			            radius: '55%',
			            roseType: 'angle',
			            data:[
			                {value:78,name:'副社长 杨耀东'},
							{value:71 ,name:'电科 曾常亮'},
							{value:64,name:'计院 振南'},
							{value:60,name:'材料 贾超阳'},
							{value:48,name:'信管 田杰杰'}
			            ]
			        }
			    ]
		};
		myChart1.setOption(option);

		var myChart2 = echarts.init(document.getElementById('chart-3'));
		option = {
        title: {text: '聊天折线'},
        tooltip: {trigger: 'axis'},
        legend: {data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']},
        grid: {left: '3%',right: '4%',bottom: '3%',containLabel: true},
        xAxis: {type: 'category',boundaryGap: false,data: ['1am','2am','3am','4am','5am', '6am','7am','8am','9am','11am','12am','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm','9pm','10pm','11pm','12pm']},
        yAxis: {type: 'value'},
        series: [
            {
                name: '聊天折线',
                type: 'line',
                stack: '总量',
                data:[11,44,0,0,0,0,0,0,7,11,56,99,100,150,130,56,89,78,102,79,50,89,55,63]
            }
        ]
    };

 

    myChart2.setOption(option);
	}	
	
)



