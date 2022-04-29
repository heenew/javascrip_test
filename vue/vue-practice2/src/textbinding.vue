<template>
  <div>
    <h1>Hello {{ username }}</h1>
    <h1 v-text="username"></h1>
    <p>안녕하세요 저는 {{ user.name }}입니다.</p>
    <p v-html="button"></p>
    <!-- v-html: html문법을 사용할 때  -->

    <!-- v-text는 내용을 모두 바꿔주는 것이기 때문에 비어 있어야 함 -->
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      username: "scalper!!",
      year: 2021,
      user: {
        name: "scalper",
        job: "programmer",
        age: 100,
      },
      button: "<button>click</button>",
    };
  },
};
</script>

<style></style>
