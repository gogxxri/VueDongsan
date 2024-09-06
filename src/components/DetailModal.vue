<template>
  <div class="black-bg" v-if="modalOpen">
      <div class="white-bg">
        <img :src="onerooms[selectedID].image"/>
        <h4>{{ onerooms[selectedID].title }}</h4>
        <h6>{{ onerooms[selectedID].content }}</h6>
        <p>{{ onerooms[selectedID].price }} 원</p>
        <DiscountBanner/>
        <button @click="closeModal">닫기</button>
      </div>  
    </div>
</template>

<script>
import DiscountBanner from './Discount.vue'

export default {
    name : 'DetailModal',
    props : {
        onerooms : Array,
        selectedID : Number,
    },
    components:{
        DiscountBanner : DiscountBanner,
    },
}
</script>

<style>

</style>