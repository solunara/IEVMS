<script setup>
import { ref } from 'vue'
import { ElConfigProvider } from 'element-plus' // 配置全局element-plus组件语言
import zhCn from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

// 当前语言，默认中文
const locale = ref(zhCn)

// 切换语言
function toggleLanguage() {
  locale.value = locale.value.name === 'zh-cn' ? en : zhCn
}
</script>

<template>
    <el-config-provider :locale="locale">
        <!-- <button @click="toggleLanguage">
            切换语言 (Current: {{ locale.name }})
        </button> -->

        <router-view />
    </el-config-provider>
</template>

<style scoped>

</style>
