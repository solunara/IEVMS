<script setup>
import { reactive } from 'vue'
import { ElConfigProvider } from 'element-plus' // 配置全局element-plus组件语言
import zhCn from 'element-plus/es/locale/lang/zh-cn'
const { locale } = reactive({
    locale: zhCn
})
</script>

<template>
    <el-config-provider :locale="locale">
        <router-view />
    </el-config-provider>
</template>

<style scoped>

</style>
