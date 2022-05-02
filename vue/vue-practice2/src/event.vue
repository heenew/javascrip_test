<template>
  <div>
    <h1>Hello {{ name }}</h1>
    <!-- 마우스 오른쪽 버튼을 눌렀을 때 (left, middle, right)-->
    <button v-on:click.right="changeName">change name</button>
    <!-- <button
      v-on:mouseover="name = 'Code Scalper'"
      v-on:mouseleave="name = 'Scalper'"
    > change name </button> -->

    <!-- prevent 사용하면 자동으로 페이지가 넘어가는 것을 방지 -->
    <a v-on:click.prevent="movePage" href="https://naver.com">naver로 이동</a>
    <h2>{{ number }}</h2>
    <button v-on:click="increment($event, 1)">숫자 1 증가</button>
    <!-- 이벤트를 같이 넘길 때 -->
    <button v-on:click="decrement(1)">숫자 1 감소</button>
    <button v-on:click="increment($event, 5)">숫자 5 증가</button>
    <button v-on:click="decrement(5)">숫자 5 감소</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      name: "scalper",
      number: 0,
    };
  },
  methods: {
    changeName() {
      this.name = "Code Scalper";
    },
    movePage() {
      // e.preventDefault(); // 기본적으로 실행되는 것을 방지함 but 확인 눌러도 이동이 안됨;;
      const check = confirm("페이지를 이동하시겠습니까?");
      if (check) {
        console.log("page 이동");
      } else {
        console.log("페이지 이동 x");
      }
    },
    increment(e, num) {
      console.log(e);
      this.number += num;
    },
    decrement(num) {
      this.number -= num;
    },
  },
};
</script>

<style>
a {
  font-size: 24px;
  display: block;
}
</style>
