<template>
    <div class="header">
        <!-- 折叠/打开菜单 -->
        <el-button @click="collapseChange" class="fole_expand">
            <el-icon size="20px" v-if="!isCollapse">
                <Fold />
            </el-icon>
            <el-icon size="20px" v-else>
                <Expand />
            </el-icon>
        </el-button>
        
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
import Lang from '@/components/Lang.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { SwitchButton, Fold, Expand } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.header {
    display: flex;
    flex-wrap: wrap; // 允许内容换行
    align-items: center;
    padding: 0 10px;
    height: auto;

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