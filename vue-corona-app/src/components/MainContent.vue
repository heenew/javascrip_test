<template>
  <h2 class="content-title">{{ content.label }}</h2>
  <!-- content.label이 바뀌면 그에 맞게 내용도 바뀜 -->
  <!-- <component :is="targetComponent"></component> -->
  <component :is="targetComponent"></component>
</template>

<script>
import { defineAsyncComponent } from "vue";
export default {
  name: "MainContent",
  props: {
    content: {
      type: Object,
      default() {
        return {
          label: "TEST Menu",
          path: "Test",
          index: "TestMenu",
        };
      },
    },
  },
  data() {
    //   클릭된 메뉴만 import
    return {
      targetComponent: null,
    };
  },
  watch: {
    content: {
      deep: true,
      handler: function (newValue) {
        this.targetComponent = defineAsyncComponent(() =>
          import(`@/components/${newValue.path}/${newValue.index}`)
        );
      },
    },
  },
};
</script>

<style></style>
