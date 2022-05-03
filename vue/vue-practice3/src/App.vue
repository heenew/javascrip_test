<template>
  <div>
    <h2>Hello Component</h2>
    <button @click="activeTab = 'Menu1'">Menu1</button>
    <button @click="activeTab = 'Menu2'">Menu2</button>
    <button @click="activeTab = 'Menu3'">Menu3</button>
    <!-- <Menu1 v-if="activeTab === 'Menu1'" />
    <Menu2 v-if="activeTab === 'Menu2'" />
    <Menu3 v-if="activeTab === 'Menu3'" /> -->

    <!-- <keep-alive>: Menu3에 값을 적고 다른 컴포넌트로 이동해도 값이 유지되게 함 -->
    <keep-alive>
      <component :is="activeTab"></component>
    </keep-alive>
  </div>
</template>

<script>
import Menu1 from "./components/tabItems/Menu1";
import Menu2 from "./components/tabItems/Menu2";
import Menu3 from "./components/tabItems/Menu3";
export default {
  name: "App",
  components: {
    Menu1,
    Menu2,
    Menu3,
  },
  data() {
    return {
      username: "scalper",
      activeTab: "Menu1",
    };
  },
  provide() {
    return {
      name: this.username,
    };
  },
  computed: {},
  watch: {},
  directives: {},
  methods: {},
};
</script>

<style></style>
