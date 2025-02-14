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
        <CardTitle title="我的工资" />
        <div class="content">
          <el-table
            :data="tableData"
            style="width: 100%; height: calc(100% - 50px)"
          >
            <el-table-column type="selection" width="55" />
            <el-table-column label="年份">
              <template #default="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column property="类型名" label="期间" width="120" />
            <el-table-column
              property="创建时间"
              label="次数"
              width="240"
              show-overflow-tooltip
            />
            <el-table-column property="address" label="职员姓名" />
            <el-table-column property="address" label="工资级别" />
            <el-table-column property="address" label="职务工资" />
            <el-table-column property="address" label="综合补贴" />
            <el-table-column property="address" label="特别加班" />
            <el-table-column property="address" label="加算奖金" />
            <el-table-column property="address" label="税前应发工资" />
            <el-table-column property="address" label="本期应缴税款" />
            <el-table-column property="address" label="扣款总计" />
            <el-table-column property="address" label="实发工资" />
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
