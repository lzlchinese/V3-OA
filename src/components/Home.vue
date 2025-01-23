<template>
  <el-container>
    <el-aside width="100%">
      <el-menu
        router
        default-active="/Portal"
        class="el-menu-demo"
        mode="horizontal"
      >
        <el-menu-item>
          <div>管理员 | 刘忠磊</div>
        </el-menu-item>
        <el-menu-item index="/Portal">门户</el-menu-item>
        <el-menu-item index="/Process">流程</el-menu-item>
        <el-menu-item index="/Personnel">人事</el-menu-item>
        <el-menu-item index="/Documents">文档</el-menu-item>
        <el-menu-item index="/Projects">项目</el-menu-item>
        <el-menu-item index="/Search">微搜</el-menu-item>
      </el-menu>
    </el-aside>
  </el-container>
  <el-main>
    <router-view></router-view>
  </el-main>
</template>

<script lang="ts" setup>
import { ref, watch } from "vue";
const activeIndex = ref("/Portal");
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
console.log(111111111111, route.path);
// const handleSelect = (key: string, keyPath: string[]) => {
//   console.log(key, keyPath);
// };
//  let showDom = ref(true);
//  watch(
//    () => route.path,
//    () => {
//      showDom.value = false;
//      console.log(222222222, route.path)
//      // 在dom更新之后进行渲染
//     //  nextTick().then(function () {
//     //    showDom.value = true;
//     //  });
//    }
//  );
// watch(()=> '', ()=>{

// })
</script>

<style>
.el-menu--horizontal > .el-menu-item {
  color: #fff;
}
/* .el-menu--horizontal > .el-menu-item:focus {
} */
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  /* margin-right: auto; */
  background: rgb(0, 141, 246);
  font-size: 15px;
  color: #fff;
}
.el-menu-demo {
  background: rgb(0, 112, 193);
}
.el-main {
  padding: 0 !important;
  width: 100%;
  height: calc(100% - 60px);
}
</style>
