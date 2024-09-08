<template>
    <div>
        <img :src="room.image" class="room-img" />
        <h4 @click="$emit('openModal', room.id)">{{ room.title }}</h4>
        <p>{{ room.price }} 원</p>
        <button @click="increase(room.id)">허위매물 신고</button> 
        <span>신고 수: {{ room.reportCnt }}</span> 
    </div>
</template>

<script>
export default {
    name: 'InfoCard',
    props: {
        room: Object,
    },
    methods: {
        increase(id) {
            this.$emit('increase', id); 
        }
    }
}
</script>

<style>

</style>