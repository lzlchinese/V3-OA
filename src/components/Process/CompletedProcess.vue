<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import CardTitle from "../Common/CardTitle.vue";
import moment from "moment";
import axios from "../../axios/axios";
const router = useRouter();

defineProps({});
const tableData = ref([]);

const fetchData = async () => {
  try {
    const response = await axios.get("/process?processStatus=1");
    tableData.value = response;
    tableData.value.map((item) => {
      if (item.endTime) {
        item.endTime = moment(item.endTime).format("YYYY-MM-DD");
      }
    });
  } catch (error) {
    console.error("我的待办数据请求失败:", error);
    tableData.value = [];
  }
};
// // 在组件挂载后发起请求
onMounted(async () => {
  await fetchData();
});
</script>

<template>
  <el-row>
    <el-col :span="24">
      <el-card style="height: 100%" shadow="always">
        <CardTitle title="我的已办" />
        <div class="content">
          <el-table
            :data="tableData"
            style="width: 100%; height: calc(100% - 50px)"
          >
            <el-table-column
              property="processName"
              label="请求标题"
              width="120"
            />
            <el-table-column property="姓名" label="工作流" width="120" />
            <el-table-column property="createPerson" label="创建人" />
            <el-table-column property="endTime" label="结束时间" />
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
