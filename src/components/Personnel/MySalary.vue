<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import CardTitle from "../Common/CardTitle.vue";
import axios from "../../axios/axios";
const router = useRouter();

defineProps({});

const total = ref(0);
const page = ref(1);
const limit = ref(10);
const tableData = ref([]);
const fetchData = async () => {
  try {
    const response = await axios.get(
      `/salary?name=刘忠磊&page=${page.value}&limit=${limit.value}`,
    );
    tableData.value = response.data.salary;
    total.value = response.data.total;
  } catch (error) {
    console.error("myCard数据请求失败:", error);
  }
};

async function pageChange(v) {
  try {
    const response = await axios.get(
      `/salary?name=刘忠磊&page=${v}&limit=${limit.value}`,
    );
    tableData.value = response.data.salary;
    total.value = response.data.total;
  } catch (error) {
    console.error("myCard数据请求失败:", error);
  }
}

async function prevClick(v) {
  try {
    const response = await axios.get(
      `/salary?name=刘忠磊&page=${v}&limit=${limit.value}`,
    );
    tableData.value = response.data.salary;
    total.value = response.data.total;
  } catch (error) {
    console.error("myCard数据请求失败:", error);
  }
}
async function nextClick(v) {
  try {
    const response = await axios.get(
      `/salary?name=刘忠磊&page=${v}&limit=${limit.value}`,
    );
    tableData.value = response.data.salary;
    total.value = response.data.total;
  } catch (error) {
    console.error("myCard数据请求失败:", error);
  }
}

// // 在组件挂载后发起请求
onMounted(async () => {
  await fetchData();
});
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
            <el-table-column type="selection" width="40" />
            <el-table-column label="年份" width="60">
              <template #default="scope">{{ scope.row.year }}</template>
            </el-table-column>
            <el-table-column property="month" label="期间" width="60" />
            <el-table-column property="times" label="次数" width="60" />
            <el-table-column property="name" label="职员姓名" width="80" />
            <el-table-column property="level" label="工资级别" width="80" />
            <el-table-column property="basicSalary" label="职务工资" />
            <el-table-column property="subsidy" label="综合补贴" />
            <el-table-column property="overtimePay" label="特别加班" />
            <el-table-column property="extraBonuses" label="加算奖金" />
            <el-table-column property="grossPay" label="税前应发工资" />
            <el-table-column property="tax" label="本期应缴税款" />
            <el-table-column property="totalDeduction" label="扣款总计" />
            <el-table-column property="netSalary" label="实发工资" />
          </el-table>
          <el-pagination
            size="small"
            background
            layout="prev, pager, next"
            :total="total"
            class="mt-4"
            @current-change="pageChange"
            @prev-click="prevClick"
            @next-click="nextClick"
          />
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
@import "../../assets/styles/secondary-nav.css";
</style>
