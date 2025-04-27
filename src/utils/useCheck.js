import { computed } from 'vue'
export default function useCheck() {
    //日期时间文本格式化
    const checkFilter = computed(()=>v=>{
        switch(v){
            case true:
                return '正常' 
            default:
                return '异常'  
        }
    })
    return {
        checkFilter
    }
}