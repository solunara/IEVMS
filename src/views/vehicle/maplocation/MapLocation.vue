<template>e
    <div id="container"></div>
</template>

<script setup>
import AMapLoader from '@amap/amap-jsapi-loader'
import { ref, onMounted, onUnmounted } from "vue";
import {masterCarRoad, car1Road} from './roadline'
import { ElNotification } from 'element-plus'

let marker, passedPolyline;
let car1
let map = ref(null);

onMounted(() => {
    window._AMapSecurityConfig = {
        securityJsCode: "",
    };
    AMapLoader.load({
        key: "", // 申请好的Web端开发者Key，首次调用 load 时必填
        // version: "2.0", // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
        plugins: ["AMap.Scale"], // 需要使用的的插件列表，如比例尺'AMap.Scale'等
    })
    .then((AMap) => {
        map = new AMap.Map("container", {
            // 设置地图容器id
            viewMode: "2D", // 是否为3D地图模式
            zoom: 11, // 初始化地图级别
            center: [116.339524, 40.000674], // 初始化地图中心点位置
        });
        // 点击事件，获取经纬度
        map.on('click', function(e){
           console.log(e.lnglat.getLng() + ', '+ e.lnglat.getLat());
        })

        car1 = createCarRoute(AMap, map, car1Road)
        startCar(car1, car1Road, 100)

        setTimeout(() => {
            createCarAndRoute(AMap, map);
            startCarMove();
        }, 1000);
    })
    .catch((e) => {
        console.log(e);
    });
});

onUnmounted(() => {
    map?.destroy();
});

// ✨ 车辆移动函数
function startCarMove() {
    if (!marker) return;
    setTimeout(()=>{
        ElNotification({
                title: '您的目的地是北京朝阳火车站！',
                duration: 3000,
                type: 'success',
            });
        }, 2000
    )
    setTimeout(()=>{
        marker.moveAlong(masterCarRoad, 10000);  // 10秒跑完整个路线
        ElNotification({
                title: '车辆已起步，请系好安全带！',
                duration: 3000,
                type: 'success',
            });
        }, 3000
    )
}

function startCar(car,roadline,speed) {
    if (!car) return;
    setTimeout(()=>{
        car.moveAlong(roadline, speed);  
    })
}

function createCarAndRoute(AMap, mapInstance) {
    marker = new AMap.Marker({
        map: mapInstance,
        position: [116.339524, 40.000674],
        icon: "https://webapi.amap.com/images/car.png",
        offset: new AMap.Pixel(-26, -13),
        autoRotation: true,
        angle: 0,
    });

    const polyline = new AMap.Polyline({
        map: mapInstance,
        path: masterCarRoad,
        showDir: true,
        strokeColor: "#28F",
        strokeWeight: 6,
    });

    passedPolyline = new AMap.Polyline({
        map: mapInstance,
        strokeColor: "#f60",
        strokeWeight: 6,
    });


    // 在每次车移动时调整视野
    marker.on('moving', function (e) {
        const currentPosition = e.target.getPosition();
        const endPosition = masterCarRoad[masterCarRoad.length - 1];
        if (currentPosition.lat == endPosition.lat && currentPosition.lng == endPosition.lng){
            ElNotification({
                title: '您已安全到达终点，祝您生活愉快',
                duration: 3000,
                type: 'success',
            });
        }
    });

    ElNotification({
        title: '您已上车，车内已被全程监控!',
        duration: 5000,
        type: 'success',
    });
}

function createCarRoute(AMap, mapInstance, roadline) {
    var car = new AMap.Marker({
        map: mapInstance,
        position: roadline[0],
        icon: "https://webapi.amap.com/images/car.png",
        offset: new AMap.Pixel(-26, -13),
        autoRotation: true,
        angle: 0,
    });

    // const polyline = new AMap.Polyline({
    //     map: mapInstance,
    //     path: roadline,
    //     //showDir: true,
    //     // strokeColor: "#28F",
    //     // strokeWeight: 6,
    // });
    return car
}
</script>

<style lang="scss" scoped>
#container {
    margin: 0 auto;
    width: 100%;
    height: 100%;
}
</style>