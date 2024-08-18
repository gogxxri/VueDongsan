<template>
  <div>
    <div class="menu">
      <a v-for="(nav,i) in menuItems" :key="i">{{nav}}</a>
    </div>
    
    <h1>원룸샵</h1>
    
    <div class="list" v-for="(list, i) in products" :key="i">
      <h4>{{list}}</h4>
      <p>60 만원</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      menuItems : ['Home', 'Shop', 'About'],
      products : ['역삼동 원룸', '천호동 원룸', '마포구 원룸'],
    }
  }, components:{

  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu{
  background : darkslateblue;
  padding : 15px;
  border-radius: 5px;
}
.menu a {
  color : white;
  padding : 10px;
}
</style>
