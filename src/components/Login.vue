<script setup>
import { ref } from "vue";

defineProps({
  msg: String,
  title: String,
});

const count = ref(0);
</script>

<template>
  <div class="login-content">
    <h1 class="title">{{ title }}</h1>
    <div class="username">
      <div class="username-icon icon"></div>
      <Input class="username-input" placeholder="用户" />
    </div>
    <div class="password">
      <div class="password-icon icon"></div>
      <Input class="username-input" placeholder="密码" />
    </div>
    <Button class="login-button">登录</Button>
  </div>
</template>

<style scoped>
.login-content {
  max-width: 1200px;
  /* margin: 0 auto; */
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
