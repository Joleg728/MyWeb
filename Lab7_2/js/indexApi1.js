let temp_dat = [];
let time_dat = [];

async function getWeatherReport()
{
    try
    {
        let resp = await fetch("https://api.open-meteo.com/v1/forecast?latitude=55.7522&longitude=37.6156&hourly=temperature_2m&forecast_days=3");

        if(resp.ok)
        {
            let weather = await resp.json();
    
            temp_dat = weather.hourly.temperature_2m;
            time_dat = weather.hourly.time;
        }
        else
        {
            alert("AAAAAA " + resp.status);
        }

        document.getElementById("load").style.display = "none";

        let ch = document.createElement("canvas");
        ch.id = "myChart";

        let load = document.getElementById("load");
        load.parentNode.replaceChild(ch, load);

        createChart(time_dat, temp_dat,'line');
    }
    catch
    {
        let chart = document.getElementById("myChart");
        let err = document.getElementById("load");
        err.innerText = "Ошибка загрузки";
        chart.parentNode.replaceChild(err, chart);
    }
}

function createChart(timeDat, tempDat, type)
{
    weatherChart = new Chart( document.getElementById('myChart'),
        {
            type: type,
            data:
            {
                labels: timeDat,
                datasets: [{
                    label: 'Температура в Москве',
                    data: tempDat,
                }]
            },
            options:
            {
                responsive: false,
                maintainAspectRatio: true,

                scales: {
                    x: {
                        beginAtZero:true,
                        fontColor: 'red',
                        
                        grid: {
                            color: '#FFFFFF'
                        }
                    },
                    y: {
                        grid: {
                            color: '#FFFFFF'
                        }
                    },
                }
            }
        }
        
    );
}