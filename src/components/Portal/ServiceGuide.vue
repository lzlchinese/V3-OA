<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import CardTitle from "../Common/CardTitle.vue";
const router = useRouter();

defineProps({});

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
    <el-col :span="12">
      <el-card style="height: 50%" shadow="always">
        <CardTitle title="人事教育部" />
        <div class="content">
          <el-table
            :data="tableData"
            style="width: 100%; height: calc(100% - 50px)"
          >
            <el-table-column property="address" label="部署" />
            <el-table-column property="address" label="业务内容" />
            <el-table-column property="address" label="担当者" />
            <el-table-column property="address" label="邮箱" />
            <el-table-column property="address" label="内线" />
            <el-table-column property="address" label="直拨电话" />
          </el-table>
        </div>
      </el-card>
      <el-card style="height: calc(50% - 10px)" class="top10" shadow="always">
        <CardTitle title="业务财务部" />
        <div class="content">
          <el-table
            :data="tableData"
            style="width: 100%; height: calc(100% - 50px)"
          >
            <el-table-column property="address" label="部署" />
            <el-table-column property="address" label="业务内容" />
            <el-table-column property="address" label="担当者" />
            <el-table-column property="address" label="邮箱" />
            <el-table-column property="address" label="内线" />
            <el-table-column property="address" label="直拨电话" />
          </el-table>
        </div>
      </el-card>
    </el-col>
    <el-col :span="12">
      <el-card style="height: 50%" shadow="always">
        <CardTitle title="行政部" />
        <div class="content">
          <el-table
            :data="tableData"
            style="width: 100%; height: calc(100% - 50px)"
          >
            <el-table-column property="address" label="部署" />
            <el-table-column property="address" label="业务内容" />
            <el-table-column property="address" label="担当者" />
            <el-table-column property="address" label="邮箱" />
            <el-table-column property="address" label="内线" />
            <el-table-column property="address" label="直拨电话" />
          </el-table>
        </div>
      </el-card>
      <el-card style="height: calc(50% - 10px)" class="top10" shadow="always">
        <CardTitle title="基础架构部" />
        <div class="content">
          <el-table
            :data="tableData"
            style="width: 100%; height: calc(100% - 50px)"
          >
            <el-table-column property="address" label="部署" />
            <el-table-column property="address" label="业务内容" />
            <el-table-column property="address" label="担当者" />
            <el-table-column property="address" label="邮箱" />
            <el-table-column property="address" label="内线" />
            <el-table-column property="address" label="直拨电话" />
          </el-table>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
@import "../../assets/styles/secondary-nav.css";
</style>
