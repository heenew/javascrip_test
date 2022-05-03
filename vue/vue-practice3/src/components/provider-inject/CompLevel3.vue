<template>
  <h2>component 3</h2>
  <h3>passed Data from App = {{ name }}</h3>
</template>

<script>
export default {
  name: "comp3",
  // (provide한)상위 폴더의 값을 넘겨받을때 사용(배열 형태로 받음)
  inject: ["name"],
};
</script>

<style></style>
