<template>
    <el-card class="box-card marginBottom" style="margin-bottom: 10px;">
        <el-dropdown @command="handleCommand">
            <el-button type="primary">
                选择操作员<el-icon class="el-icon--right"><arrow-down /></el-icon>
            </el-button>
            <template #dropdown>
                <el-dropdown-menu>
                <el-dropdown-item v-for="v in opersList" :key="v.menu_url"  :command="v.id">{{ v.account }}</el-dropdown-item>
                </el-dropdown-menu>
            </template>
        </el-dropdown>
    </el-card>

    <el-card class="box-card">
        <el-table
            :data="menuList"
            style="width: 100%; margin-bottom: 20px"
            row-key="id"
            border
            default-expand-all
        >
            <el-table-column prop="menu_name" label="菜单目录" />
            <el-table-column prop="permission" label="授权" >
                <template #default="{row}">
                <el-checkbox-group v-model="checkList">
                    <el-checkbox v-for="(v,i) in row.permission" :disabled="!userID" :key="i" :label="v.label" />
                </el-checkbox-group>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
</template>

<script setup>
import { ref ,onMounted} from 'vue'
import { ArrowDown } from '@element-plus/icons-vue'
// import {getModules, getOperatorList} from '@/api/operator'
import {createTree} from '@/utils/fn'
import {operatorData} from './operatorData.js'

let menuList = ref([]); //菜单列表
let userID = ref(''); //操作员ID
let opersList = ref([]); //操作员列表

let modules = [
  {id: 1, menu_name: '首页', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/index', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
  {id: 2, menu_name: '车辆列表', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/vehicle', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: [{label: '新增车辆', value: 'create'}, {label: '编辑', value: 'modify'}, {label: '删除', value: 'delete'}]},
  {id: 3, menu_name: '车辆电量监控', father_id: 0, menu_type: 1, menu_level: 2, menu_url: '/monitor', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
  {id: 4, menu_name: '车辆充电', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/charge', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
  {id: 5, menu_name: '车辆维保', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/maintenance', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
  {id: 6, menu_name: '工单管理', father_id: 3, menu_type: 1, menu_level: 2, menu_url: '/monitor/order', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: [{label: '处理工单', value: 'dealorder'}]},
  {id: 7, menu_name: '地图分布', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/monitor/maplocation', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
  {id: 8, menu_name: '统计分析', father_id: 0, menu_type: 1, menu_level: 1, menu_url: '/monitor/census', creator: '', component: 'vehicle', icon: 'icon-chushihua', modified: '', name: 'vehicle', sort: 2, permission: null},
]

onMounted(async()=>{
    opersList.value =  operatorData;
    handleLevel(menuList.value, modules);
    // let modules = await getModules();
    // let opers = await getOperatorList();
    // opersList.value = opers.data.data;
    // //数据结构转换
    // handleLevel(menuList.value,  modules.data.data.list);
})

//数据结构转换
function handleLevel(menu,data){
  //先取出根
  data.map(item=>{
        if(item.father_id===0){
            menu.push({...item})
        }
  });
  createTree(menu,data);
}
const checkList = ref(['编辑']);

//选择操作员
function handleCommand(command){
  userID.value = command;
}
</script>

<style lang="scss" scoped>

</style>