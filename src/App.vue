<script setup>
import Login from "./components/Login.vue";
import Portal from "./components/Portal.vue";
</script>

<template>
  <div class="login-body">
    <!-- <Login title="富士通（南京）软件技术有限公司" /> -->
    <!-- <router-view></router-view> -->
    <!-- <router-link to="/"><Login /></router-link>
    <router-link to="/Portal"><Portal /></router-link> -->
    <Login v-if="$route.path === '/'" />
    <Portal v-else />
  </div>
</template>

<style scoped>
.login-body {
  width: 100%;
  height: 100%;
}
</style>
