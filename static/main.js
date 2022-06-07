const ctx = document.getElementById('myChart').getContext('2d');
var graphData ={
    type: 'line',
    data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets: [{
            label: 'temperature ',
            data: [1,4,5,6,7],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        
    }
}
const myChart = new Chart(ctx, graphData);
var socket = new WebSocket('ws://localhost:8000/ws/some_url/');
socket.onmessage = function(event){
    var data =JSON.parse(event.data);
    console.log(data);
    var newGraphData = graphData.data.datasets[0].data;
    newGraphData.shift();
    newGraphData.push(data.message);
    graphData.data.datasets[0].data =newGraphData;
    myChart.update();
    document.querySelector("#app").innerText = data.message;
}


