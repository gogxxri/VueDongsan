<template>
    <div>
        <!-- {{ $route.params.id }} -->
        <div class="detail-list-container">
            <h5>{{lists[$route.params.id].title}}</h5>
            <div>{{lists[$route.params.id].content}}</div>
            <div>{{lists[$route.params.id].date}}</div>
            <router-view></router-view>
        </div>
        <div @click="$router.go(-1)">
            뒤로가기
        </div>
    </div>
</template>

<script>
export default {
    name : 'DetailPage',
    props : {
        lists : Array,
    }

}
</script>

<style>
    .detail-list-container{
        padding : 20px;
        text-align: center;
        border : solid 2px black;
        margin : 20px;
        border-radius: 20px;
    }
</style>