<template>
  <div class="black-bg" v-if="modalOpen">
    <div class="white-bg">
      <img :src="onerooms[selectedID].image" />
      <h4>{{ onerooms[selectedID].title }}</h4>
      <h6>{{ onerooms[selectedID].content }}</h6>
      <p>{{ onerooms[selectedID].price}} 원</p>
      <input v-model="month" @keydown="handleKeydown"/>개월
      <!-- 1개월 <input type="range" min="1" max="12"  v-model.number="month"/> 12개월  -->
      <p>{{month}}개월 : {{ onerooms[selectedID].price * month }} 원</p>
      <DiscountBanner />
      <button @click="closeModal">닫기</button>
    </div>
  </div>
</template>

<script>
import DiscountBanner from './Discount.vue';

export default {
  name: 'DetailModal',
  data(){
    return {
      month : 3,
    }
  }, 
  watch : {
    month(inputM){ 
      if(isNaN(inputM)){
        alert("숫자만 입력하세요.");
        this.month = 3;
      } 
    }
  },
  props: {
    onerooms: Array,
    selectedID: Number,
    modalOpen: Boolean,
  },
  components: {
    DiscountBanner,
  },
   methods: {
    closeModal() {
      this.$emit('closeModal');
    },
    handleKeydown(event) {
      if (event.key === ' ') {
        event.preventDefault();
        alert('스페이스바 입력불가.');
      }
    }
  },
  beforeUpdate(){
    if(this.month <= 3){
      alert("3개월 이상부터 가능")
      this.month = 3;
    }
  }
};
</script>

<style>
</style>
