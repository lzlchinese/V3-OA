<template>
  <el-container>
    <el-aside width="100%">
      <el-menu
        router
        :default-active="activePath"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
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
import { useRouter, useRoute } from "vue-router";
import { useCounterStore } from "../stores/store";
const level = useCounterStore();

const router = useRouter();
const route = useRoute();

const activePath = ref("/Portal");

function logout() {
  router.push("/");
}

function handleSelect(key, keyPath) {}

watch(
  () => route.path,
  (path) => {
    const pathLists1 = ["/CompanyPortal", "/ServiceGuide", "/ITGuide"];
    const pathLists2 = ["/NewProcess", "/ToDoProcess", "/CompletedProcess"];
    const pathLists3 = ["/MyCard", "/MySalary", "/MyAttendance"];
    const pathLists4 = [
      "/MyDocuments",
      "/MyInvestigation",
      "/DocumentRecycleBin",
    ];
    const pathLists5 = ["/MyProjects", "/ProjectManagement"];
    if (pathLists1.includes(path)) {
      activePath.value = "/Portal";
    } else if (pathLists2.includes(path)) {
      activePath.value = "/Process";
    } else if (pathLists3.includes(path)) {
      activePath.value = "/Personnel";
    } else if (pathLists4.includes(path)) {
      activePath.value = "/Documents";
    } else if (pathLists5.includes(path)) {
      activePath.value = "/Projects";
    } else {
      activePath.value = "/Search";
    }
  },
  { immediate: true },
);
</script>

<style>
.el-menu--horizontal > .el-menu-item {
  color: #fff;
}
.el-menu-demo {
  background: rgb(0, 112, 193) !important;
}
.el-menu-demo .el-menu-item {
  color: #a4cceb !important;
}
::v-deep .el-menu-demo .el-menu-item.is-active {
  color: #000 !important;
  background-color: #fff !important;
}
.el-menu--horizontal > .el-menu-item.is-active {
  background-color: #fff !important;
}
.el-menu-demo .el-menu-item:hover {
  color: #409eff !important;
  background-color: rgb(235.9, 245.3, 255) !important;
  border-bottom: #409eff solid 2px;
}
.el-menu-demo .el-menu-item:active {
  color: #409eff !important;
  background-color: #fff !important;
  border-bottom: #409eff solid 2px;
}
.el-main {
  padding: 0 !important;
  width: 100%;
  height: calc(100vh - 60px);
}

.el-menu--horizontal > .el-menu-item:nth-child(1) {
  background: rgb(0, 141, 246);
  font-size: 15px;
  color: #fff;
  width: 200px;
}
.el-menu--horizontal > .el-menu-item:nth-child(1):hover {
  background: rgb(0, 141, 246) !important;
  color: #fff !important;
}
.el-menu--horizontal > .el-menu-item:nth-child(1):focus {
  background: rgb(0, 141, 246) !important;
  color: #fff !important;
}

.el-menu--horizontal > .el-menu-item:last-child {
  position: absolute;
  right: 25px;
  top: 0;
}
.el-menu--horizontal > .el-menu-item:last-child:hover {
  background: rgb(0, 112, 193) !important;
}
.el-menu--horizontal > .el-menu-item:last-child:focus {
  background: rgb(0, 112, 193) !important;
}
</style>
