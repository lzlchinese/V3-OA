<script setup>
import { ref, watch } from "vue";
import { useRouter, useRoute } from "vue-router";
const handleSelect = (key, keyPath) => {};

const router = useRouter();
const route = useRoute();

const activePath = ref("/CompanyPortal");

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
    <el-menu-item index="/CompanyPortal">
      <span>公司门户</span>
    </el-menu-item>
    <el-menu-item index="/ServiceGuide">
      <span>服务作业指南</span>
    </el-menu-item>
    <el-menu-item index="/ITGuide">
      <span>IT指导指南</span>
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
