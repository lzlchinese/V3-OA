<script setup>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
const handleSelect = (key, keyPath) => {};

const router = useRouter();
const route = useRoute();

const activePath = ref("/MyCard");

watch(
  () => route.path,
  (path) => {
    activePath.value = path;
  },
  { immediate: true },
);

defineProps({});
</script>

<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical"
    :default-active="activePath"
    text-color="#fff"
    @select="handleSelect"
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
@import "../../assets/styles/secondary-nav.css";
</style>
