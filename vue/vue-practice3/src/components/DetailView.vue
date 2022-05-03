<template>
  <div class="wrapper">
    <div class="container">
      <h2>Detail Page</h2>
      <!-- props로 넘겨받은 값은 재정의 할 수 없다. -->
      <!-- <button @click="displayDetail = false">close</button> -->
      <button @click="closeDetail">close</button>
      <input type="text" v-model="username" />
      <button @click="sendData">send Data</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailPage",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    closeDetail() {
      //   $emit: 부모로 이벤트를 전송
      this.$emit("closeDetail");
    },
    sendData() {
      // sendData: 보낼 이벤트 이름 / this.username: 보낼 데이터
      this.$emit("sendData", this.username);
    },
  },
  props: {
    // displayDetail: Boolean,
  },
};
</script>

<style sdoped>
.wrapper {
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  background: #fff;
  width: 60%;
}
</style>
