<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import CardTitle from "../Common/CardTitle.vue";
import Permanent from "./CreateProcess/Permanent.vue";
const router = useRouter();

defineProps({});

const dialogFormVisible = ref(false);
const getPermanentform = (data) => {
  console.log("确认按钮被点击", data.value);
  dialogFormVisible.value = false;
};
</script>

<template>
  <el-row>
    <el-col :span="8"
      ><el-card style="height: 50%" shadow="always">
        <CardTitle title="人事教育类" />
        <div class="content">
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">长驻申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">出差申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">外出申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">考勤补签申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">劳动合同续签申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">离职申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">转正定级申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">资格认证考试申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">远程办公申请</a>
          </div>
        </div></el-card
      ><el-card style="height: calc(50% - 10px)" class="top10" shadow="always">
        <CardTitle title="工会类" />
        <div class="content">
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">工会会员登记表</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true"
              >采购申请（工会专用）</a
            >
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true"
              >合同审批申请（工会专用）</a
            >
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true"
              >验收入库申请（工会专用）</a
            >
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true"
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
            <a href="#" @click="dialogFormVisible = true">费用报销/汇款申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">到票流程</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">借款申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">专利奖励申请</a>
          </div>
        </div></el-card
      ><el-card style="height: calc(50% - 10px)" class="top10" shadow="always">
        <CardTitle title="行政类" />
        <div class="content">
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">名片制作申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">车辆使用申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">公司资料申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true"
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
            <a href="#" @click="dialogFormVisible = true">服务开通申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">办公用品申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">设备归还申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">设备信息更新申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">设备领用申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">设备更换申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">设备带出申请</a>
          </div>
        </div></el-card
      ><el-card style="height: calc(50% - 10px)" class="top10" shadow="always">
        <CardTitle title="法务风控类" />
        <div class="content">
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">电子签章制作申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">合同变更/作废申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">用章申请</a>
          </div>
          <div class="processItem">
            <img src="../../images/workflowTitle_wev8.png" alt="" />
            <a href="#" @click="dialogFormVisible = true">合同审批申请</a>
          </div>
        </div></el-card
      ></el-col
    >
  </el-row>
  <Permanent
    v-model:dialogFormVisible="dialogFormVisible"
    @getPermanentform="getPermanentform"
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
