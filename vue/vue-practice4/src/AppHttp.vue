<template>
  <div>
    <h2>Hello HTTP Request</h2>
    <TodoList />
  </div>
</template>

<script>
import TodoList from "./components/http/TodoList";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    TodoList,
  },
};
</script>

<style scoped></style>
