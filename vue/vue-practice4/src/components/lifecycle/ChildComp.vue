<template>
  <div>
    <h2>Child Component</h2>
    <input type="text" v-model="username" />
  </div>
</template>

<script>
export default {
  name: "ChildComp",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    sayHello() {
      console.log("say Hello");
    },
  },
  beforeCreate() {
    console.log("child beforecreate");
  },
  created() {
    console.log("child created");
  },
  beforeMount() {
    console.log("child beforeMount");
  },
  mounted() {
    console.log("child mounted");
  },
  beforeUpdate() {
    console.log("child beforeUpdate");
  },
  updated() {
    console.log("child updated");
  },
  beforeUnmount() {
    console.log("child beforeUnmount");
  },
  unmounted() {
    console.log("child unmounted");
  },
};
</script>

<style></style>
