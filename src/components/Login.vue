<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

defineProps({});

function goToPortal() {
  router.push("/Home");
}
</script>

<template>
  <div class="login">
    <div class="login-content">
      <h1 class="title">{{ "富士通（南京）软件技术有限公司" }}</h1>
      <div class="username">
        <div class="username-icon icon"></div>
        <Input class="username-input" placeholder="用户" />
      </div>
      <div class="password">
        <div class="password-icon icon"></div>
        <Input class="username-input" placeholder="密码" />
      </div>
      <Button class="login-button" @click="goToPortal">登录</Button>
    </div>
  </div>
</template>

<style scoped>
.login {
  background: url("./src/images/background.jpg") no-repeat;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.login-content {
  max-width: 1200px;
  position: relative;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.read-the-docs {
  color: #888;
}
.title {
  font-size: 35px;
  color: #fff;
  text-align: center;
}
.username,
.password {
  background: url("src/images/input_wev8.png") center no-repeat;
  height: 45px;
  padding-top: 25px;
  margin: 0 auto;
  width: 280px;
  position: relative;
}
.username-icon {
  background: url("src/images/username_wev8.png") no-repeat;
}
.password-icon {
  background: url("src/images/password_wev8.png") no-repeat;
}
.icon {
  position: absolute;
  background-size: 20px 20px;
  width: 24px;
  height: 24px;
  top: 24px;
  left: 24px;
}
.username-input {
  width: 60%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: transparent;
  border: none;
  color: #fff;
}
.username-input:focus-visible {
  outline: none;
}
.login-button {
  background: url("src/images/btn_login_wev8.png") center center no-repeat;
  height: 45px;
  margin: 0 auto;
  width: 280px;
  font-size: 14px;
  color: rgb(87, 129, 151);
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
</style>
