<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import CardTitle from "../Common/CardTitle.vue";
import Permanent from "./CreateProcess/Permanent.vue";
const router = useRouter();

defineProps({});

const dialogFormVisible = ref(false);
const processLevel = ref("");
const getPermanentform = (data) => {
  dialogFormVisible.value = false;
};
const dialogVisible = (data) => {
  dialogFormVisible.value = false;
};

const openDialogForm = (level) => {
  dialogFormVisible.value = true;
  processLevel.value = level;
};
</script>

<template>
  <el-row>
    <el-col :span="8"
      ><el-card style="height: 50%" shadow="always">
        <CardTitle title="人事教育类" />
        <div class="content">
          <!-- <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`1-1`)">长驻申请</a>
          </div> -->
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`1-1`)">出差申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`1-2`)">外出申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`1-3`)">考勤补签申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`1-4`)">劳动合同续签申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`1-5`)">离职申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`1-6`)">转正定级申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`1-7`)">资格认证考试申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`1-8`)">远程办公申请</a>
          </div>
        </div></el-card
      ><el-card style="height: calc(50% - 10px)" class="top10" shadow="always">
        <CardTitle title="工会类" />
        <div class="content">
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`2-1`)">工会会员登记表</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`2-2`)">采购申请（工会专用）</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`2-3`)"
              >合同审批申请（工会专用）</a
            >
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`2-4`)"
              >验收入库申请（工会专用）</a
            >
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`2-5`)"
              >费用报销/汇款申请（工会专用）</a
            >
          </div>
        </div></el-card
      ></el-col
    >
    <el-col :span="8"
      ><el-card style="height: 50%" shadow="always">
        <CardTitle title="业务财务类" />
        <div class="content">
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`3-1`)">费用报销/汇款申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`3-2`)">到票流程</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`3-3`)">借款申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`3-4`)">专利奖励申请</a>
          </div>
        </div></el-card
      ><el-card style="height: calc(50% - 10px)" class="top10" shadow="always">
        <CardTitle title="行政类" />
        <div class="content">
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`4-1`)">名片制作申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`4-2`)">车辆使用申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`4-3`)">公司资料申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`4-4`)"
              >专项培训签证/就业签证申请</a
            >
          </div>
        </div></el-card
      ></el-col
    >
    <el-col :span="8"
      ><el-card style="height: 50%" shadow="always">
        <CardTitle title="基础架构类" />
        <div class="content">
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`5-1`)">服务开通申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`5-2`)">办公用品申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`5-3`)">设备归还申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`5-4`)">设备信息更新申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`5-5`)">设备领用申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`5-6`)">设备更换申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`5-7`)">设备带出申请</a>
          </div>
        </div></el-card
      ><el-card style="height: calc(50% - 10px)" class="top10" shadow="always">
        <CardTitle title="法务风控类" />
        <div class="content">
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`6-1`)">电子签章制作申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`6-2`)">合同变更/作废申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`6-3`)">用章申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="openDialogForm(`6-4`)">合同审批申请</a>
          </div>
        </div></el-card
      ></el-col
    >
  </el-row>
  <Permanent
    v-model:dialogFormVisible="dialogFormVisible"
    v-model:processLevel="processLevel"
    @getPermanentform="getPermanentform"
    @dialogVisible="dialogVisible"
  />
</template>

<style scoped>
@import "../../assets/styles/secondary-nav.css";

.processItem {
  height: 30px;
  border-bottom: 1px dashed #f0f0f0;
  padding-left: 0px;
  position: relative;
}

.processItem > img {
  margin-right: 10px;
}

.processItem > a {
  text-decoration: none;
}
</style>
