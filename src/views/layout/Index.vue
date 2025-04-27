<template>
    <div id="module">
        <el-container class="el-container">
            <!-- 左侧导航 -->
            <NavMenu />

            <el-container class="el-container__el-container">
                <el-header class="el-header">
                    <!-- 第一行 -->
                    <div class="header-top">
                        <div class="left">
                            <FoldExpand />
                            <Breadcrumb />
                        </div>
                        <div class="right">
                            <lang />
                            <el-button @click="confirmLogout" type="danger">
                                <el-icon size="20px"><SwitchButton /></el-icon>
                            </el-button>
                        </div>
                    </div>

                    <!-- 第二行 -->
                    <div class="header-bottom">
                        <Tag />
                    </div>
                </el-header>

                <el-main>
                    <!-- 右侧主体 -->
                    <router-view />
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>

<script setup>
import NavMenu from '@/views/layout/NavMenu.vue';
import FoldExpand from '@/components/FoldExpand.vue';
import Tag from '@/components/Tag.vue'
import { SwitchButton } from '@element-plus/icons-vue'
import { ElMessageBox } from 'element-plus'
import { removeToken } from '@/config/api'
import { useRouter } from 'vue-router'

const router = useRouter()
const confirmLogout = ()=>{
    ElMessageBox.confirm(
    '是否退出登陆？',
    {
      confirmButtonText: '是',
      cancelButtonText: '否',
      type: 'warning',
      draggable: true,
    }
  )
    .then(async () =>  {
        removeToken()
        router.replace('/login')
    })
}
</script>

<style lang="scss" scoped>
.el-container {
    height: 100vh;
    width: 100vw;

    .el-container__el-container {
        display: flex;
        flex-direction: column;
    }

    .el-header {
        height: 64px;
        display: flex;
        flex-direction: column;
        padding: 0 16px;
        box-sizing: border-box;

        .header-top,
        .header-bottom {
            height: 32px;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        .header-top .left,
        .header-top .right {
            display: flex;
            align-items: center;
            gap: 8px; // 元素间间距可根据需要调整
        }

        .header-bottom {
            justify-content: flex-start;
        }
    }
}
</style>