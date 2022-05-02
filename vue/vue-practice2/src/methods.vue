<!-- 조건부 리스트 렌더링 -->
<!-- filter -->
<template>
  <div>
    <h1>Hello Vue</h1>
    <h2>5년 뒤 :: {{ add(5) }}</h2>
    <h2>동갑의 10명이 있다면 나이의 총 합은 :: {{ multiply(age, 20) }}</h2>
    <h2>{{ getTotalScore(100) }}</h2>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      age: 30,
    };
  },
  methods: {
    add(num) {
      console.log(this);
      return this.age + num;
    },
    // add: (num) => {  // 화살표 함수는 한 단계 바깥을 가르켜서 선택이 안됨
    //   console.log(this);
    //   return this.age + num;
    // },
    multiply(num1, num2 = 10) {
      //  '= 10' : 파라미터의 값이 부족하면 10을 출력하게 함
      return num1 * num2;
    },
    getTotalScore(num) {
      // 위에서 선언한 메서드를 다른 메서드에서 사용
      return this.multiply(num, num);
    },
  },
};
</script>

<style></style>
