<template>
    <div class="common-layout">
        <el-container class="el-container">
            <!-- 左侧导航 -->
            <NavMenu />
            <el-container class="el-container__el-container">
                <el-header>
                    <Header></Header>
                </el-header>
                <el-main>
                    <Main></Main>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import NavMenu from '@/views/layout/NavMenu.vue';
import Header from '@/views/layout/Header.vue';
import Main from '@/views/layout/Main.vue';
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