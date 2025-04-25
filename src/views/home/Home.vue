<template>
    <!-- 第一行 -->
    <div class="module-box">
        <div class="box" style="flex: 0 1 20%; margin: 5px;" v-for="(v,i) in lists" :key="i">
            <div class="list-box">
                <i><el-icon><component :is="v.icon"></component></el-icon></i>
                <p>{{ v.title }}</p>
            </div>
        </div>
    </div>
    <!-- 第二行 -->
    <div class="module-box">
        <div style="flex:0 1 60%;margin:5px;">
            <el-card class="box-card">
                <Chart height="450px" :option="stackedAreaOpt" />
            </el-card>
        </div>
        <div style="flex:0 1 40%;margin:5px;">
            <div style="flex:0 1 100%;margin:5px;">
                <el-card class="box-card">
                    <Chart height="200px" :option="doughnutChartOpt" />
                </el-card>
            </div>
            <div style="flex:0 1 100%;margin:5px;">
                <el-card class="box-card">
                    <Chart height="200px" :option="axisAlignwithTickOpt" />
                </el-card>
            </div>
        </div>
    </div>
    <!-- 第三行 -->
    <!-- <div class="module-box">
        <div style="flex:0 1 30%;margin:5px;">
        <el-card class="box-card">
            <Chart height="200px" :option="doughnutChartOpt" />
        </el-card>
        </div>

        <div style="flex:0 1 70%;margin:5px;">
        <el-card class="box-card">
            <Chart height="200px" :option="axisAlignwithTickOpt" />
        </el-card>
        </div>
    </div> -->
</template>

<script setup>
import { ref } from 'vue'
import { Connection, MessageBox } from '@element-plus/icons-vue'
import Chart from './Chart.vue'
import stackedAreaOpt from './stackedAreaOpt'
import doughnutChartOpt from './doughnutChartOpt'
import axisAlignwithTickOpt from './axisAlignwithTickOpt'
const lists = ref([
    {title: '电量监控', icon: Connection},
    {title: '车辆详情', icon: Connection},
    {title: '地图分布', icon: Connection},
    {title: '车辆监控', icon: Connection},
    {title: '统计分析', icon: Connection},
])

</script>

<style lang="scss" scoped>
.module-box {
  display:flex;  /*弹性布局*/
  justify-content: space-between;
}
.list-box{
  margin: 0 10px;
  padding: 20px;
  box-shadow: 0 3px 20px 2px rgb(0 0 0 / 30%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.list-box i {
  font-size: 40px;
}
.box:nth-child(1) .list-box {
  background-image:linear-gradient(#2277ce,#0356ab);
}
.box:nth-child(2) .list-box {
  background-image:linear-gradient(#ba5bd8,#9f3fbd);
}
.box:nth-child(3) .list-box{
  background-image:linear-gradient(#ea8052,#cf673a);
}
.box:nth-child(4) .list-box {
  background-image:linear-gradient(#84f395,#71c24a);
}
.box:nth-child(5) .list-box {
  background-image:linear-gradient(#A44A38,#902569);
}
</style>