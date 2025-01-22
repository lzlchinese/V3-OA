<script setup>
import Login from "./components/Login.vue";
import Portal from "./components/Portal.vue";
</script>

<template>
  <div class="login-body">
    <!-- <Login v-if="$route.path === '/'" />
    <Portal v-else /> -->
    <router-view />
  </div>
</template>

<style scoped>
.login-body {
  width: 100%;
  height: 100%;
}
</style>
