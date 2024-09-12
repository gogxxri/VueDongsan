<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li @click="step -= 1">Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="step!==2" @click="step += 1">Next</li>
        <li v-if="step==2" @click="publish">발행</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>
    <h4>안녕{{$store.state.name}}</h4>
    <button @click="$store.commit('nameChange')">박으로 변경</button>
    <h4>나이 {{$store.state.age}}</h4>
    <button @click="$store.commit('plus', 20)">나이 +</button>
    <Container :selectedFilter="selectedFilter" :posting="posting" :step="step" :uploadImg="uploadImg" @write="mycontent=$event"/>

    <div @click="more" class="morebtn" v-if="step==0">더보기</div>
    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="upload" accept="image/*" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>
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
      uploadImg : null,
      mycontent : null,
      selectedFilter : null,
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
    },
    upload(e){
      const file = e.target.files[0];
      this.uploadImg = URL.createObjectURL(file);
      console.log(this.uploadImg)
      this.step = 1;
    },
    publish(){
      let mypost = {      
        name: "gyuri",
        userImage: "https://picsum.photos/100?random=5",
        postImage: this.uploadImg,
        likes: 49,
        date: "Apr 4",
        liked: false,
        content: this.mycontent,
        filter: this.selectedFilter,
      };
      console.log(mypost)
      this.posting.unshift(mypost);
      this.step = 0;
    },
  },
  mounted() {
      this.emitter.on('sendFilter', (msg) => {
      this.selectedFilter = msg;
    });
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
