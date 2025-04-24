<template>
    <!-- 国际化 -->
    <div class="locals">
        <el-dropdown>
            <el-button type="primary">
                选择语言<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </el-button>
            <template #dropdown>
                <el-dropdown-menu>
                <el-dropdown-item @click="changeLanguage('zh')">简体中文</el-dropdown-item>
                <el-dropdown-item @click="changeLanguage('en')">English</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </div>
</template>

<script setup>
import { ArrowDown } from '@element-plus/icons-vue';
import { useI18n } from 'vue-i18n';
const { locale } = useI18n();
const changeLanguage = (langType)=>{
    locale.value = langType;
    localStorage.setItem('lang', type); // 缓存到本地
}
</script>

<style scoped>

</style>