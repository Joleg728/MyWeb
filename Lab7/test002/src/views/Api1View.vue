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

<style src="../css/indexApi1.css"></style>