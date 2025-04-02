<template>
    <section class="chart_zone">
        <h3>Погода в Москве на 3 дня</h3>
        <section v-if="loading" class="loading" id="load">Загрузка...</section>
        <canvas v-if="!loading & !isErr" ref="myChart" id="myChart"></canvas>
        <section class="loading" v-if="error">{{ error }}</section>
    </section>
</template>
  
<script>
  import { Chart, registerables } from 'chart.js';
  
  export default {
    data() {
      return {
        loading: true,
        isErr: false,
        error: null,
        tempDat: [],
        timeDat: [],
        weatherChart: null,
      };
    },
    mounted() {
      this.getWeatherReport();
    },
    methods: {
      async getWeatherReport() {
        try {
          const resp = await fetch("https://api.open-meteo.com/v1/forecast?latitude=55.7522&longitude=37.6156&hourly=temperature_2m&forecast_days=3");
  
          if (resp.ok)
          {
            const weather = await resp.json();
            this.tempDat = weather.hourly.temperature_2m;
            this.timeDat = weather.hourly.time;
            this.loading = false;

            this.$nextTick(() => {
              this.createChart();
            });
          }
          else
          {
            throw new Error(`Ошибка: ${resp.status}`);
          }
        } catch (error) {
          this.error = "Ошибка загрузки данных о погоде";
          this.isErr = true;
          this.loading = false;
        }
      },
      createChart() {
        Chart.register(...registerables);
        const ctx = this.$refs.myChart.getContext('2d');
  
        if (this.weatherChart) {
          this.weatherChart.destroy();
        }
  
        this.weatherChart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: this.timeDat,
            datasets: [{
              label: 'Температура в Москве',
              data: this.tempDat,
              borderColor: 'rgba(75, 192, 192, 1)',
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              fill: true,
            }]
          },
          options: {
            responsive: true,
            scales: {
              x: {
                beginAtZero: true,
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
        });
      }
    }
  };
  </script>





<!-- <template>
  <main @load="getWeatherReport">
    <section class="chart_zone">
      <h3>Погода в Москве на 3 дня</h3>
      <section class="loading" ref="loadScreen" id="load">Загрузка...</section>
      <canvas ref="myChart" id="myChart" width="1200" height="600" style="display: block; box-sizing: border-box; height: 400px; width: 800px;"></canvas>
      <Line :data="data" :options="options" />
    </section>
  </main>
</template> -->

<style src="../css/indexApi1.css"></style>

<!-- <script> -->

// // import { ref, onMounted } from 'vue';
// // import { Chart } from 'chart.js';
// import {
//   Chart,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// } from 'chart.js'
// import { Line } from 'vue-chartjs'
// // import * as chartConfig from './chartConfig.js'

// Chart.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend
// )

// export default {
//   name: 'AAAAAA',
//   components: {
//     Line
//   },
//   data() {
//     return chartConfig
//   }
// }

// export const data = {
//   labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
//   datasets: [
//     {
//       label: 'Data One',
//       backgroundColor: '#f87979',
//       data: [40, 39, 10, 40, 39, 80, 40]
//     }
//   ]
// }

// export const options = {
//   responsive: true,
//   maintainAspectRatio: false
// }

// export default {
//   setup() {
//     const tempDat = ref([]);
//     const timeDat = ref([]);
//     const loading = ref(true);
//     const error = ref(null);

//     const getWeatherReport = async () => {
//       try {
//         const resp = await fetch("https://api.open-meteo.com/v1/forecast?latitude=55.7522&longitude=37.6156&hourly=temperature_2m&forecast_days=3");

//         if (resp.ok)
//         {
//           const weather = await resp.json();
//           tempDat.value = weather.hourly.temperature_2m;
//           timeDat.value = weather.hourly.time;
//           loading.value = false;

