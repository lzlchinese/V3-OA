<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import CardTitle from "../Common/CardTitle.vue";
const router = useRouter();

defineProps({});

const count = ref(0);
const tableData = [
  {
    date: "2016-05-04",
    name: "Aleyna Kutzner",
    address: "Lohrbergstr. 86c, Süd Lilli, Saarland",
  },
];
</script>

<template>
  <el-row>
    <el-col :span="24">
      <el-card style="height: 100%" shadow="always">
        <CardTitle title="我的考勤" />
        <div class="content">
          <el-table
            :data="tableData"
            style="width: 100%; height: calc(100% - 50px)"
          >
            <el-table-column type="selection" width="55" />
            <el-table-column property="姓名" label="姓名" width="120" />
            <el-table-column property="address" label="工号" />
            <el-table-column property="address" label="部门" />
            <el-table-column property="address" label="考勤日期" />
            <el-table-column property="address" label="考勤状态" />
            <el-table-column property="address" label="考勤异常说明" />
            <el-table-column property="address" label="异常时长" />
            <el-table-column property="address" label="旷工天数" />
            <el-table-column property="address" label="剩余调休时间" />
          </el-table>
          <el-pagination
            size="small"
            background
            layout="prev, pager, next"
            :total="50"
            class="mt-4"
          />
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
@import "../../assets/styles/secondary-nav.css";
</style>
