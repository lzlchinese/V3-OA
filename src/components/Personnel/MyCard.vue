<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import CardTitle from "../Common/CardTitle.vue";
const router = useRouter();

defineProps({});

const count = ref(0);
</script>

<template>
  <el-row>
    <el-col :span="24">
      <el-card style="height: 100%" shadow="always">
        <CardTitle title="我的卡片" />
        <div class="content">
          <el-descriptions border>
            <el-descriptions-item
              :rowspan="4"
              :width="140"
              label="基本信息"
              align="center"
            >
              <el-image
                style="width: 100px; height: 100px"
                src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
              />
            </el-descriptions-item>
            <el-descriptions-item label="姓名">刘忠磊</el-descriptions-item>
            <el-descriptions-item label="性别">男</el-descriptions-item>
            <el-descriptions-item label="生日">1996-06-15</el-descriptions-item>
            <el-descriptions-item label="民族">汉族</el-descriptions-item>
            <el-descriptions-item label="籍贯">江苏</el-descriptions-item>
            <el-descriptions-item label="住址">
              江苏省南京市建邺区虹苑新寓
            </el-descriptions-item>
            <el-descriptions-item label="个人电话"
              >13062531032</el-descriptions-item
            >
            <el-descriptions-item label="个人电子邮件"
              >1761997923@qq.com</el-descriptions-item
            >
            <el-descriptions-item
              :rowspan="6"
              :width="140"
              label="公司信息"
              align="center"
            >
              <el-image
                style="width: 100px; height: 100px"
                src="src/images/fnst.jpg"
              />
            </el-descriptions-item>
            <el-descriptions-item label="办公地点">南京</el-descriptions-item>
            <el-descriptions-item label="所属分社地址"
              >江苏省南京市雨花台区软件大道xxx号</el-descriptions-item
            >
            <el-descriptions-item label="岗位">开发工程师</el-descriptions-item>
            <el-descriptions-item label="职务">开发担当</el-descriptions-item>
            <el-descriptions-item label="职级"></el-descriptions-item>
            <el-descriptions-item label="直接上司">xxxx</el-descriptions-item>
            <el-descriptions-item label="座机号码">无</el-descriptions-item>
            <el-descriptions-item label="电子邮件"
              >liuzl.fnst@fujistu.com</el-descriptions-item
            >
            <el-descriptions-item label="办公区域"
              >南京富士通大楼3楼西</el-descriptions-item
            >
            <el-descriptions-item label="入职时间"
              >2021-04-01</el-descriptions-item
            >
            <el-descriptions-item label="资格认证"
              >ServiceNow资格证，aws初级</el-descriptions-item
            ><el-descriptions-item label="技能专长"
              >vue，node，aws</el-descriptions-item
            >
          </el-descriptions>
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
</style>
