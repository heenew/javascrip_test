<template>
  <div>
    <h2>전체 금액: {{ totalMoney }}</h2>
    <div>
      <button @click="addMoney(100)">100</button>
      <button @click="addMoney(200)">200</button>
      <button @click="addMoney(300)">300</button>
      <button @click="addMoney(400)">400</button>
    </div>
  </div>
</template>

<script>
import moneyMixin from "../../Mixins/moneyMixins";
export default {
  name: "productStatus",
  //
  mixins: [moneyMixin],
  data() {
    return {
      // mixin 을 사용해도 component에 있는 값이 우선시 됨
      totalMoney: 3000,
    };
  },
  methods: {},
};
</script>

<style></style>
