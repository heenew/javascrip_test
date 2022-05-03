<template>
  <div>
    <h2>Hello Slots</h2>
    <CardView>
      <template v-slot:header>
        <div>
          <h3>Random Image</h3>
        </div>
      </template>
      <template v-slot:default>
        <img src="https://placeimg.com/200/100/any" alt="" />
      </template>
      <template v-slot:footer>
        <small>thank you</small>
      </template>
    </CardView>

    <!-- <CardView> 와 <card-view>는 이름이 달라도 같은 역할을 함 -->
    <!-- <card-view></card-view> -->
  </div>
</template>

<script>
import CardView from "./components/slot/CardView";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    CardView,
  },
};
</script>

<style></style>
