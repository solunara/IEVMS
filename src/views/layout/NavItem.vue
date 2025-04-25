<script setup>
import { defineProps } from 'vue'
import { storeToRefs } from 'pinia'
import { useTagStore } from '@/stores/tag.js'
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

const store = useTagStore();
const {getTagLists} = storeToRefs(store);
const handle = item =>{
    //添加判断，去重
    let repeat = getTagLists.value.some(v=>v.menu_url==item.menu_url);
    if(repeat) return;
    store.addTag(item);
}
</script>

<template>
    <!-- 无子级 -->
    <el-menu-item :index="item.menu_url" v-if="!item.children" @click="handle(item)">
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
