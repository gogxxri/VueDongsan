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

    <!-- <div @click="$store.commit('toggleClick')">❤ {{$store.state.likes}}</div> -->
    <!-- <p>{{$store.state.morePosting}}</p>
    <button @click="$store.dispatch('getData')">더보기 버튼</button> -->

    <!-- <p>{{now()}} {{counter}}</p> 버튼 누를때마다 재랜더링(methods)
    <p>{{now2}} {{counter}}</p> 처음 로드될 때 값 간직 (computed)
    <button @click="counter++">버튼</button>
    <p>{{likes}}</p>
    <p>{{clickCnt}}</p>
    <p>{{라이크}}</p>
    <p @click="toggleClick">❤ {{$store.state.likes}}</p> -->
   
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
import axios from 'axios'
import {mapState, mapMutations} from 'vuex'

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
      counter : 0
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
    now(){
      return new Date() // 사용할 때 마다 실행
    }
  },
  computed : { // 계산 결과 저장용 함수
    now2(){
      return new Date() // 필요할때만 실행, vue파일이 로드되었을때 실행하고 값을 간직함
    },
    likes(){
      return this.$store.state.likes
    },
    ...mapState(['likes', 'clickCnt']),
    ...mapState({라이크 : 'likes'}),
    ...mapMutations(['setMore', 'likes', 'toggleClick']),
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
