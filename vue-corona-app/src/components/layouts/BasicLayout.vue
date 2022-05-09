<template>
  <el-container>
    <el-header><BasicHeader /></el-header>
    <el-container>
      <el-aside width="200px"><SideMenu /></el-aside>
      <el-container>
        <el-main>Main</el-main>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
import BasicHeader from "./BasicHeader";
import SideMenu from "./SideMenu"
export default {
  name: "basicLayout",
  components: {
    BasicHeader,
    SideMenu
  },
};
</script>

<style>
.el-header {
  background: #409eff;
  color: #fff;
  display: flex;
  align-content: center;
}
</style>
