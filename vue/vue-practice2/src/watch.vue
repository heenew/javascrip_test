<template>
  <div>
    <!-- 데이터에 변경이 일어나는 것을 감시하고 인지하는 역할
        값에 변경이 일어났을 떄 어떤 행위를 할 수 있도록 하게 함  -->
    <h1>Watchers</h1>
    <h2>current money :: {{ money }}</h2>
    <div>
      <button @click="money += 100">earn money</button>
      <button @click="money -= 100">spend money</button>
    </div>

    <!-- 오브젝트 안 값의 변화까지는 감지하지 못함기 때문에 추가적인 속성 필요 -->
    <h3>{{ receit }}</h3>
    <button @click="receit.food += 500">buy food</button>
    <hr />
    <input type="text" v-model="userName" />
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userName: "scalper",
      money: 0,
      receit: {
        food: 3000,
        fee: 2000,
        fare: 10000,
      },
    };
  },
  computed: {},
  watch: {
    userName: {
      handler(newValue) {
        console.log(newValue, "newValue");
      },
      immediate: true, // 처음 랜더링 할 때도 맨 처음 값이 콘솔에 나오게 함
    },
    // 오브젝트 형태로 선언
    // receit(newValue, oldValue) {
    //   console.log("영수증에 값 변화가 있음", newValue, oldValue);
    receit: {
      handler(newValue) {
        console.log("영수증에 값 변화", newValue);
      },
      deep: true, // 안에 있는 값 까지 인지하도록 하게 함
    },
    money(newValue, oldValue) {
      console.log(newValue);
      if (newValue > 2000 && newValue > oldValue) {
        console.log("misson complete");
      }
      if (oldValue < 1500 && newValue < oldValue) {
        console.log("save money!!");
      }
    },
  },
  directives: {},
  methods: {},
};
</script>

<style></style>
