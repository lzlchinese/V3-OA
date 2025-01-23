<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import CardTitle from "../Common/CardTitle.vue";
const router = useRouter();

defineProps({});

const count = ref(0);
</script>

<template>
  <el-row>
    <el-col :span="16">
      <el-card style="height: 50%" shadow="always">
        <CardTitle title="我是echarts" />
        <div class="content"></div>
      </el-card>
      <el-card style="height: calc(50% - 10px)" class="top10" shadow="always"
        ><CardTitle title="我是通知公告" />
        <div class="content"></div
      ></el-card>
    </el-col>
    <el-col :span="8">
      <el-card style="height: 50%" shadow="always"
        ><CardTitle title="我是流程" />
        <div class="content"></div
      ></el-card>
      <el-card style="height: calc(50% - 10px)" class="top10" shadow="always"
        ><CardTitle title="我是文档" />
        <div class="content"></div
      ></el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
.el-card {
  width: 100%;
}
::v-deep .el-card__body {
  height: calc(100% - 40px);
}
.el-row {
  height: 100%;
}
.el-col {
  padding: 10px;
}
.top10 {
  margin-top: 10px;
}
.content {
  width: 100%;
  height: calc(100% - 50px);
  margin-top: 20px;
}
</style>
