<template>
  <main class="main">
    <div class="searchBar">
      <h4>팔로워 {{followerCnt}}명</h4>
       <input  v-model="searchQuery" @input="search" placeholder="🔍" />
    </div>
    <div class="post-header" v-for="(follower) in follower" :key="follower.id">
        <div class="profile" :style="{backgroundImage : `url(${follower.image})`}"></div>
        <span class="profile-name">{{follower.name}}</span>
    </div>
  </main>
</template>

<script>
export default {
  name: 'followerPage',
  data(){
    return{
       searchQuery: ''
    }
  },
   methods: {
    search() {
      this.$store.dispatch('follower/searchFollower', this.searchQuery);
    }
  },
  computed: {
    // follower 스테이트 가져오기
    follower() {
      return this.$store.state.follower.follower;
    },
    followerCnt() {
       return this.follower.length;
    }
  },
  created() {
    // 컴포넌트가 생성때 -> 팔로워 데이터 가져오기
    this.$store.dispatch('follower/fetchFollowerData');
  }
}
</script>

<style>
.main{
    margin: 0 0.5rem;
    height:100vh;
}
.searchBar {
  padding: 0.5rem;
  box-sizing: border-box;

}

input {
  margin-bottom: 10px;
  padding: 5px;
  width: 100%;
  box-sizing: border-box; 
}
.post-header {
  display: flex;
  align-items: center;
  margin: 10px 0;
}

.profile {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-size: cover; 
  background-position: center; 
  background-repeat: no-repeat; 
  margin: 10px;
}

.profile-name {
  line-height: 2rem; 
}
</style>
