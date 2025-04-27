import { API_CONFIG } from "@/config/api.js";
import request  from "@/api/request.js";

export const getOperatorList = (pageIndex=1, pageSize=10)=>{
    return request(API_CONFIG.getOperatorListApi, {pageIndex, pageSize}, "get", "2000")
}