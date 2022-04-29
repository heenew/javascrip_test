<template>
  <div>
    <h1>Hello Vue!</h1>
    <h2 class="line-through">line-throug</h2>
    <h2 :class="textdecoration" class="text-red">line-throug</h2>
    <h2 :class="isDone === true ? 'line-through' : 'highlight'">line-throug</h2>
    <!-- v-binding을 생략하고 :만 해도 됨 -->
    <h2
      :class="{
        highlight: isDone === false,
        'text-red': username === 'scalper',
      }"
    >
      Object형태의 동적 클래스
    </h2>
    <!-- {클래스명 : 조건} -->

    <!-- <h2 :class="['text-red', 'highlight']">Array 형태의 동적 클래스 부여</h2> -->
    <h2
      :class="[
        isDone === true ? 'line-through' : 'highlight',
        username === 'scalper' ? 'text-red' : 'text-green',
      ]"
    >
      Array 형태의 동적 클래스 부여
    </h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      isDone: false,
      textdecoration: "line-through",
      username: "scalper1",
    };
  },
};
</script>

<style>
.highlight {
  font-weight: bold;
  background: pink;
}
.text-red {
  color: red;
}
.text-green {
  color: green;
}
.line-through {
  text-decoration: line-through;
}
</style>
