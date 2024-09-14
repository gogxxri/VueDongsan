<template>
  <div>
    <header class="header">
      <div class="logo"><img src="./assets/logo.png" alt="logo"/></div>
      <div class="vuestar">VueStargram</div>
      <div ><router-link to="/newposting" class="plusBtn"> + </router-link> </div>
    </header>
    <router-view></router-view>
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
.plusBtn {
  margin-left : 1rem;
  cursor: pointer;
  text-decoration: none;
  color : white;
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
