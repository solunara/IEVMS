<template>
    <el-aside 
    :style="{width: isCollapse?'65px':'200px', backgroundColor: 'transparent'}"
    class="custom-aside"
    >
        <el-menu
        :default-active="route.path"
        class="el-menu-vertical-demo custom-menu" router
        >
            <NavItem v-for="v in items" :key="v.menu_url" :item="v" />
      </el-menu>
    </el-aside>
    <div class="aside-right-border"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import NavItem from './NavItem.vue'

const route = useRoute();
const items = ref([]);

const menuData = [
  {id: 1, menu_name: "首页", father_id: 0, menu_type: 1, menu_level: 1, menu_url: "/home"},
  {id: 2, menu_name: "车辆列表", father_id: 0, menu_type: 1, menu_level: 1, menu_url: "/vehicle"},
  {id: 3, menu_name: "电量监控", father_id: 0, menu_type: 1, menu_level: 2, menu_url: "/monitor"},
  {id: 4, menu_name: "车辆充电", father_id: 3, menu_type: 1, menu_level: 2, menu_url: "/monitor/charge"},
  {id: 5, menu_name: "车辆维保", father_id: 3, menu_type: 1, menu_level: 2, menu_url: "/monitor/maintenance"},
  {id: 6, menu_name: "工单管理", father_id: 3, menu_type: 1, menu_level: 2, menu_url: "/monitor/order"},
  {id: 7, menu_name: "地图分布", father_id: 0, menu_type: 1, menu_level: 1, menu_url: "/maplocation"},
  {id: 8, menu_name: "统计分析", father_id: 0, menu_type: 1, menu_level: 1, menu_url: "/census"},
  {id: 9, menu_name: "权限管理", father_id: 0, menu_type: 1, menu_level: 1, menu_url: "/power"},
  {id: 10, menu_name: "创建操作员", father_id: 9, menu_type: 1, menu_level: 2, menu_url: "/power/add"},
  {id: 11, menu_name: "操作员列表", father_id: 9, menu_type: 1, menu_level: 2, menu_url: "/power/list"},
  {id: 12, menu_name: "操作员权限", father_id: 9, menu_type: 1, menu_level: 2, menu_url: "/power/edit"}
]

onMounted(async()=>{
    // 实际是从后端请求菜单数据，这里用写好的 menuData
    // let {data} = await userInfo();
    // let res = data.data;
    let res = menuData
    //先取出根
    res.map(item=>{
        if(item.father_id===0){
            items.value.push({...item})
        }
    });
    function createTree(pData,data){
        for(let i=0;i<pData.length;i++){
            for(let j=0;j<data.length;j++){
                if(data[j].father_id===pData[i].id){
                    if(!pData[i].children){
                        pData[i].children = [];
                    };
                    pData[i].children.push({...data[j]});
                }
            };
            if(pData[i].children){
                createTree(pData[i].children,data);
            };
        };
    };
    createTree(items.value,res);
})
</script>

<style lang="scss" scoped>
.custom-menu {
    background-color: transparent;

    // 所有菜单项背景透明
    ::v-deep(.el-menu-item),
    ::v-deep(.el-sub-menu),
    ::v-deep(.el-sub-menu__title),
    ::v-deep(.el-menu--inline) {
        background-color: transparent !important;
    }

    // 悬停状态也透明
    ::v-deep(.el-menu-item:hover),
    ::v-deep(.el-sub-menu__title:hover) {
        background-color: rgba(255, 255, 255, 0.05) !important;
    }

    // 菜单展开效果
    ::v-deep(.el-menu--inline) {
        transition: all 0.3s ease-in-out !important; // 默认是 height transition，加这个可以让它更柔和
    }
}

.custom-aside {
  background-color: transparent;
  border-right: none;
  z-index: 1;
}

.aside-right-border {
  width: 1px;
  background-color: #ccc;
  height: 100vh;
  position: absolute;
  top: 0;
  left: calc(200px - 1px); // 和 aside 宽度保持一致
  z-index: 2;
  pointer-events: none; // 不干扰点击
}
</style>