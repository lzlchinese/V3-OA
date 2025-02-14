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
  {
    date: "2016-05-03",
    name: "Helen Jacobi",
    address: "760 A Street, South Frankfield, Illinois",
  },
  {
    date: "2016-05-02",
    name: "Brandon Deckert",
    address: "Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen",
  },
  {
    date: "2016-05-01",
    name: "Margie Smith",
    address: "23618 Windsor Drive, West Ricardoview, Idaho",
  },
  {
    date: "2016-05-04",
    name: "Aleyna Kutzner",
    address: "Lohrbergstr. 86c, Süd Lilli, Saarland",
  },
  {
    date: "2016-05-03",
    name: "Helen Jacobi",
    address: "760 A Street, South Frankfield, Illinois",
  },
  {
    date: "2016-05-02",
    name: "Brandon Deckert",
    address: "Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen",
  },
  {
    date: "2016-05-01",
    name: "Margie Smith",
    address: "23618 Windsor Drive, West Ricardoview, Idaho",
  },
  {
    date: "2016-05-04",
    name: "Aleyna Kutzner",
    address: "Lohrbergstr. 86c, Süd Lilli, Saarland",
  },
  {
    date: "2016-05-03",
    name: "Helen Jacobi",
    address: "760 A Street, South Frankfield, Illinois",
  },
  {
    date: "2016-05-02",
    name: "Brandon Deckert",
    address: "Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen",
  },
  {
    date: "2016-05-01",
    name: "Margie Smith",
    address: "23618 Windsor Drive, West Ricardoview, Idaho",
  },
  {
    date: "2016-05-04",
    name: "Aleyna Kutzner",
    address: "Lohrbergstr. 86c, Süd Lilli, Saarland",
  },
  {
    date: "2016-05-03",
    name: "Helen Jacobi",
    address: "760 A Street, South Frankfield, Illinois",
  },
  {
    date: "2016-05-02",
    name: "Brandon Deckert",
    address: "Arnold-Ohletz-Str. 41a, Alt Malinascheid, Thüringen",
  },
  {
    date: "2016-05-01",
    name: "Margie Smith",
    address: "23618 Windsor Drive, West Ricardoview, Idaho",
  },
];
</script>

<template>
  <el-row>
    <el-col :span="24">
      <el-card style="height: 100%" shadow="always">
        <CardTitle title="我的文档" />
        <div class="content">
          <el-table
            :data="tableData"
            style="width: 100%; height: calc(100% - 50px)"
          >
            <el-table-column type="selection" width="55" />
            <el-table-column label="类型">
              <template #default="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column property="类型名" label="类型名" width="120" />
            <el-table-column
              property="创建时间"
              label="创建时间"
              width="240"
              show-overflow-tooltip
            />
            <el-table-column property="address" label="修改时间" />
            <el-table-column property="address" label="附件数" />
            <el-table-column property="address" label="状态" />
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
