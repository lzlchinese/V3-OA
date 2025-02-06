<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};
const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};

const router = useRouter();

defineProps({});

const count = ref(0);
</script>

<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical"
    default-active="/MyCard"
    text-color="#fff"
    @open="handleOpen"
    @close="handleClose"
    router
  >
    <el-menu-item index="/MyCard">
      <span>我的卡片</span>
    </el-menu-item>
    <el-menu-item index="/MySalary">
      <span>我的工资</span>
    </el-menu-item>
    <el-menu-item index="/MyAttendance">
      <span>我的考勤</span>
    </el-menu-item>
  </el-menu>
  <el-row class="tac">
    <el-col :span="24">
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-col>
  </el-row>
</template>

<style scoped>
.tac,
.el-menu {
  height: 100%;
  width: calc(100% - 200px);
  float: right;
}
.el-menu-vertical {
  width: 200px;
  float: left;
}
</style>
