<template>
  <div>
    <Container/>
  </div>
</template>

<script>

import Container from '../components/Container'
export default {
  name: 'MainPage',
  components: {
    Container,
  },
  computed :{
    postingData(){
      return this.$store.state.postingData;
    }
  },
  mounted(){
    this.$store.dispatch('getPostingData')
  }
}
</script>

<style>
</style>
