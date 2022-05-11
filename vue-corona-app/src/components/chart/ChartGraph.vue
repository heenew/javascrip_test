<template>
  <canvas width="400" height="400" ref="myChart"></canvas>
</template>

<script>
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
export default {
  name: "ChartGraph",
  props: {
    chartOptions: {
      type: Object,
      default() {
        return {
          type: "bar",
          labels: ["red", "blue"],
          datasets: [
            {
              data: [12, 19],
              label: "Test",
              borderWith: 1,
              backgroundColor: ["rgba(255,99,132,0.2)", "rgba(52,162,235,0.2)"],
              borderColor: ["rgba(255,99,132,1)", "rgba(52,162,235,1)"],
            },
          ],
          options: {
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          },
        };
      },
    },
  },
  data() {
    return {
      chartObject: null,
    };
  },
  mounted() {
    this.drawChart();
  },
  methods: {
    drawChart() {
      const { type, datasets, labels, options } = this.chartOptions;
      const ctx = this.$refs.myChart.getContext("2d");
      const chartObject = new Chart(ctx, {
        type: type,
        data: {
          labels,
          // datasets:datasets인데 key와 value가 다르면 생략 가능
          datasets,
        },
        options,
      });
    },
  },
};
</script>

<style></style>
