const Vuedata = Vue.createApp({
    template:
      `<div class="d-flex flex-column align-items-center">
        <h1>{{ apptitle }}</h1>
       <table class="table table-responsive table-bordered">
          <thead>
            <tr>
            <th class="text-center" scope="col" v-for="title in titles">
            {{ title }}
            </th>
            </tr>
          </thead>
          <tbody>
          <tr v-for="data in datas">
              <td class="text-center">{{ data.station_name }}</td>
              <td class="text-center">{{ data.temp }}</td>
              <td class="text-center">{{ data.humidity }}</td>
              <td class="text-center">{{ data.pH }}</td>
          </tr>
        </tbody>
        </table>
        <div>
          <canvas id="tempChart"></canvas>
          <canvas id="humChart"></canvas>
          <canvas id="pHChart"></canvas>
        </div>
      </div>
    `,
    data() {
      return {
        apptitle: 'Monitor tempurature and humidity',
        titles: ['', 'Temperature', 'Humidity(%)', 'pH'],
        datas: []
      }
    },
    methods: {
      getData() {
        axios.post('action.php',
          {
            action: 'getData'
          }
        ).then(function (response) {
          Vuedata.datas = response.data;
        })
      },
      drawChartElement(label,name, type, dataArray, chartname) {
        const data = {
          labels: label,
          datasets: [{
            label: name,
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: dataArray,
          }]
        };
  
        const config = {
          type: type,
          data: data,
          options: {
          }
        };
  
        const chartName = new Chart(
          document.getElementById(chartname),
          config
        );
      },
  
      drawChart() {
        const stationNameArray = []
        const tempArray = []
        const humidityArray = []
        const pHArray = []
  
        for (let i = 0; i < Vuedata.datas.length; i++) {
          // console.log(Vuedata.datas[i].temp);
          tempArray.push(Vuedata.datas[i].temp);
          humidityArray.push(Vuedata.datas[i].humidity);
          pHArray.push(Vuedata.datas[i].pH);
          stationNameArray.push(Vuedata.datas[i].station_name);
        }
  
        this.drawChartElement(stationNameArray, 'Temperature', 'line', tempArray, 'tempChart');
        this.drawChartElement(stationNameArray, 'Humidity', 'line', humidityArray, 'humChart');
        this.drawChartElement(stationNameArray, 'pH', 'line', pHArray, 'pHChart');
      }
    },
    mounted() {
      this.getData();
    },
    updated() {
      this.drawChart();
    }
  })
    .mount('#vue-data')