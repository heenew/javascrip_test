<template>
  <div>
    <h2>Hello Composition API</h2>
  </div>
  <TestComponent />
</template>

<script>
import TestComponent from "./components/composition/TestComponent";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    TestComponent,
  },
};
</script>

<style scoped></style>
