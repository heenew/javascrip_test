<template>
  <div class="card">
    <!-- name을 주지 않으면 default값이 됨 -->
    <div class="card-header"><slot name="header"></slot></div>
    <div class="card-body"><slot></slot></div>
    <div class="card-footer"><slot name="footer"></slot></div>
    <!-- App.vue에서의 <CardView> Hello Slots!!!! </CardView> 안의 내용을 받아옴 -->
    <!-- 사이에는 빈 값이 넘어왔을때 default값 -->
    <!-- <slot>Default Value</slot> -->
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.3);
  padding: 1rem;
  margin-bottom: 1rem;
  width: 200px;
}
.card-header {
  color: red;
}
.card-body {
  color: green;
}
.card-footer {
  color: pink;
}
</style>
