<template>
  <div class="black-bg" v-if="modalOpen">
    <div class="white-bg">
      <img :src="onerooms[selectedID].image" />
      <h4>{{ onerooms[selectedID].title }}</h4>
      <h6>{{ onerooms[selectedID].content }}</h6>
      <p>{{ onerooms[selectedID].price}} 원</p>
      <!-- <input @input="month=$event.target.value">개월 -->
      <input v-model.number="month"/>개월 <!--v-model input에 입력한 데이터 state에 저장-->
      <!-- <select v-model="month">
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>개월 -->
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
      month : 1,
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
    }
  }
};
</script>

<style>
</style>
