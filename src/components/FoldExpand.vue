<template>
    <div>
        <!-- 折叠/打开菜单 -->
        <el-button @click="collapseChange" class="fole_expand">
            <el-icon size="20px" v-if="!isCollapse">
                <Fold />
            </el-icon>
            <el-icon size="20px" v-else>
                <Expand />
            </el-icon>
        </el-button>
    </div>
</template>

<script setup>
import { Fold, Expand } from '@element-plus/icons-vue'
import { useIsCollapse } from '@/stores/isCollapse.js'
import { storeToRefs } from 'pinia'

const { isCollapse } = storeToRefs(useIsCollapse())

const collapseChange = ()=>{
    const isCollapse  = useIsCollapse()
    isCollapse.changeIsCollapse()
}
</script>

<style lang="scss" scoped>

</style>