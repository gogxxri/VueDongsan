<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li>Next</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <Container :posting="posting" :step="step"/>

    <div @click="more" class="morebtn" v-if="step==0">더보기</div>
    <div class="footer">
      <ul class="footer-button-plus">
        <input type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>

    <!-- 탭 만들기
    <button @click="step = 0">버튼1</button>
    <button @click="step = 1">버튼2</button>
    <button @click="step = 2">버튼3</button>
    <div v-if="step == 0">내용1</div>
    <div v-if="step == 1">내용2</div>
    <div v-if="step == 2">내용3</div> 
    -->
  </div>
</template>

<script>
import Container from './components/Container.vue'
import postingData from './assets/PostingData'
import axios from 'axios';

export default {
  name: 'App',
  data(){
    return{
      posting : [...postingData],
      originposting : [...postingData],
      moreCnt : 0,
      step : 0,
    }
  },
  components : {
    Container,
  },
  methods : {
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.moreCnt}.json`)
      .then (res => {
        this.posting.push(res.data);
        console.log(this.posting);
        this.moreCnt++;
      })
      .catch(()=>{
        alert("불러올 게시물 없음")
      })
    }
  }
}
</script>

<style>
/* @import 'style.css'; */

body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
.morebtn{
  background-color : transparent;
  border : 2px solid skyblue;
  border-radius : 20px;
  padding : 5px 10px;
  width:50px;
  cursor : pointer;
  transition: background-color 0.3s ease; 
}

.morebtn:hover {
  background-color: skyblue;
  color: white;
}

#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
