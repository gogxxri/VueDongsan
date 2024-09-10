<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">Vuelog</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
            <a class="nav-link" href="/list">List</a>
            <a class="nav-link" href="#">React</a>
            <a class="nav-link" href="#">JavaScript</a>
          </div>
        </div>
      </div>
    </nav>
    <div class="mt-4">
      <router-link to="/">메인 페이지</router-link> <!--다른 페이지 이동 링크 만들기-->
    </div>
    <div class="mt-4">
      <router-link to="/list">리스트 페이지</router-link>
    </div>
    <div class="mt-4">
      <router-link to="/detail">디테일 페이지</router-link>
    </div>
    
    <router-view :lists="lists"></router-view>

  </div>
</template>

<script>
import blogListData from './assets/blogListData'

export default {
  name: 'App',
  data(){
    return {
        lists : blogListData,
    }
  },
  components : {
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
