<template>
  <h2>국제현황</h2>
</template>

<script>
import coronaMixin from "@/mixins/coronaMixin"
export default {
  name: "InternationalCases",
  mixins: [coronaMixin],
  mounted() {
    this.fetchCases()
  },
  methods: {
    async fetchCases(){
      const url="https://api.covid19api.com/summary"
      const summary = await this.fetchCases("get", url)
      console.log(summary, "res")
    }
  },
};
</script>

<style></style>
