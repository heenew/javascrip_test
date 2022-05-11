<template>
  <div>
    <h2>국제현황</h2>
    <div class="buttons">
      <div style="margin-top: 20px">
        <el-radio-group v-model="displayType" size="small">
          <el-radio-button
            v-for="(item, index) in displayTypes"
            :key="index"
            :label="index"
          >
            {{ item.alias }}
          </el-radio-button>
        </el-radio-group>
        <input type="text" v-model="keyword" />
      </div>
    </div>
    <ul class="list">
      <li
        class="country"
        v-for="country in sortedCountries"
        :key="country.CountryCode"
      >
        <img
          :src="require(`@/assets/flags/${country.CountryCode}.svg`)"
          :alt="country.Country"
        />
        <span class="name">{{ country.Country }}</span>
        <span class="cases"
          >{{ country.NewConfirmed }}/{{ country.TotalConfirmed }}</span
        >
      </li>
    </ul>
  </div>
</template>
<script>
// https://github.com/purecatamphetamine/country-flag-icons
import coronaMixin from "@/mixins/coronaMixin";
export default {
  name: "InternationalCases",
  mixins: [coronaMixin],
  data() {
    return {
      keyword: "",
      countries: [],
      displayType: 0,
      displayTypes: [
        { alias: "Daily Worst", key: "NewConfirmed", compare: -1 },
        { alias: "Daily Best", key: "NewConfirmed", compare: 1 },
        { alias: "Total Worst", key: "TotalConfirmed", compare: -1 },
        { alias: "Total Best", key: "TotalConfirmed", compare: 1 },
      ],
    };
  },
  computed: {
    sortedCountries() {
      const { compare, key } = this.displayTypes[this.displayType];
      // let list = this.countries 를 사용하면 list가 바뀔때마다 countries도 바뀌기 때문에
      // [... ] 을 추가함 => 1:1로 매칭되는게 아니라 배열의 요소들만 가져옴
      let list = [...this.countries];

      // filter
      list = list.filter((li) =>
        li.Country.toUpperCase().includes(this.keyword.toUpperCase())
      );

      // sort
      //a,b 를 비교할 때 숫자는 숫자의 크키, 문자는 알파벳 순서
      // array.sort((a,b)=>{
      //   a>b? 1: -1
      // })
      return list.sort((a, b) => (a[key] > b[key] ? compare : -compare));
    },
  },
  mounted() {
    this.fetchCases();
  },
  methods: {
    async fetchCases() {
      const url = "https://api.covid19api.com/summary";
      const summary = await this.fetchData("get", url);
      console.log(summary, "res");
      this.countries = summary.Countries;
    },
  },
};
</script>

<style scoped>
.list {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 0.5em;
  margin-top: 1em;
}
.country {
  border: 1px solid #efefef;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5em;
  font-size: 12px;
}
.country img {
  max-width: 1em;
  margin-right: 1em;
}
.country .name {
  margin-right: 1em;
  font-weight: bold;
}
.buttons {
  margin-top: 1em;
  display: flex;
  justify-content: space-between;
}
</style>
