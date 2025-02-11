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
    const response = await axios.get("/process?processStatus=0");
    tableData.value = response;
    tableData.value.map((item) => {
      item.createTime = moment(item.createTime).format("YYYY-MM-DD");
    });
  } catch (error) {
    console.error("我的待办数据请求失败:", error);
    tableData.value = [
      {
        date: "2016-05-04",
        name: "Aleyna Kutzner",
        address: "Lohrbergstr. 86c, Süd Lilli, Saarland",
      },
    ];
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
        <CardTitle title="我的待办" />
        <div class="content">
          <el-table
            :data="tableData"
            style="width: 100%; height: calc(100% - 50px)"
          >
            <el-table-column type="selection" width="55" />
            <el-table-column
              property="processName"
              label="请求标题"
              width="120"
            />
            <el-table-column property="createPerson" label="创建人" />
            <el-table-column property="createTime" label="创建日期" />
            <el-table-column property="address" label="未操作者" />
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
