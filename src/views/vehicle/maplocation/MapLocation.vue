<template>
    <div id="container">

    </div>
</template>

<script setup>
import AMapLoader from '@amap/amap-jsapi-loader'
import apiKey from '@config/apikey.js'
function initMap(){
    AMapLoader.load({
        key: apiKey,
    })
    .then(AMap => {
        var map = new AMap.map('container', {
            zoom: 11, // 初始化地图缩放层级
            center: [116.397428, 39.90923], // 初始化显示的中心位置：北京天安门
            viewMode: '3D',
            resizeEnable: true, // 监控地图尺寸变化
        })
    })
    .catch(err => {
        console.log(err);
    })
}
initMap()
</script>

<style lang="scss" scoped>
#container {
    width: 100%;
    height: 100%;
}
</style>