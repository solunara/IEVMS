<template>
    <div class="header">
        <!-- 折叠/打开菜单 -->
        <!-- <el-button @click="collapseChange" class="fole_expand">
            <el-icon size="20px" v-if="!isCollapse">
                <Fold />
            </el-icon>
            <el-icon size="20px" v-else>
                <Expand />
            </el-icon>
        </el-button> -->
        
        <!-- 语言切换 -->
        <lang />

        <!-- 退出登录 -->
        <el-button @click="confirmLogout" type="danger">
            <el-icon size="20px"><SwitchButton /></el-icon>
        </el-button>

        <!-- 换行显示 Breadcrumb -->
        <!-- <div class="breadcrumb-line">
            <Breadcrumb />
        </div> -->
    </div>
</template>

<script setup>
import { ElMessageBox } from 'element-plus'
import Lang from '@/components/Lang.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { SwitchButton, Fold, Expand } from '@element-plus/icons-vue'
import { removeToken } from '@/config/api'

const confirmLogout = ()=>{
   
    ElMessageBox.confirm(
    '是否退出登陆？',
    {
      confirmButtonText: '是',
      cancelButtonText: '否',
      type: 'warning',
      draggable: true,
    }
  )
    .then(async () =>  {
        removeToken()
        router.replace('/login')
    })
}
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    flex-wrap: wrap; // 允许内容换行
    align-items: center;
    padding: 0 10px;
    height: 30%;

    .fole_expand {
        margin-right: auto;
    }

    button {
        border: 0;
    }

    .breadcrumb-line {
        width: 100%; // 占据整行
        margin-top: 6px;
        display: flex;
        align-items: center;
    }
}
</style>