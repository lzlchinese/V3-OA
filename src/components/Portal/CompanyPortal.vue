<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";
import CardTitle from "../Common/CardTitle.vue";
import Directory from "../Common/Directory.vue";
const router = useRouter();

defineProps({});

const announcement = ref([
  { title: "2025年休假表", link: "#chapter1", date: "2025-01-23" },
  {
    title: "关于2025年春节放假的通知 未读文档",
    link: "#chapter2",
    date: "2025-01-22",
  },
]);

const toDo = ref([
  {
    title: "请假申请-刘忠磊-2025-01-23",
    link: "#chapter1",
    date: "2025-01-23",
  },
]);

const myAttendance = ref([
  { title: "正常", link: "#chapter1", date: "2025-01-23" },
  { title: "异常", link: "#chapter1", date: "2025-01-22" },
]);

const myInvestigation = ref([
  {
    title: "FNST信息安全强化教育（2024）",
    link: "#chapter1",
    date: "2025-01-23",
  },
]);

// 模拟数据
const data = ref([
  { value: 11, name: "A" },
  { value: 31, name: "B" },
  { value: 75, name: "C" },
  { value: 25, name: "D" },
  { value: 16, name: "E" },
]);

// 图表配置项
const chartOption = computed(() => {
  return {
    xAxis: {
      type: "category",
      data: data.value.map((v) => v.name),
    },
    yAxis: {
      type: "value",
    },
    series: [
      {
        type: "line",
        data: data.value.map((v) => v.value),
      },
    ],
  };
});
</script>

<template>
  <el-row>
    <el-col :span="16">
      <el-card style="height: 50%" shadow="always">
        <CardTitle title="仪表盘" />
        <div class="content">
          <e-charts :option="chartOption" class="chart"></e-charts>
        </div>
      </el-card>
      <el-card style="height: calc(50% - 10px)" class="top10" shadow="always"
        ><CardTitle title="通知公告" />
        <el-scrollbar class="content"
          ><Directory :directoryList="announcement" /></el-scrollbar
      ></el-card>
    </el-col>
    <el-col :span="8">
      <el-card style="height: 33%" shadow="always"
        ><CardTitle title="我的待办" />
        <el-scrollbar class="content"
          ><Directory :directoryList="toDo" /></el-scrollbar
      ></el-card>
      <el-card style="height: 33%" class="top10" shadow="always"
        ><CardTitle title="我的考勤" />
        <el-scrollbar class="content"
          ><Directory :directoryList="myAttendance" /></el-scrollbar
      ></el-card>
      <el-card style="height: calc(34% - 24px)" class="top10" shadow="always"
        ><CardTitle title="我的调查" />
        <el-scrollbar class="content"
          ><Directory :directoryList="myInvestigation" /></el-scrollbar
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
