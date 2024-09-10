<template>
    <div>
        <div v-for="(list) in lists" :key="list.number">
            <h2>{{list.title}}</h2>
            <p>{{list.date}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name : 'ListPage', 
    props : {
        lists : Array,
    }
}
</script>

<style>

</style>