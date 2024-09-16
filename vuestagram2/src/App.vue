<template>
  <div>
    <header class="header">
      <div class="logo"><img src="./assets/logo.png" alt="logo"/></div>
      <div class="vuestar">VueStargram</div>
      <div class="mypage-btn"><router-link to="/follower"><img src="./assets/mypage.png" alt="mypage"/></router-link></div>
    </header>
    <router-view></router-view>
    <footer class="footer" v-if="isHomePage">
      <div ><router-link to="/newposting" class="plusBtn"> + </router-link> </div>
    </footer>
  </div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      filters : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
                "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
                "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"]
    }
  },
  computed : {
    isHomePage() {
       return this.$route.path === '/';
     }
  }
}
</script>

<style>
.header {
  padding: 1rem;
  background-color: black;
  color: white;
  border-bottom: 1px solid black;
  display: flex;
  justify-content: space-between;
  position: sticky;
  align-items: center;
  top: 0; 
  z-index: 999; 
  font-size:1.5rem
}
.logo img {
  height: 1.5rem;
}
.vuestar {
   flex : 1;
   text-align: center;
}
.footer{
  display: flex;
  justify-content: center;
  align-items: center;
  padding:0.5rem;
  position: sticky;
  bottom:0;
  background-color: black;
}
.mypage-btn img{
  width:1.5rem
}
.plusBtn {
  cursor: pointer;
  text-decoration: none;
  color : white;
  text-align: center;
  font-size : 1.5rem;
}

#app {
  box-sizing: border-box;
  margin-top: 0;
  width: 100%;
  max-width: 460px;
  margin: 0 auto;
  position: relative;
  color: white;
  background-color: black;
}
html {
  overflow-y: scroll; 
}


</style>
