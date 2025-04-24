<template>
    <el-header>
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
        <div>
            <Tag />
        </div>
    </el-header>
</template>

<script setup>
import Lang from '@/components/Lang.vue'
import Tag from '@/views/layout/Tag.vue'
import { SwitchButton, Fold, Expand } from '@element-plus/icons-vue'
</script>

<style lang="scss" scoped>
.el-header {
    display: flex;
    height: 50px;
    align-items: center;
    .fole_expand {
        margin-right: auto;
    }
    button {
        border: 0;
    }
}
</style>