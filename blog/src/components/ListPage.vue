<template>
    <div>
        <div v-for="(list) in lists" :key="list.number" class="list-container" @click='handleDetail(list.number)'>
            <h5>{{list.title}}</h5>
            <div>{{list.date}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'ListPage', 
    data () {
    },
    props : {
        lists : Array,
    },
    methods : {
        handleDetail(id){
            this.$router.push(`/detail/${id}`)
        }
    }
}
</script>

<style>
    .list-container{
        padding : 20px;
        text-align: center;
        border : solid 2px black;
        margin : 20px;
        border-radius: 20px;
    }
</style>