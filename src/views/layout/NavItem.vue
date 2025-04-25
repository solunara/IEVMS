<script setup>
import { ref, defineProps } from 'vue'
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const {item} = defineProps({
    item:{
        type:Object
    }
})
</script>

<template>
    <!-- 无子级 -->
    <el-menu-item :index="item.menu_url" v-if="!item.children">
        <el-icon><icon-menu /></el-icon>
        <span>{{ item.menu_name }}</span>
    </el-menu-item>
    <!-- 有子级 -->
    <el-sub-menu :index="item.menu_url" v-else>
        <template #title>
            <el-icon><icon-menu /></el-icon>
            <span>{{ item.menu_name }}</span>
        </template>
        <NavItem v-for="sub in item.children" :key="sub.menu_url" :item="sub" />
    </el-sub-menu>
</template>

<style lang="scss" scoped>

</style>
