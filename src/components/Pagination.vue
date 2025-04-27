<template>
    <!-- 分页 -->
    <el-pagination
        v-model:current-page="props.pageIndex"
        v-model:page-size="props.pageSize"
        :page-sizes="props.optionalPageSize"
        :background="background"
        :layout="props.layout"
        :total="props.total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
    />
</template>

<script setup>
import { ref ,defineProps, defineEmits} from 'vue'
const props = defineProps({
    // 总数量
    total:{
        type: Number,
        default: 0,
    },
    // 当前页码
    pageIndex:{
        type: Number,
        default: 1,
    },
    // 页面大小
    pageSize:{
        type: Number,
        default: 10,
    },
    // 可选页面大小
    optionalPageSize:{
        type: Array,
        default: ()=>[5, 10, 20, 30, 50, 100],
    },
    // 布局
    layout: {
        type: String,
        default: ()=>"total, sizes, prev, pager, next, jumper",
    }
})

const emit = defineEmits(['handleChange', 'update:pageIndex', 'update:pageSize'])

const handleSizeChange = (val)=>{
    emit('update:pageSize', val);
    emit('handleChange');
}
const handleCurrentChange=(val)=>{
    emit('update:pageIndex', val);
    emit('handleChange');
}
</script>

<style lang="scss" scoped>

</style>