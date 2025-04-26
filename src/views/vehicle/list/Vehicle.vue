<template>
    <el-card class="box-card marginBottom">
        <el-button type="success" @click="setData('add',null)">新增车辆</el-button>
    </el-card>
    <el-card class="box-card">
        <el-table :data="tableData" style="width: 100%">
            <el-table-column prop="number" label="车辆自编号" />
            <el-table-column prop="numberplate" label="车牌号" />
            <el-table-column prop="date" label="车辆出厂日期" >
                <template #default="{row}">
                {{ dateFilter(row.date) }}
                </template>
            </el-table-column>
            <el-table-column prop="check" label="车辆状态" >
                <template #default="{row}">
                <el-tag class="ml-2" :type="row.check?'success':'danger'">{{ checkFilter(row.check) }}</el-tag>
                </template>
            </el-table-column>

            <!-- 操作 -->
            <el-table-column  label="操作" >
                <template #default="{row}">
                <el-button type="primary" @click="setData('update',row)">编辑</el-button>
                <el-button type="danger">删除</el-button>
                </template>
            </el-table-column>
        </el-table>
    </el-card>
</template>

<script setup>
import { ref,onMounted,computed } from 'vue'
import { getVehicleList } from '@/api/vehicle'
import useDate from '@/utils/useDate' //vue-hooks
import useCheck from '@/utils/useCheck' //vue-hooks
const {dateFilter}  = useDate();
const {checkFilter}  = useCheck();

const tableData  = ref([]); //表格数据
let category = ref(''); //添加或编辑
const temp = ref({}); //弹框数据
let dialogVisible = ref(false); //弹框值
const listQuery = ref({ //查询条件
    pageIndex:1,
    pageSize:10
});

const vehicleData = [
    {id: 14, check: true, date: "2024-06-16T19:20:30.000Z", number: "CL-0014", numberplate: "湘A00014"},
    {id: 13, check: true, date: "2024-06-16T19:20:30.000Z", number: "CL-0013", numberplate: "湘A00013"},
    {id: 12, check: false, date: "2024-06-16T19:20:30.000Z", number: "CL-0012", numberplate: "湘A00012"},
    {id: 11, check: true, date: "2024-06-16T19:20:30.000Z", number: "CL-0011", numberplate: "湘A00011"},
    {id: 10, check: true, date: "2024-06-16T19:20:30.000Z", number: "CL-0010", numberplate: "湘A00010"},
    {id: 9, check: true, date: "2024-06-16T19:20:30.000Z", number: "CL-0009", numberplate: "湘A00009"},
    {id: 8, check: false, date: "2024-06-16T19:20:30.000Z", number: "CL-0008", numberplate: "湘A00008"},
    {id: 7, check: true, date: "2024-06-16T19:20:30.000Z", number: "CL-0007", numberplate: "湘A00007"},
    {id: 6, check: true, date: "2024-06-16T19:20:30.000Z", number: "CL-0006", numberplate: "湘A00006"},
    {id: 5, check: true, date: "2024-06-16T19:20:30.000Z", number: "CL-0005", numberplate: "湘A00005"},
    {id: 4, check: true, date: "2024-06-16T19:20:30.000Z", number: "CL-0004", numberplate: "湘A00004"},
    {id: 3, check: true, date: "2024-06-16T19:20:30.000Z", number: "CL-0003", numberplate: "湘A00003"},
    {id: 2, check: false, date: "2024-06-16T19:20:30.000Z", number: "CL-0002", numberplate: "湘A00002"},
    {id: 1, check: true, date: "2024-06-16T19:20:30.000Z", number: "CL-0001", numberplate: "湘A00001"},
    {id: 0, check: true, date: "2024-06-16T19:20:30.000Z", number: "CL-0000", numberplate: "湘A00000"},
]

onMounted(()=>{
    getList();
});

//车辆查询
const getList = ()=>{
    // 实际是从后端请求车辆数据，这里用写好的 vehicleData
    // let {data:{data}} = getVehicleList(listQuery.value);
    // console.log(data);
  tableData.value = vehicleData; //表格数据
}

//添加或编辑 按钮触发
function setData(type, row){
  category.value = type;
  dialogVisible.value = true; //弹框显示
  type=='add' ? temp.value = {}:temp.value = {...row};
}
</script>

<style lang="scss" scoped>
.marginBottom {
  margin-bottom: 10px;
}
</style>