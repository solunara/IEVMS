<template>
    <div class="breadcrumb">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item v-for="v in lists" :key="v.path">
                <router-link :to="v.path">{{ v.meta.title }}</router-link>
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script setup>
import { ref ,onMounted, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute();
const lists = ref([]); //数据

watch(route, (newVal, oldVal)=>{
    getBreadcrumb(newVal.matched);
}, {deep:true, immediate:true})

function getBreadcrumb(matched){
    lists.value = matched;
}
</script>

<style lang="scss" scoped>
.breadcrumb {
  padding:20px;
  display: inline-block;
  color: #fff;
}
</style>