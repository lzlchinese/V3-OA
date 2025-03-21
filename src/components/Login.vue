<script setup>
import { ref } from "vue";
import { useStore } from "../stores/store";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

const username = ref("");
const password = ref("");

const router = useRouter();
const store = useStore();

defineProps({});

function goToPortal() {
  if (!username.value) {
    ElMessage.error("请填写用户名");
    return;
  }
  if (!password.value) {
    ElMessage.error("请填写密码");
    return;
  }
  if (username.value === "liuzl") {
    store.setLevel(1);
    localStorage.setItem("token", "1");
    localStorage.setItem("role", "admin");
  } else {
    store.setLevel(0);
    localStorage.setItem("token", "2");
    localStorage.setItem("role", "users");
  }

  router.push("/Home");
}
</script>

<template>
  <div class="login">
    <div class="login-content">
      <h1 class="title">{{ "XXX软件技术有限公司" }}</h1>
      <div class="username">
        <div class="username-icon icon"></div>
        <el-input
          v-model="username"
          class="username-input"
          placeholder="用户"
        ></el-input>
      </div>
      <div class="password">
        <div class="password-icon icon"></div>
        <el-input
          v-model="password"
          class="username-input"
          placeholder="密码"
        ></el-input>
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
}

::v-deep .username-input .el-input__wrapper {
  background: transparent;
  border: none;
  box-shadow: none;
}

::v-deep .username-input .el-input__wrapper .el-input__inner {
  color: #fff;
}

::v-deep .username-input .el-input__wrapper .el-input__inner::placeholder {
  color: #666;
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
