<script setup>
import Login from "./components/Login.vue";
import Home from "./components/Home.vue";
</script>

<template>
  <div class="login-body">
    <!-- <Login v-if="$route.path === '/'" />
    <Home v-else /> -->
    <router-view />
  </div>
</template>

<style scoped>
.login-body {
  width: 100%;
  height: 100%;
}
</style>
