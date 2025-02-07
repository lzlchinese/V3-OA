<script setup>
import { defineProps, defineEmits, ref, watch } from "vue";
const props = defineProps({
  dialogFormVisible: {
    type: Boolean,
    required: true,
  }
});

const emit = defineEmits(['getPermanentform']);

const Permanentform = ref({
  name: "",
  region: "",
});
const dialogVisible = ref(false);
const ruleFormRef = ref();
const rules = ref({
  name: [
    { required: true, message: "Please input Activity name", trigger: "blur" },
    { min: 3, max: 5, message: "Length should be 3 to 5", trigger: "blur" },
  ],
  region: [
    {
      required: true,
      message: "Please select Activity zone",
      trigger: "change",
    },
  ],
});
watch(
  () => props.dialogFormVisible,
  (val) => {
    console.log(val);
    dialogVisible.value = val;
  },
  { immediate: true }
);
const formLabelWidth = "140px";

const submitForm = async (ruleFormRef) => {
  if (!ruleFormRef) return;
  await ruleFormRef.validate((valid, fields) => {
    if (valid) {
      emit('getPermanentform', Permanentform);
      console.log("submit!");
    } else {
      console.log("error submit!", fields);
    }
  });
};
</script>
<template>
  <el-dialog
    v-model="dialogVisible"
    :title="title"
    width="30%"
    @close="dialogVisible = false"
  >
    <el-form ref="ruleFormRef" :model="Permanentform" :rules="rules">
      <el-form-item label="xxxx" :label-width="formLabelWidth" prop="name">
        <el-input v-model="Permanentform.name" autocomplete="off" />
      </el-form-item>
      <el-form-item
        label="长驻区域"
        :label-width="formLabelWidth"
        prop="region"
      >
        <el-select
          v-model="Permanentform.region"
          placeholder="Please select a zone"
        >
          <el-option label="1" value="上海" />
          <el-option label="2" value="南京" />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <div class="dialog-footer">
        <el-button @click="dialogVisible = false">取消</el-button>
        <el-button type="primary" @click="submitForm(ruleFormRef )"> 确认 </el-button>
      </div>
    </template>
  </el-dialog>
</template>
