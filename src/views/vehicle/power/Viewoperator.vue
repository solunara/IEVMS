<template>
  <el-card class="box-card marginBottom" style="width: 100%; margin-bottom: 10px;">
    <p>操作员列表</p>
  </el-card>

  <el-card class="box-card">
    <el-table :data="lists" style="width: 100%">
      <el-table-column prop="account" label="用户名" />
      <el-table-column prop="password" label="密码" />
      <el-table-column prop="createTime" label="创建时间" >
        <template #default="{row}">
          {{dateFilter(row.createTime)}}
        </template>
      </el-table-column>

      <el-table-column label="操作" >
        <template #default="{row}">
          <el-button type="danger" @click="handleDel(row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 删除弹框 -->
    <myDialog
        width="30%"
        v-model:visible = 'dialogDelVisible'
        :dialogTitle="'删除'"
        :btnTitle ="'删除'"
        @confirm="deleteData">
       <p>是否删除数据？</p>
    </myDialog>

    <!-- 分页 -->
    <Pagination 
        :total="total"
        v-model:pageIndex="listQuery.pageIndex"
        v-model:pageSize="listQuery.pageSize"
        @handleChange="getList"
        style="width: 100%; margin-top: 10px;"
    />
  </el-card>
</template>

<script setup>
import { onMounted, reactive, ref } from 'vue'
import { getOperatorList } from '@/api/operator'
import myDialog from '@/components/MyDialog.vue' //弹框 //分页
import { ElNotification } from 'element-plus'
import useDate from '@/utils/useDate' //vue-hooks
import {operatorData} from './operatorData.js'

const {dateFilter}  = useDate();
const listQuery = ref({ //查询条件
    pageIndex:1,
    pageSize:10
});
let lists = ref([]); //列表数据
let total = ref(1); //总数量
let dialogDelVisible = ref(false); //删除弹框
let temp = ref({}); //弹框的数据

onMounted(()=>{
    getList()
})
function getList(){
    // 实际是从后端请求操作员数据，这里用写好的 operatorData
    // let {data:{data:{list,rows}}} = await getOperatorList(listQuery.value);
    // console.log(list);
    // lists.value = list;
    // total.value = rows;
    let startIndex = (listQuery.value.pageIndex-1)*listQuery.value.pageSize;
    if(startIndex >= operatorData.length){
        ElNotification({
            title: '分页过大',
            duration: 1500,
            type: 'error',
        });
        return
    }
    let newData = [];
    console.log(startIndex);
    for(let i=startIndex; i<operatorData.length;i++){
        console.log('add: ', i);
        newData.push(operatorData[i])
        if (newData.length>=listQuery.value.pageSize){
            break
        }
    }
    console.log(newData);
    console.log(operatorData.length);
    
    lists.value = newData; //表格数据
    total.value = operatorData.length
}

//删除
function handleDel(row){
  dialogDelVisible.value = true;
  temp.value = {...row};
}
//删除操作员
const deleteData = async()=>{
    let newData = [ ...operatorData ];
    for(let i=0; i<operatorData.length; i++){
        if(operatorData[i].id===temp.value.id){
            newData.splice(i,1)
            operatorData.splice(i,1)
            break;
        }
    }
    lists.value = newData;
    total=newData.length
    ElNotification({
      title: '删除成功',
      duration: 1500,
      type: 'success',
    });
    dialogDelVisible.value = false;
//   dialogDelVisible.value = false;
//   let {data:{code}} = await removeUser(temp.value.id);
//   if(code===20000){
//     ElNotification({
//       title: '删除成功',
//       message: '删除成功',
//       duration: 1000,
//     });
//     getList();
//   }
}

</script>

<style scoped>

</style>
