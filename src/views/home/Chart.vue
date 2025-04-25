<script setup>
import { ref, onMounted, defineProps, computed} from 'vue'
import * as echarts from 'echarts'
const {width,height,option}  = defineProps({
  width:{
    type:String,
    default:'100%'
  },
  height:{
    type:String,
    default:'100%'
  },
  option:{
    type:Object,
    default:()=>({})
  }
})
const chart = ref();
const style=computed(()=>({
  width,
  height
}))
onMounted(()=>{
    initChart();
})
const initChart = ()=>{
    // 基于准备好的dom，初始化echarts实例
    let mychart = echarts.init(chart.value);
    // 使用刚指定的配置项和数据显示图表。
    mychart.setOption(option);
    //响应式
    window.addEventListener('resize',()=>{
        mychart.resize();
    })
}
</script>

<template>
  <div ref="chart" :style="style"></div>
</template>

<style scoped>

</style>
