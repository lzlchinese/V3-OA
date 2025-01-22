<template>
  <el-container>
    <el-aside width="100%">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        router
        :ellipsis="false"
        @select="handleSelect"
      >
        <el-menu-item index="0">
          <div>e-cology | 前端用户中心</div>
        </el-menu-item>
        <el-menu-item index="/Page1">门户</el-menu-item>
        <el-menu-item index="/Page2">流程</el-menu-item>
        <el-menu-item index="3">人事</el-menu-item>
        <el-menu-item index="4">知识</el-menu-item>
        <el-menu-item index="5">调查</el-menu-item>
        <el-menu-item index="6">基础</el-menu-item>
        <el-menu-item index="7">法务</el-menu-item>
        <el-menu-item index="8">微搜</el-menu-item>
      </el-menu>
    </el-aside>
  </el-container>
  <el-main>
    <router-view></router-view>
  </el-main>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();

const activeIndex = ref("/Page1");
const handleSelect = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>

<style>
.el-menu--horizontal > .el-menu-item {
  color: #fff;
}
/* .el-menu--horizontal > .el-menu-item:focus {
} */
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  /* margin-right: auto; */
  background: rgb(0, 141, 246);
  font-size: 15px;
  color: #fff;
}
.el-menu-demo {
  background: rgb(0, 112, 193);
}
</style>
