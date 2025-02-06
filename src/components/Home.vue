<template>
  <el-container>
    <el-aside width="100%">
      <el-menu
        router
        default-active="/Portal"
        class="el-menu-demo"
        mode="horizontal"
      >
        <el-menu-item>
          <div>管理员 | 刘忠磊</div>
        </el-menu-item>
        <el-menu-item index="/Portal">门户</el-menu-item>
        <el-menu-item index="/Process">流程</el-menu-item>
        <el-menu-item index="/Personnel">人事</el-menu-item>
        <el-menu-item index="/Documents">文档</el-menu-item>
        <el-menu-item index="/Projects">项目</el-menu-item>
        <el-menu-item index="/Search">微搜</el-menu-item>
        <el-menu-item @click="logout"
          ><img src="../images/logout_wev8.png" alt=""
        /></el-menu-item>
      </el-menu>
      <div></div>
    </el-aside>
  </el-container>
  <el-main>
    <router-view></router-view>
  </el-main>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
const activeIndex = ref("/Portal");
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

function logout() {
  router.push("/");
}
</script>

<style>
.el-menu--horizontal > .el-menu-item {
  color: #fff;
}
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  background: rgb(0, 141, 246);
  font-size: 15px;
  color: #fff;
  width: 200px;
}
.el-menu--horizontal > .el-menu-item:last-child {
  position: absolute;
  right: 25px;
  top: 0;
}
.el-menu-demo {
  background: rgb(0, 112, 193) !important;
}
.el-menu-demo .el-menu-item {
  color: #a4cceb !important;
}
::v-deep .el-menu-demo .el-menu-item.is-active {
  color: #fff !important;
}
.el-menu-demo .el-menu-item:hover {
  color: #fff !important;
  background-color: rgb(0, 112, 193) !important;
}
.el-main {
  padding: 0 !important;
  width: 100%;
  height: calc(100vh - 60px);
}
</style>