//           createChart(timeDat.value, tempDat.value, 'line');
//         }
//         else
//         {
//           throw new Error(`Ошибка: ${resp.status}`);
//         }
//       } catch (err) {
//         error.value = "Ошибка загрузки данных";
//         loading.value = false;
//       }
//     };

//     const createChart = (timeDat, tempDat, type) => {
//     //   const myChart = ref();
//         // const myChart = this.$refs.canvas.getContext('2d');
//     //   const ctx = myChart;//document.getElementById('myChart').getContext('2d');
//     //   const ctx = document.getElementById('myChart').getContext('2d');
//       new Chart(this.$refs.canvas, {
//         type: type,
//         data: {
//           labels: [1, 2, 3],//timeDat,
//           datasets: [{
//             label: 'Температура в Москве',
//             data: [1, 2, 3],//tempDat,
//             borderColor: 'rgba(75, 192, 192, 1)',
//             backgroundColor: 'rgba(75, 192, 192, 0.2)',
//             borderWidth: 1,
//           }]
//         },
//         options: {
//           responsive: true,
//           maintainAspectRatio: false,
//           scales: {
//             x: {
//               beginAtZero: true,
//               grid: {
//                 color: '#FFFFFF'
//               }
//             },
//             y: {
//               grid: {
//                 color: '#FFFFFF'
//               }
//             },
//           }
//         }
//       });
//     };

//     onMounted(() => {
//       getWeatherReport();
//     });

//     return {
//       loading,
//       error,
//     };
//   },
// };


// import { Chart } from 'vue-chartjs';

// import { Chart } from 'chart.js';
// import { Line } from 'vue-chartjs';

// import { Bar } from 'vue-chartjs'

// const myChart = useTemplateRef("myChart");

// export default
// {
//   methods:{
//     getWeatherReport()
//     {
//     //   const myChart = useTemplateRef("myChart");
//     //   const loadScreen = useTemplateRef("loadScreen");

//       let temp_dat = [];
//       let time_dat = [];

//         try
//         {
//             let resp = fetch("https://api.open-meteo.com/v1/forecast?latitude=55.7522&longitude=37.6156&hourly=temperature_2m&forecast_days=3");

//             if(resp.ok)
//             {
//                 let weather = resp.json();
        
//                 temp_dat = weather.hourly.temperature_2m;
//                 time_dat = weather.hourly.time;
//             }
//             else
//             {
//                 alert("AAAAAA " + resp.status);
//             }

//             // document.getElementById("load").style.display = "none";

//             // let ch = document.createElement("canvas");
//             // ch.id = "myChart";

//             // let load = document.getElementById("load");
//             // load.parentNode.replaceChild(ch, load);

//             this.createChart(time_dat, temp_dat,'line');
//         }
//         catch
//         {
//             // let chart = document.getElementById("myChart");
//             // let err = document.getElementById("load");
//             // err.innerText = "Ошибка загрузки";
//             // chart.parentNode.replaceChild(err, chart);
//         }

        
//     },

//     createChart(timeDat, tempDat, type)
//     {
//         const myChart = useTemplateRef("myChart");
//         // const loadScreen = useTemplateRef("loadScreen");

//         weatherChart = new Chart( myChart,
//             {
//                 type: type,
//                 data:
//                 {
//                     labels: timeDat,
//                     datasets: [{
//                         label: 'Температура в Москве',
//                         data: tempDat,
//                     }]
//                 },
//                 options:
//                 {
//                     responsive: false,
//                     maintainAspectRatio: true,

//                     scales: {
//                         x: {
//                             beginAtZero:true,
//                             fontColor: 'red',
                            
//                             grid: {
//                                 color: '#FFFFFF'
//                             }
//                         },
//                         y: {
//                             grid: {
//                                 color: '#FFFFFF'
//                             }
//                         },
//                     }
//                 }
//             }
            
//         );
//     }
//   }
// }
<!-- </script> -->
<!-- <script src="https://cdn.jsdelivr.net/npm/chart.js"></script> -->