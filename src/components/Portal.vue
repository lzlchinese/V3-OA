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
        <el-menu-item index="/CompanyPortal">门户</el-menu-item>
        <el-menu-item index="/NewProcess">流程</el-menu-item>
        <el-menu-item index="/MyCard">人事</el-menu-item>
        <el-menu-item index="/MyDocuments">文档</el-menu-item>
        <el-menu-item index="/MyProjects">项目</el-menu-item>
        <el-menu-item index="/Search">微搜</el-menu-item>
      </el-menu>
    </el-aside>
  </el-container>
  <el-main>
    <router-view></router-view>
  </el-main>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const activeIndex = ref("/CompanyPortal");
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
.el-main {
  padding: 0 !important;
  width: 100%;
  height: calc(100% - 60px);
}
</style>
