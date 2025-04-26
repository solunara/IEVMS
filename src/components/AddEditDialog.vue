<script setup>
import { ref ,defineProps,defineEmits} from 'vue'
const props = defineProps({
    //弹框标题
    dialogTitle:{
        type:String,
        default:'标题'
    },
    //按钮标题
    btnTitle:{
        type:String,
        default:'确定'
    },
    //是否显示或隐藏
    visible:{
        type:Boolean,
        default:false
    }
})
const emit = defineEmits(['confirm','update:visible'])
//取消触发
const cancel = ()=>{
    emit('update:visible',false)
}
//确定触发
const confirm = ()=>{
    emit('confirm');
}
</script>

<template>
  <!-- 弹框 -->
  <el-dialog 
    v-model="props.visible" 
    :title="props.dialogTitle" 
    :before-close="cancel"
    
    center>
    <slot>
        <p>弹框内容</p>
    </slot>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel">取消</el-button>
        <el-button type="primary" @click="confirm">
          {{ props. btnTitle}}
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>

<style scoped>

</style>
