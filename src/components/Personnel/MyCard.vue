<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import CardTitle from "../Common/CardTitle.vue";
import axios from "../../axios/axios";
const router = useRouter();

defineProps({});
const myInfo = ref({});
const fetchData = async () => {
  try {
    const response = await axios.get("/users?name=刘忠磊");
    myInfo.value = response[0];
  } catch (error) {
    console.error("myCard数据请求失败:", error);
  }
};

// // 在组件挂载后发起请求
onMounted(async () => {
  await fetchData();
});

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
            <el-descriptions-item label="姓名">{{
              myInfo.name
            }}</el-descriptions-item>
            <el-descriptions-item label="性别">{{
              myInfo.sex
            }}</el-descriptions-item>
            <el-descriptions-item label="生日">{{
              myInfo.bathday
            }}</el-descriptions-item>
            <el-descriptions-item label="民族">{{
              myInfo.ethnicity
            }}</el-descriptions-item>
            <el-descriptions-item label="籍贯">{{
              myInfo.placeOfOrigin
            }}</el-descriptions-item>
            <el-descriptions-item label="住址">
              {{ myInfo.livingPlace }}
            </el-descriptions-item>
            <el-descriptions-item label="个人电话">{{
              myInfo.phone
            }}</el-descriptions-item>
            <el-descriptions-item label="个人电子邮件">{{
              myInfo.email
            }}</el-descriptions-item>
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
            <el-descriptions-item label="办公地点">{{
              myInfo.Officelocation
            }}</el-descriptions-item>
            <el-descriptions-item label="岗位">{{
              myInfo.post
            }}</el-descriptions-item>
            <el-descriptions-item label="职务">{{
              myInfo.position
            }}</el-descriptions-item>
            <el-descriptions-item label="职级">{{
              myInfo.rank
            }}</el-descriptions-item>
            <el-descriptions-item label="直接上司">{{
              myInfo.leader
            }}</el-descriptions-item>
            <el-descriptions-item label="座机号码">{{
              myInfo.landline
            }}</el-descriptions-item>
            <el-descriptions-item label="电子邮件">{{
              myInfo.Companyemail
            }}</el-descriptions-item>
            <el-descriptions-item label="办公区域">{{
              myInfo.officeArea
            }}</el-descriptions-item>
            <el-descriptions-item label="入职时间">{{
              myInfo.entryTime
            }}</el-descriptions-item>
            <el-descriptions-item label="资格认证">{{
              myInfo.qualification
            }}</el-descriptions-item
            ><el-descriptions-item label="技能专长">{{
              myInfo.technical
            }}</el-descriptions-item>
          </el-descriptions>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<style scoped>
@import "../../assets/styles/secondary-nav.css";
</style>
