<template>
  <div>
    <h2>Hello {{ username }}</h2>
    <button @click="displayDetail = true">show detail</button>
    <DetailView
      v-if="displayDetail"
      :displayDetail="displayDetail"
      @closeDetail="close"
      @sendData="showData"
    />
    <!-- @closeDetail: 액션을 받을때 사용 -->
  </div>
</template>

<script>
import DetailView from "./components/DetailView";
export default {
  name: "App",
  components: {
    DetailView,
  },
  data() {
    return {
      username: "",
      displayDetail: false,
    };
  },
  computed: {},
  watch: {},
  directives: {},
  methods: {
    close() {
      this.displayDetail = false;
    },
    showData(data) {
      console.log(data, "data sent!");
      this.username = data;
    },
  },
};
</script>

<style></style>
