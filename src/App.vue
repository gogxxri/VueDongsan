<template>

  <div>
    <div class="black-bg" v-if="modalOpen == true">
      <div class="white-bg">
        <h4>상세페이지</h4>
        <p>상세페이지임</p>
        <button @click="closeModal">닫기</button>
      </div>  
    </div>

    <div class="menu">
      <a v-for="(nav,i) in menuItems" :key="i">{{nav}}</a>
    </div>

    <div class="list" v-for="(list, i) in products" :key="i">
        <img :src="roomPic[i]" class="room-img" />
      <h4 @click="openModal">{{list}}</h4>
      <p>60 만원</p>
      <button @click="increase(i)">허위매물 신고</button> <span>신고 수 : {{reportCnt[i]}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return{
        menuItems : ['Home', 'Shop', 'About'],
        products : ['역삼동 원룸', '천호동 원룸', '마포구 원룸'],
        roomPic: [require('@/assets/room0.jpg'), require('@/assets/room1.jpg'), require('@/assets/room2.jpg')], // src에 대해 상대 경로로 설정해야 함, 빌드 시 require 또는 import를 통해 가져옴
        reportCnt : [0, 0, 0],
        modalOpen : false,
      }

    }, methods : {
      increase(idx){
        this.reportCnt[idx]++;
      }, openModal(){
         this.modalOpen = true; 
      }, closeModal(){
         this.modalOpen = false;
      }

    }, components:{

    },
  }
  </script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body {
  margin : 0;
}

.menu{
  background : darkslateblue;
  padding : 15px;
  border-radius: 5px;
}
.menu a {
  color : white;
  padding : 10px;
}
.room-img{
  width  : 30%;
  margin-top : 40px;
}
div {
  box-sizing : border-box;
}
.black-bg{
  width : 100%; height: 100%;
  background : rgba(0, 0, 0, 0.5);
  position : fixed; padding :20px;
}
.white-bg{
  width : 100%;
  background :white;
  border-radius : 8px;
  padding :20px;
}
</style>
