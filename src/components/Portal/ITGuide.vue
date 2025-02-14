<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import CardTitle from "../Common/CardTitle.vue";
import Directory from "../Common/Directory.vue";
const router = useRouter();

defineProps({});

const tableData = ref([
  {
    index: "1",
    name: "领用公司的硬件设备或耗材时（具体参见备注栏）",
    scenarios: "设备领用申请",
    remark:
      "选项如下：<br>物理设备-> 个人终端设备、项目专用设备、打印会议设备、网络系统设备、安防监控设备;<br>配件耗材-> 个人终端配件、网络系统配件、专用工具耗材、项目专用配件、安防监控配件、打印会议配件; 虚拟主机",
  },
]);

const myAssets = ref([
  { index: "1", asset: "PC主机", num: "D200917_0141", name: "G08FNSTD200141" },
]);
const myServices = ref([
  {
    classification: "VPN",
    opening: "2024-06-01",
    status: "开通",
    closing: "2024-06-02",
  },
]);
</script>

<template>
  <el-row>
    <el-col :span="16"
      ><el-card style="height: 100%" shadow="always">
        <CardTitle title="提交IT申请" />
        <div class="content">
          <el-table
            :data="tableData"
            style="width: 100%"
            height="calc(100% - 10px)"
          >
            <el-table-column prop="index" label="序号" width="80" />
            <el-table-column prop="scenarios" label="使用场景" />
            <el-table-column prop="name" label="流程名称" />
            <el-table-column prop="remark" label="备注" width="250">
              <template v-slot:default="scope">
                <div v-html="scope.row.remark"></div>
              </template>
            </el-table-column>
          </el-table></div></el-card
    ></el-col>
    <el-col :span="8"
      ><el-card style="height: 50%" shadow="always"
        ><CardTitle title="我的资产" />
        <div class="content">
          <el-table
            :data="myAssets"
            style="width: 100%"
            height="calc(100% - 10px)"
          >
            <el-table-column prop="index" label="序号" width="80" />
            <el-table-column prop="asset" label="资产" />
            <el-table-column prop="num" label="资产编号" />
            <el-table-column prop="name" label="计算机名" width="150" />
          </el-table></div></el-card
      ><el-card style="height: calc(50% - 12px)" class="top10" shadow="always"
        ><CardTitle title="我的服务" />
        <div class="content">
          <el-table
            :data="myServices"
            style="width: 100%"
            height="calc(100% - 10px)"
          >
            <el-table-column
              prop="classification"
              label="服务分类"
              width="80"
            />
            <el-table-column prop="opening" label="开通时间" />
            <el-table-column prop="status" label="服务状态" />
            <el-table-column prop="closing" label="到期时间" width="150" />
          </el-table></div></el-card></el-col
  ></el-row>
</template>

<style scoped>
@import "../../assets/styles/secondary-nav.css";
</style>
