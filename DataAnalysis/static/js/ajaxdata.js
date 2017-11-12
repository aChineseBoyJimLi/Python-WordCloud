$(document).ready(
	function() {

        var myChart = echarts.init(document.getElementById('chart-1'));
        myChart.setOption(
            {
                title: {text: '高频词汇'},
                tooltips: {},
                legend: {data: ['词频']},
                xAxis: {data: []},
                yAxis: {},
                series: [{name: '词频', type: 'bar', data: []}]
            }
        );
        myChart.showLoading();
        $.getJSON('word' ,function(word) {
            if(word){
                myChart.hideLoading();
                myChart.setOption({xAxis:{data:word.word},series: [{name: '聊天折线', data:word.nums}]});
            }
            else{
                alert("没有收到");
            }
        });

        var myChart1 = echarts.init(document.getElementById('chart-2'));
        option = {
            title:{
                text:"水群大佬"
            },
            series: [
                {
                    name: '水群大佬',
                    type: 'pie',
                    radius: '55%',
                    roseType: 'angle',
                    data: []
                }
            ]
        };
        myChart1.setOption(option);
        myChart1.showLoading();
        $.getJSON('name' ,function(name) {
            if(name){
                myChart1.hideLoading();
                myChart1.setOption({series: [{name: '水群大佬', data: name}]});
            }
            else{
                alert("没有收到");
            }
        });

        var myChart2 = echarts.init(document.getElementById('chart-3'));
        option = {
            title: {text: '聊天折线'},
            tooltip: {trigger: 'axis'},
            legend: {data: ['聊天折线']},
            grid: {left: '3%', right: '4%', bottom: '3%', containLabel: true},
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1am', '2am', '3am', '4am', '5am', '6am', '7am', '8am', '9am', '11am', '12am', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm', '9pm', '10pm', '11pm', '12pm']
            },
            yAxis: {type: 'value'},
            series: [
                {
                    name: '聊天折线',
                    type: 'line',
                    stack: '总量',
                    data: []
                }
            ]
        };
        myChart2.setOption(option);
        myChart2.showLoading();
        $.getJSON('time' ,function(time) {
            if(time){
                myChart2.hideLoading();
                myChart2.setOption({series: [{name: '聊天折线', data: time}]});
            }
            else{
                alert("没有收到");
            }
        });
    });



