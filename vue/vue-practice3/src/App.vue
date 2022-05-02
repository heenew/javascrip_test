<template>
  <div>
    <GreetingUser />
  </div>
</template>

<script>
import GreetingUser from "./components/GreetingUser";
export default {
  name: "App",
  components: {
    // GreetingUser: GreetingUser => key와 value가 같으면 생략 가능
    GreetingUser,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  directives: {},
  methods: {},
};
</script>

<style></style>
