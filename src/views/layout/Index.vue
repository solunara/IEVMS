<template>
    <div id="module">
        <!-- container 布局容器 -->
        <el-container>
            <!-- 左侧菜单 -->
            <NavMenu />

            <!-- 右侧主体 -->
            <el-container>
                <!-- 头部 -->
                <el-header>
                    <!-- 面包屑 -->
                    <Breadcrumb />
                    <!-- 语言切换 -->
                    <Lang />
                </el-header>

                <!-- 主体 -->
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import NavMenu from './NavMenu.vue';
import Breadcrumb from './Breadcrumb.vue';
import Lang from './Lang.vue';
</script>

<style lang="scss" scoped>

</style>