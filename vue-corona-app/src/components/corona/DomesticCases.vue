<template>
  <div>
    <ul class="graph-list">
      <li>
        <h3>누적 확진/사망자 추이</h3>
        <ChartGraph />
      </li>
    </ul>
  </div>
</template>

<script>
import ChartGraph from "../chart/ChartGraph";
import coronaMixin from "@/mixins/coronaMixin";
export default {
  name: "DomesticCases",
  mixins: [coronaMixin],
  data() {
    return {
      caseKey: 0,
      comareKey: 0,
      monthDifference: 6,
      domesticData: [],
    };
  },
  mounted() {
    this.fetchDomestic();
  },
  methods: {
    async fetchDomestic() {
      const domestic = await this.fetchData();
    },
  },
  components: {
    ChartGraph,
  },
};
</script>

<style>
.graph-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1em;
  list-style: none;
}
</style>
