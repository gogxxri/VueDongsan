<template>
    <div class="discount">
      <h4>지금 결제하면 {{price}}% 할인</h4>
    </div>
</template>

<script>
export default {
  name: 'DiscountBanner',
  data(){
    return {
      price : 20,
    };
  },
  methods:{
  },
  mounted(){
    const timer = setInterval(()=>{
      this.price--
      if(this.price==0){
        clearInterval(timer)
      }
    }, 1000)
  }
}
</script>

<style>
.discount {
  background: #eee;
  padding : 10px;
  margin : 10px;
  border-radius: 5px;;
}
</style>