<template>
    <div class="common-layout">
        <el-container class="el-container">
            <Aside></Aside>
        <el-container class="el-container__el-container">
            <Header></Header>
            <Main></Main>
        </el-container>
        </el-container>
    </div>
</template>

<script setup>
import Aside from '@/views/layout/Aside.vue';
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