<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";
const props = defineProps({
  dialogFormVisible: {
    type: Boolean,
    required: true,
  },
});

const emit = defineEmits(["getPermanentform"]);

const Permanentform = ref({});
const dialogVisible = ref(false);
const ruleFormRef = ref();
const rules = ref({
  area: [{ required: true, message: "请输入驻场地区", trigger: "blur" }],
  project: [{ required: true, message: "请输入驻场项目", trigger: "blur" }],
  remark: [{ required: true, message: "请输入申请理由", trigger: "blur" }],
  rangeTime: [{ required: true, message: "选择驻场时间", trigger: "change" }],
});
watch(
  () => props.dialogFormVisible,
  (val) => {
    dialogVisible.value = val;
  },
  { immediate: true }
);
const formLabelWidth = "140px";

const submitForm = async (ruleFormRef) => {
  if (!ruleFormRef) return;
  await ruleFormRef.validate((valid, fields) => {
    if (valid) {
      emit("getPermanentform", Permanentform);
      emit("dialogVisible", false);
      Permanentform.value = []
      console.log("submit!");
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
    title="长驻申请"
    width="30%"
    @close="closeDialog()"
  >
    <el-form ref="ruleFormRef" :model="Permanentform" :rules="rules">
      <el-form-item label="长驻区域" :label-width="formLabelWidth" prop="area">
        <el-input v-model="Permanentform.area" autocomplete="off" />
      </el-form-item>
      <el-form-item
        label="驻场时间"
        :label-width="formLabelWidth"
        prop="rangeTime"
      >
        <el-date-picker
          v-model="Permanentform.rangeTime"
          type="daterange"
          range-separator="To"
          start-placeholder="开始时间"
          end-placeholder="结束时间"
          :size="size"
        />
      </el-form-item>
      <el-form-item
        label="驻场项目"
        :label-width="formLabelWidth"
        prop="project"
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
