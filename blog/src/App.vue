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
            <a class="nav-link active" aria-current="page" href="#">Home</a>
            <a class="nav-link" href="#">Vue</a>
            <a class="nav-link" href="#">React</a>
            <a class="nav-link" href="#">JavaScript</a>
          </div>
        </div>
      </div>
    </nav>

    <div>
      <h1>blog</h1>
    </div>

    <ListPage :lists="lists"/>

  </div>
</template>

<script>
import ListPage from './components/ListPage.vue'
import blogListData from './assets/blogListData'

export default {
  name: 'App',
  data(){
    return {
        lists : blogListData,
    }
  },
  components : {
    ListPage,
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
