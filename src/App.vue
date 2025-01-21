<script setup>
import Login from "./components/Login.vue";
</script>

<template>
  <div class="login-body">
    <!-- <Login title="富士通（南京）软件技术有限公司" /> -->
    <router-view></router-view> <!-- 这里会显示相应的组件 -->
  </div>
</template>

<style scoped>
.login-body {
  width: 100%;
  height: 100%;
}
</style>
