<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import CardTitle from "../Common/CardTitle.vue";
const router = useRouter();

defineProps({});

const dialogFormVisible = ref(false);
const formLabelWidth = "140px";
const form = ref({
  name: "",
  region: "",
  date1: "",
  date2: "",
  delivery: false,
  type: [],
  resource: "",
  desc: "",
});
</script>

<template>
  <el-row>
    <el-col :span="8"
      ><el-card style="height: 50%" shadow="always">
        <CardTitle title="人事教育类" />
        <div class="content">
          <a href="#" @click="dialogFormVisible = true">长驻申请</a>
        </div></el-card
      ><el-card style="height: calc(50% - 10px)" class="top10" shadow="always">
        <CardTitle title="工会类" />
        <div class="content">工会类</div></el-card
      ></el-col
    >
    <el-col :span="8"
      ><el-card style="height: 50%" shadow="always">
        <CardTitle title="业务财务类" />
        <div class="content">业务财务类</div></el-card
      ><el-card style="height: calc(50% - 10px)" class="top10" shadow="always">
        <CardTitle title="行政类" />
        <div class="content">行政类</div></el-card
      ></el-col
    >
    <el-col :span="8"
      ><el-card style="height: 50%" shadow="always">
        <CardTitle title="基础架构类" />
        <div class="content">基础架构类</div></el-card
      ><el-card style="height: calc(50% - 10px)" class="top10" shadow="always">
        <CardTitle title="法务风控类" />
        <div class="content">法务风控类</div></el-card
      ></el-col
    >
  </el-row>
  <el-dialog v-model="dialogFormVisible" title="长驻申请" width="500">
    <el-form :model="form">
      <el-form-item label="xxxx" :label-width="formLabelWidth">
        <el-input v-model="form.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="长驻区域" :label-width="formLabelWidth">
        <el-select v-model="form.region" placeholder="Please select a zone">
          <el-option label="1" value="上海" />
          <el-option label="2" value="南京" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>
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
  height: 100%;
}
.top10 {
  margin-top: 10px;
}
.content {
  width: 100%;
  height: calc(100% - 40px);
  margin-top: 10px;
  overflow: hidden;
}
</style>
