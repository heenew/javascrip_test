<!-- Mixins: vue의 다양한 기능을 재사용 할 수 있도록 도와주는 기술 
     자칫하면 복잡해질 수 있기 때문에 짧고 명료하게 작성-->
<template>
  <div>
    <h2>Hello Mixins</h2>
    <ProductStatus />
    <FeeStatus />
    <SavingStatus />
  </div>
</template>

<script>
import ProductStatus from "./components/Mixin/ProductStatus";
import FeeStatus from "./components/Mixin/FeeStatus";
import SavingStatus from "./components/Mixin/SavingStatus";
export default {
  name: "App",
  data() {
    return {};
  },
  components: {
    ProductStatus,
    FeeStatus,
    SavingStatus,
  },
};
</script>

<style scoped></style>
