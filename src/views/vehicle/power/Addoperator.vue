<template>
    <el-card class="box-card marginBottom" style="margin-bottom: 10px;">
        <p>添加操作员</p>
    </el-card>
    <el-card>
        <el-form
            ref="ruleFormRef"
            style="max-width: 30%; align-items: center;"
            :model="ruleForm"
            status-icon
            :rules="rules"
            label-width="auto"
            class="demo-ruleForm"
        >
            <el-form-item label="用户名" prop="account">
                <el-input v-model="ruleForm.account" type="text" autocomplete="off" />
            </el-form-item>
            <el-form-item label="密码" prop="password">
                <el-input v-model="ruleForm.password" type="password" autocomplete="off" />
            </el-form-item>
            <el-form-item label="确认密码" prop="confirmPassword">
                <el-input
                    v-model="ruleForm.confirmPassword"
                    type="password"
                    autocomplete="off"
                />
            </el-form-item>
            <el-form-item>
                <el-button type="warning" @click="resetForm(ruleFormRef)">重置</el-button>
                <el-button type="primary" @click="submitForm(ruleFormRef)">
                    添加
                </el-button>
            </el-form-item>
        </el-form>
    </el-card>
</template>

<script setup>
import { ref, reactive } from "vue"
import { ElNotification } from 'element-plus'
import { useRouter } from 'vue-router'
import {operatorData} from './operatorData.js'
import md5 from 'md5'

const router = useRouter()
const ruleFormRef = ref()
const ruleForm = reactive({
    account: '',
    password: '',
    confirmPassword: '',
    createTime: '',
})



const validateConfirmPassword = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please input the password again'))
  } else if (value !== ruleForm.password) {
    callback(new Error("Two inputs don't match!"))
  } else {
    callback()
  }
}

const rules = reactive({
    account: [
        { required: true, message: 'Please input active name', trigger: 'blur' },
        { min: 1, max: 18, message: 'Length must be 2 to 18', trigger: 'blur' },
    ],
    password: [
        { required: true, message: 'Please input password', trigger: 'blur' },
        { min: 3, max: 16, message: 'Length must be 3 to 16', trigger: 'blur' },
    ],
    confirmPassword: [{ required: true, validator: validateConfirmPassword, trigger: 'blur' }],
})

const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
        ruleForm.password = md5(ruleForm.password)
        ruleForm.createTime = (new Date()).toLocaleString()
        operatorData.push(ruleForm);
        ElNotification({
            title: '添加成功',
            duration: 1500,
            type: 'success',
        });
        router.push('/power/viewoperator')
    } else {
        ElNotification({
            title: '添加失败',
            duration: 1500,
            type: 'error',
        });
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>

<style lang="scss" scoped>

</style>