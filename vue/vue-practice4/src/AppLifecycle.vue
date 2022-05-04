<!--
* LifeCycle *
  Creating: beforeCreate(), created() 
  Mounting: beforeMount(), mounted()
  Updating: beforeUpdate(), updated()
  Unmounting: beforeUnmount(), unmounted()
  misc: ...
-->

<template>
  <div>
    <h2>Hello LifeCycle</h2>
    <parentComp />
  </div>
</template>

<script>
import ParentComp from "./components/lifecycle/ParentComp";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    ParentComp,
  },
};
</script>

<style scoped></style>
