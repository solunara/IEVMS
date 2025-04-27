<template>
    <el-card class="box-card marginBottom">
        <el-button type="success" @click="setData('add', null)">新增车辆</el-button>
    </el-card>
    <el-card class="box-card">
        <el-table :data="tableData" style="width: 100%; margin-bottom: 10px;">
            <el-table-column prop="id" label="序号" />
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
                <el-button type="primary" @click="setData('update', row)">编辑</el-button>
                <el-button type="danger" @click="handleDel(row)">删除</el-button>
                </template>
            </el-table-column>
        </el-table>

        <!-- 分页 -->
        <!-- <el-pagination
            v-model:current-page="listQuery.pageIndex"
            v-model:page-size="listQuery.pageSize"
            :page-sizes="[5, 10, 20, 30]"
            :background="background"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        /> -->
        <Pagination
            :total="total"
            v-model:pageIndex="listQuery.pageIndex"
            v-model:pageSize="listQuery.pageSize"
            @handleChange="getList"
        />
    </el-card>

    <!-- 新增 / 编辑 弹窗 -->
    <AddEditDialog
        width="20%"
        v-model:visible = 'dialogVisible'
        :dialogTitle="category=='add' ? '新增车辆' : '编辑车辆'"
        :btnTitle = "category=='add' ? '新增' : '更新'"
        @confirm="updateData"
    >
        <el-form :model="temp" label-width="120px">
            <el-form-item label="车辆自编号">
                <el-input v-model="temp.number" />
            </el-form-item>

            <el-alert title="车牌号重复!" type="error" center show-icon  v-show="isExist"/>
            <el-form-item label="车牌号">
                <el-input v-model="temp.numberplate" @change="single(temp.numberplate)"
                :disabled="category=='add'?false:true"/>
            </el-form-item>

            <el-form-item label="车辆出厂日期">
                <el-date-picker
                v-model="temp.date"
                type="date"
                placeholder="选择日期"
                style="width: 100%"
                />
            </el-form-item>

            <el-form-item label="车辆状态">
                <el-switch v-model="temp.check" />
            </el-form-item>
        </el-form>
    </AddEditDialog>

    <!-- 删除 弹框 -->
    <AddEditDialog 
        width="20%"
        v-model:visible = 'dialogDelVisible'
        :dialogTitle="'删除'"
        :btnTitle ="'删除'"
        @confirm="deleteData">
        是否删除第 {{ temp.id }} 号车辆数据吗?
    </AddEditDialog>
</template>

<script setup>
import { ref,onMounted,computed } from 'vue'
import { getVehicleList } from '@/api/vehicle'
import useDate from '@/utils/useDate' //vue-hooks
import useCheck from '@/utils/useCheck' //vue-hooks
import AddEditDialog from '@/components/AddEditDialog.vue'
import Pagination from '@/components/Pagination.vue'
import { ElNotification, paginationEmits } from 'element-plus'

const {dateFilter}  = useDate();
const {checkFilter}  = useCheck();

const tableData  = ref([]); //表格数据
const temp = ref({}); //弹框数据
let category = ref(''); //添加或编辑
let dialogVisible = ref(false); //是否显示弹框
let dialogDelVisible = ref(false); //删除弹框
let isExist = ref(false); //车牌校验
let total = ref(0) //总数量
const listQuery = ref({ //查询条件
    pageIndex:1,
    pageSize:10
});

let vehicleData = [
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
const getList = ()=> {
    // 实际是从后端请求车辆数据，这里用写好的 vehicleData
    // let {data:{data}} = getVehicleList(listQuery.value);
    // console.log(data);
    let startIndex = (listQuery.value.pageIndex-1)*listQuery.value.pageSize;
    if(startIndex >= vehicleData.length){
        ElNotification({
            title: '分页过大',
            duration: 1500,
            type: 'error',
        });
        return
    }
    let newData = [];
    for(let i=startIndex; i<vehicleData.length;i++){
        newData.push(vehicleData[i])
        if (newData.length>=listQuery.value.pageSize){
            break
        }
    }
    tableData.value = newData; //表格数据
    total=vehicleData.length
}

//添加或编辑 按钮触发
function setData(type, row){
    category.value = type;
    dialogVisible.value = true; //弹框显示
    type == 'add' ? temp.value = {} : temp.value = {...row};
}

// 关闭弹窗
const closeDialog = ()=>{
    dialogVisible.value = false
}

//添加或编辑 弹框数据提交
async function updateData(catgory){
    
    if (catgory==="add"){
        console.log('add');
        let newData = [ ...vehicleData ];
        temp.value.id=vehicleData.length
        newData.unshift(temp.value);
        vehicleData.unshift(temp.value);
        console.log(vehicleData);
        tableData.value = newData;
        total=newData.length
        ElNotification({
            title: '添加成功',
            duration: 1500,
            type: 'success',
        });
    }else{
        console.log('update');
        let newData = [ ...vehicleData ];
        for(let i=0; i<vehicleData.length; i++){
            if(vehicleData[i].id===temp.value.id){
                newData[i]=temp.value;
                vehicleData[i]=temp.value;
                break;
            }
        }
        ElNotification({
            title: '更新成功',
            duration: 1500,
            type: 'success',
        });
        tableData.value = newData;
        total=newData.length
    }
    dialogVisible.value = false; //弹框隐藏
//   let {data:{code}} = await carSubmit(temp.value);
//   console.log(code);
//   if(code == 20000){
//     ElNotification({
//       title: '提交成功',
//       message: '提交成功',
//       duration: 1000,
//     });
//     getList();
//   }
}

//车辆列表-车牌校验
async function single(numberplate){
    //   let {data:{data:{exist}}} = await numberSingle({numberplate});
    //   console.log(exist);
    const isExised = vehicleData.some(item => item.numberplate === numberplate);
    isExist.value = isExised; //车牌校验 exist=true表示重复
}

//删除
function handleDel(row){
  dialogDelVisible.value = true;
  temp.value = {...row};
}

function deleteData(){
    let newData = [ ...vehicleData ];
    for(let i=0; i<vehicleData.length; i++){
        if(vehicleData[i].id===temp.value.id){
            newData.splice(i,1)
            vehicleData.splice(i,1)
            break;
        }
    }
    tableData.value = newData;
    total=newData.length
    ElNotification({
      title: '删除成功',
      duration: 1500,
      type: 'success',
    });
    dialogDelVisible.value = false;
//   dialogDelVisible.value = false; //弹框隐藏
//   let {data:{code}} = await carDel(temp.value.id);
//   console.log(code);
//   if(code == 20000){
//     ElNotification({
//       title: '删除成功',
//       message: '删除成功',
//       duration: 1000,
//     });
//     getList();
//   }
}

const handleSizeChange = (val)=>{
    listQuery.value.pageSize = val;
    getList();

}
const handleCurrentChange=(val)=>{
    listQuery.value.pageIndex = val;
    getList();
}

</script>

<style lang="scss" scoped>
.marginBottom {
    margin-bottom: 10px;
}
</style>