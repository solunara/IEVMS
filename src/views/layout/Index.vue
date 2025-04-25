<template>
    <div class="common-layout">
        <el-container class="el-container">
            <NavMenu />
            <el-container class="el-container__el-container">
                <Header></Header>
                <Main></Main>
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