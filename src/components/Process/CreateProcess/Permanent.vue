<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";
const props = defineProps({
  dialogFormVisible: {
    type: Boolean,
    required: true,
  },
  processLevel: {
    type: String,
    required: true,
  },
});

const emit = defineEmits(["getPermanentform"]);

const Permanentform = ref({});
const dialogVisible = ref(false);
const ruleFormRef = ref();
const level = ref("");
const title = ref("");
const rangeTimeLabel = ref("");
const rules = ref({
  area: [{ required: true, message: "请输入出差地区", trigger: "blur" }],
  project: [{ required: true, message: "请输入出差项目", trigger: "blur" }],
  remark: [{ required: true, message: "请输入申请理由", trigger: "blur" }],
  rangeDate: [{ required: true, message: "选择出差时间", trigger: "change" }],
  rangeTime: [{ required: true, message: "选择出差时间", trigger: "change" }],
});
watch(
  () => props.dialogFormVisible,
  (val) => {
    dialogVisible.value = val;
    level.value = props.processLevel;
    if (level.value === "1-1") {
      title.value = "出差申请";
      rangeTimeLabel.value = "出差时间";
    } else if (level.value === "1-2") {
      title.value = "外出申请";
      rangeTimeLabel.value = "外出时间";
    } else if (level.value === "1-3") {
      title.value = "考勤补签申请";
      rangeTimeLabel.value = "补勤时间";
    } else if (level.value === "1-4") {
      title.value = "劳动合同续签申请";
    } else if (level.value === "1-5") {
      title.value = "离职申请";
    } else if (level.value === "1-6") {
      title.value = "转正定级申请";
    } else if (level.value === "1-7") {
      title.value = "资格认证考试申请";
    } else if (level.value === "1-8") {
      title.value = "远程办公申请";
    } else if (level.value === "2-1") {
      title.value = "工会会员登记表";
    } else if (level.value === "2-2") {
      title.value = "采购申请（工会专用）";
    } else if (level.value === "2-3") {
      title.value = "合同审批申请（工会专用）";
    } else if (level.value === "2-4") {
      title.value = "验收入库申请（工会专用）";
    } else if (level.value === "2-5") {
      title.value = "费用报销/汇款申请（工会专用）";
    } else if (level.value === "3-1") {
      title.value = "费用报销/汇款申请";
    } else if (level.value === "3-2") {
      title.value = "到票流程";
    } else if (level.value === "3-3") {
      title.value = "借款申请";
    } else if (level.value === "3-4") {
      title.value = "专利奖励申请";
    } else if (level.value === "4-1") {
      title.value = "名片制作申请";
    } else if (level.value === "4-2") {
      title.value = "车辆使用申请";
    } else if (level.value === "4-3") {
      title.value = "公司资料申请";
    } else if (level.value === "4-4") {
      title.value = "专项培训签证/就业签证申请";
    } else if (level.value === "5-1") {
      title.value = "服务开通申请";
    } else if (level.value === "5-2") {
      title.value = "办公用品申请";
    } else if (level.value === "5-3") {
      title.value = "设备归还申请";
    } else if (level.value === "5-4") {
      title.value = "设备信息更新申请";
    } else if (level.value === "5-5") {
      title.value = "设备领用申请";
    } else if (level.value === "5-6") {
      title.value = "设备更换申请";
    } else if (level.value === "5-7") {
      title.value = "设备带出申请";
    } else if (level.value === "6-1") {
      title.value = "电子签章制作申请";
    } else if (level.value === "6-2") {
      title.value = "合同变更/作废申请";
    } else if (level.value === "6-3") {
      title.value = "用章申请";
    } else if (level.value === "6-4") {
      title.value = "合同审批申请";
    }
  },
  { immediate: true },
);
const formLabelWidth = "140px";

const submitForm = async (ruleFormRef) => {
  if (!ruleFormRef) return;
  await ruleFormRef.validate((valid, fields) => {
    if (valid) {
      emit("getPermanentform", Permanentform);
      emit("dialogVisible", false);
      Permanentform.value = [];
    } else {
      console.log("error submit!", fields);
    }
  });
};

const closeDialog = async () => {
  emit("dialogVisible", false);
  dialogVisible.value = false;
};
</script>
<template>
  <el-dialog
    v-model="dialogVisible"
    :title="title"
    width="30%"
    @close="closeDialog()"
  >
    <el-form ref="ruleFormRef" :model="Permanentform" :rules="rules">
      <el-form-item
        label="出差区域"
        :label-width="formLabelWidth"
        prop="area"
        v-if="level === '1-1'"
      >
        <el-input v-model="Permanentform.area" autocomplete="off" />
      </el-form-item>
      <el-form-item
        :label="rangeTimeLabel"
        :label-width="formLabelWidth"
        prop="rangeDate"
        v-if="level === '1-1' || level === '1-2' || level === '1-3'"
      >
        <el-date-picker
          v-model="Permanentform.rangeDate"
          type="datetimerange"
          range-separator="至"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
        />
      </el-form-item>
      <el-form-item
        label="出差项目"
        :label-width="formLabelWidth"
        prop="project"
        v-if="level === '1-1'"
      >
        <el-input v-model="Permanentform.project" autocomplete="off" />
      </el-form-item>
      <el-form-item
        label="申请理由"
        :label-width="formLabelWidth"
        prop="remark"
      >
        <el-input v-model="Permanentform.remark" autocomplete="off" />
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="closeDialog()">取消</el-button>
        <el-button type="primary" @click="submitForm(ruleFormRef)">
          确认
        </el-button>
      </div>
    </template>
  </el-dialog>
</template>
