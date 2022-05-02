<template>
  <div>
    <h2>Hello {{username}}</h2>
  </div>
</template>

<script>
export default {
  name: "GreetingUser",
  props: { //String, Object, Boolean ...
    // 넘겨받은 프롭
    // 넘겨받은 쪽에서는 값을 직접 바꾸지 못함
    // username: String,
    username: {
      type: String,
      default: "User!",
    }
  }
};
</script>

<!-- scoped: 이 파일에 속한 것에만 적용됨 -->
<style scoped></style>
