import { computed } from 'vue'
export default function useDate(){
    //日期时间文本格式化
    const dateFilter = computed(()=>v=>{
        const d = new Date(v);
        const times = d.toLocaleString();
        return times;
    })
    return {
        dateFilter
    }
}