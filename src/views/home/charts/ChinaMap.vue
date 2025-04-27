<script setup>
import { ref, onMounted, defineProps, computed} from 'vue'
import * as echarts from 'echarts'
import chainaMap from './china.json'
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
    // 初始化echarts实例
    let mychart = echarts.init(chart.value);
    // 注册地图
    echarts.registerMap('china', chainaMap);
    // 地图配置, 有两种配置series和geo
    // series: 功能较弱，配置简单
    // geo: 坐标系组件，功能强大，可以配置其他效果，比如飞线，动画
    const option = {
      geo: {
        type: 'map',
        map: 'china',
        label: {
          show: true,
        },
        itemStyle: {
          areaColor: '#219edb', // 区域颜色
          borderColor: '#ffffff', // 边框颜色
        },
        zoom: 1.2, // 缩放比例
      },
      series: [
        {
          type: 'effectScatter',
          coordinateSystem: 'geo',
          label: {
            formatter: '{b}',
            position: 'right',
            show: true,
          },
          itemStyle: {
            color: '#f4e925',
            shadowBlur: 10,
            shadowColor: '#333',
          },
          symbol: 'circle',
          data: [
            {
              name: '北京',
              value: [116.46, 39.92],
            },
            {
              name: '长沙',
              value: [113, 28.21],
            },
          ],
        },
      ],
    };
    // 使用上面的配置项和数据显示图表
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
