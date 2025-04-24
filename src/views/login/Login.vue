<script setup>
import { ref,reactive } from 'vue'
import { Connection, MessageBox } from '@element-plus/icons-vue'

const ruleFormRef = ref()
const ruleForm = reactive({
    account: 'admin',
    password: ''
})

const rules = reactive({
    account: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 18, message: 'Length should be 3 to 18', trigger: 'blur' },
    ],
    password: [
        { required: true, message: 'Please input Activity name', trigger: 'blur' },
        { min: 3, max: 18, message: 'Length should be 3 to 18', trigger: 'blur' },
    ],
})
//登录
function submitForm(formEl){
    formEl.validate(valid=>{
        if(valid){

        }else {

        }
    })
}
</script>

<template>
    <div class="login" >
        <div class="login-content" >
            <div class="login-item login-box" >
                <i><el-icon><Connection /></el-icon></i>
                <p>软件平台</p>
            </div>
            <div class="login-item login-box" >
                <i><el-icon><MessageBox /></el-icon></i>
                <p>软件平台</p>
            </div>
            <!-- 登录 -->
            <div class="login-item login-form" >
               <p class="login-title">电车电量智能监控系统</p>
               <el-form
                    ref="ruleFormRef"
                    :model="ruleForm"
                    :rules="rules"
                    label-width="120px"
                    class="demo-ruleForm"
                    status-icon
                >
                    <el-form-item label="用户名" prop="account">
                        <el-input v-model="ruleForm.account" />
                    </el-form-item>

                    <el-form-item label="密码" prop="password">
                        <el-input type="password" v-model="ruleForm.password" />
                    </el-form-item>

                    <el-form-item>
                        <el-button type="success" @click="submitForm(ruleFormRef)">
                            登录
                        </el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="login-item login-box" >
                <i><el-icon><Connection /></el-icon></i>
                <p>软件平台</p>
            </div>
            <div class="login-item login-box" >
                <i><el-icon><Connection /></el-icon></i>
                <p>软件平台</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
/*登录*/
.login {
    background: url(./assets/img/bg-2.jpg) no-repeat;
    width: 100%;
    height: 100vh;
    background-size: cover;
    perspective: 800px;
}
.login-content {
    display: flex;
    align-items:center;
    justify-content: center;
    position: relative;
    left: 0;
    top: 50%;
    transform: translate(0,-50%); 
    transform-style: preserve-3d;
}
.login-box {
    width: 250px;
    height: 200px;
    margin: 0 10px;
    box-shadow: 0 3px 20px 2px rgba(0, 0, 0, .3);
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
    margin: 20px;
}
.login-box i{
    font-size: 40px;
}

.login-item:nth-child(1) {
    background-image:linear-gradient(#13CABA,#087C59);
    transform: rotateY(30deg) translateZ(50px);
}
.login-item:nth-child(2) {
    background-image:linear-gradient(#2CC3BD,#0B6C80);
    /* transform: rotateY(80deg) translateZ(200px); */
}
.login-item:nth-child(3) {
    background-image:linear-gradient(#269DD7,#1F61D1);
}
.login-item:nth-child(4) {
    background-image:linear-gradient(#4A3ACA,#6322AB);
}
.login-item:nth-child(5) {
    background-image:linear-gradient(#A44A38,#902569);
    transform: rotateY(-30deg) translateZ(50px);
}
.login-form {
    width: 45vh;
    padding: 20px; 
    box-shadow: 0 3px 20px 2px rgba(0, 0, 0, .3);
    /* position: relative;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%); */
    text-align: center;
}
.login-form .el-form-item__content {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    flex: 1;
    line-height: 32px;
    position: relative;
    font-size: var(--font-size);
    min-width: 0;
    justify-content: center;
}
.login-form .el-form-item__content .el-button {
    margin-left: -70px;
}
.login-form .login-title, 
.login-form .el-form-item__label {
    color: #fff;
}

.login .login-title {
    font-size: 25px;
    margin: 20px 0;
}
.login .login-button {
    margin-left: -70px;
    width: 100px;
}
/* 修改输入登陆信息时的错误提示信息样式 */
.login-form :deep(.el-form-item__error) {
  color: red !important; 
  font-family: 'Orbitron', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  /* font-family: sans-serif;
  font-size: 12px;
  line-height: 1;
  padding-top: 2px;
  position: absolute;
  top: 100%;
  left: 0; */
}

</style>
