<template>
  <div>
    <h2>Hello Component</h2>
    <CompLevel1 />
  </div>
</template>

<script>
import CompLevel1 from "./components/provider-inject/CompLevel1";
export default {
  name: "App",
  components: {
    CompLevel1,
  },
  data() {
    return {
      username: "scalper",
    };
  },
  // 바로 하위 뿐만 아니라 하위의 모든 파일에 값을 넘겨줄때 사용
  provide() {
    return {
      name: this.username,
    };
  },
  computed: {},
  watch: {},
  directives: {},
  methods: {},
};
</script>

<style></style>
