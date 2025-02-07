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
        <CardTitle title="我的待办" />
        <div class="content">
          <el-table
            :data="tableData"
            style="width: 100%; height: calc(100% - 50px)"
          >
            <el-table-column type="selection" width="55" />
            <el-table-column property="姓名" label="请求标题" width="120" />
            <el-table-column property="address" label="创建人" />
            <el-table-column property="address" label="创建日期" />
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

.mt-4 {
  position: absolute;
  right: calc(50% - 100px);
  bottom: 30px;
  transform: translate(-50%, 0);
}
</style>
