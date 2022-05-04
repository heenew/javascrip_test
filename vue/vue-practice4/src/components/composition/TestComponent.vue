<template>
  <h2>{{ username }}</h2>
  <button @click="changeName">ChangeUserName</button>
  <h2>제품명: {{ name }}, 가격: {{ price }}</h2>
  <button @click="changeProduct">제품 바꾸기</button>
</template>

<script>
import { ref, reactive, toRefs } from "vue";

export default {
  name: "TestComponent",
  setup() {
    const username = ref("scalper");

    const state = reactive({
      name: "TV",
      price: 100,
    });

    function changeName() {
      username.value = "Messi";
    }

    function changeProduct() {
      (state.name = "세탁기"), (state.price = 5000);
    }

    return {
      username,
      changeName,
      ...toRefs(state),
      changeProduct,
    };
  },
};
</script>

<style></style>
