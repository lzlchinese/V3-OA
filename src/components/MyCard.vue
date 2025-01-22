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
  <el-row class="tac">
    <el-col :span="3">
      <el-menu
        active-text-color="#ffd04b"
        background-color="#545c64"
        class="el-menu-vertical-demo"
        default-active="2"
        text-color="#fff"
        @open="handleOpen"
        @close="handleClose"
      >
        <el-menu-item index="1">
          <span>我的卡片</span>
        </el-menu-item>
        <el-menu-item index="2">
          <span>我的工资</span>
        </el-menu-item>
        <el-menu-item index="3">
          <span>我的考勤</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<style scoped>
.tac,.el-menu  {
  height: 100%;
}
</style>
