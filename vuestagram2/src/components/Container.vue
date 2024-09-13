<template>
    <main>
        <div class="main-section" v-for="(posting, i) in postingData" :key="i">
            <div class = "main-userInfo">
                <div class="user-image" :style="{backgroundImage : `url(${posting.userImage})`}"></div>
                <div class="user-name"> {{posting.name}}</div>
            </div>
            <div class="posting-image" :class="posting.filter">
                <img :src="posting.postImage"/>
            </div>
            <div class="posting-content">
                <div>{{posting.date}}</div>
                <div>{{posting.content}}</div>
            </div>
            <div>
                <div  class="likes">❤ {{posting.likes}}</div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
   name : 'containerComponent',
   components: {

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

.main-userInfo{
    display: flex;
    flex-direction: row;
    padding:1rem 0;
}
.user-image{
    width: 2rem;
    height:2rem;
    border-radius: 50em;
    margin-right:1rem;
    background-size: cover; 
    background-position: center; 
    background-repeat: no-repeat; 
}
.user-name{
    text-align: center;
    align-content: center;
}
.posting-image img{
    width : 100%;
}
.posting-content{
    padding : 1rem 0;
}
.likes{
    text-align: right;
}
</style>