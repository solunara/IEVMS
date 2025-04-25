<template>
    <div class="tags">
        <el-tag
            v-for="(tag,i) in getTagLists"
            :key="tag.menu_url"
            class="mx-1"
            :closable="tag.menu_url!=='/index'"
            :type="(defaultUrl==tag.menu_url)?'':'info'"
            @click="handleJump(tag)"
            @close="handleClose(tag,i)"
        >
            {{ tag.menu_name }}
        </el-tag>
    </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import {useRouter,useRoute} from 'vue-router'
import {useTagStore} from '@/stores/tag.js'
import {storeToRefs} from 'pinia'

const store = useTagStore();
const router = useRouter();
const route = useRoute();
const {getTagLists} = storeToRefs(store);

let defaultUrl = ref('/index') ; //默认值

//监听route
watch(route,(newVal, oldVal)=>{
  defaultUrl.value = newVal.path;
},{deep:true, immediate:true});

//单击跳转
const handleJump = tag =>{
  if(route.path==tag.menu_url) return;
  router.push(tag.menu_url)
}
//单击删除
const handleClose = (tag,i) =>{
  //1）store对象删除
  store.delTag(i);
  // 2）删除不是当前模块，正常删除
  // 3）删除是当前模块（是不是最后一个模块）
  if(route.path!==tag.menu_url){
    return;
  } else {
    if(i===getTagLists.value.length){
        if (i===1){
            router.push('/index')
            return
        }
    }
    router.push(getTagLists.value[i-1].menu_url)
  }
}
</script>

<style lang="scss" scoped>
// .tags {
//   padding: 3px 10px;
//   background: #20266d;
//   border-top: 1px solid #30377d;
// }
// .tags span{
//   margin: 0 3px;
// }
</style>