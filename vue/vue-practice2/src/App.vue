<template>
  <div>
    <!-- <h1>Hello {{ user.name }}</h1>
    <h1 v-text="user.name"></h1>
    <h1 v-once v-text="user.name"></h1>
    <input type="text" v-model="user.name" /> -->
    <!-- v-once 최초에 한번 랜더링이 일어나면 추후에 값이 변경되어도 그대로임 -->
    <!-- v-model 입력 받는 값들을 value로 연결 -->

    <!-- v-if="showName"와 v-if="showName === true"는 같은 말임 -->
    <!-- <h2 v-if="showName">My name is {{ user.name }}</h2>
    <h2 v-else>이름을 보여줄 수 없습니다.</h2>
    <h2 v-if="user.age > 20">당신은 성인입니다.</h2>
    <h2 v-else-if="user.age > 14 && user.age < 20">당신은 청소년입니다.</h2>
    <h2 v-else>당신은 어린이 입니다.</h2> -->

    <h2 v-if="showName">{{ user.name }}</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      showName: true,
      user: {
        name: "scalper",
        age: 10,
        job: "programmer",
      },
    };
  },
};
</script>

<style></style>
