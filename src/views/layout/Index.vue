<template>
    <div id="module">
        <el-container class="el-container">
            <!-- 左侧导航 -->
            <NavMenu />
            <el-container class="el-container__el-container">
                <el-header>
                    <!-- 顶部菜单 -->
                    <Header></Header>
                    <!-- 面包屑 -->
                    <Breadcrumb />
                </el-header>
                <el-main>
                    <!-- 右侧主体 -->
                <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import NavMenu from '@/views/layout/NavMenu.vue';
import Header from '@/views/layout/Header.vue';
</script>

<style lang="scss" scoped>
.el-container {
    height: 100vh;
    width: 100vw;
    .el-container__el-container {
        display: flex;
        flex-direction: column;
    }
}
</style>