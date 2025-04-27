import { API_CONFIG } from "@/config/api.js";
import request  from "@/api/request.js";

export const getVehicleList = (pageIndex=1, pageSize=10)=>{
    return request(API_CONFIG.getVehicleListApi, {pageIndex, pageSize}, "get", "2000")
}