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
        <CardTitle title="我的项目" />
        <div class="content">
          <el-table
            :data="tableData"
            style="width: 100%; height: calc(100% - 50px)"
          >
            <el-table-column type="selection" width="55" />
            <el-table-column label="番号">
              <template #default="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column property="类型名" label="项目名称" width="120" />
            <el-table-column
              property="创建时间"
              label="创建时间"
              width="240"
              show-overflow-tooltip
            />
            <el-table-column property="address" label="开发部" />
            <el-table-column property="address" label="负责人" />
            <el-table-column property="address" label="开发人员" />
            <el-table-column property="address" label="开始时间" />
            <el-table-column property="address" label="预检时间" />
            <el-table-column fixed="right" label="操作" min-width="60">
              <template #default>
                <el-button
                  link
                  type="primary"
                  size="small"
                  @click="handleClick"
                >
                  查看
                </el-button>
              </template>
            </el-table-column>
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
