<template>
    <div>
        <Post :posting="posting" v-for="(posting, i) in posting" :key="i"/>
    </div>
</template>

<script>
import Post from './Post';
export default {
    name : 'ContainerComponent',
    props : {
        posting : Array,
    },
    components : {
        Post,
    }
}
</script>

<style>

</style>