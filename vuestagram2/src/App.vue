<template>
  <div>
    <header class="header">
      <div class="logo"><img src="./assets/logo.png" alt="logo"/></div>
      <div class="vuestar">VueStargram</div>
      <div class="plusBtn"> + </div>
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
.header{
  padding : 1rem;
  background-color : black;
  color : white;
  border-bottom : 1px solid black;
  display : flex;
  justify-content: space-between;
}
.logo img {
  height: 1rem;
}
.vuestar {
   flex : 1;
   text-align: center;
}
.plusBtn {
  margin-left : 1rem;
  cursor: pointer;
}

#app {
  box-sizing: border-box;
  margin-top: 0;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
}

</style>
