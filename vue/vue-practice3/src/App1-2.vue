<template>
  <div>
    <!-- username="scalper": 컴포넌트로 넘겨주는 프롭 -->
    <!-- 콜론 사용 -->
    <GreetingUser
      :username="username"
      :numberOfVisit="numberOfVisit"
      :siteInfo="siteInfo"
    />
    <button @click="changeName()">change</button>
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
    return {
      username: "scalper",
      numberOfVisit: undefined,
      siteInfo: {
        name: "vue preactice",
        teacher: "scalper",
        subject: "frontend",
      },
    };
  },
  computed: {},
  watch: {},
  directives: {},
  methods: {
    changeName() {
      this.username = "DDochi";
    },
  },
};
</script>

<style></style>
