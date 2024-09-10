<template>
  <div>
    <div class="menu">
      <a v-for="(nav, i) in menuItems" :key="i">{{ nav }}</a>
    </div>

    <DiscountBanner v-if="showDiscount == true"/>
    <button @click="priceSort()">가격 낮은 순</button>
    <button @click="priceHighSort()">가격 높은 순</button>
    <button @click="nameSort()">가나다 순</button>
    <button @click="sortBack()">기본 순</button>

    <InfoCard v-for="(room) in onerooms" :key="room.id" @openModal="modalOpen=true; selectedID=$event" :room="room" @increase="increase"/>
    <Transition name="fade">
      <DetailModal
        :onerooms="onerooms" :selectedID="selectedID" :modalOpen="modalOpen" @closeModal="closeModal"
      />
    </Transition>
  </div>
</template>

<script>
import onerooms from './assets/oneroom.js';
import DetailModal from './components/DetailModal.vue';
import DiscountBanner from './components/Discount.vue';
import InfoCard from './components/InfoCard';

export default {
  name: 'App',
  data() {
    return {
      originOnerooms : [...onerooms], // 원본 데이터 유지
      selectedID: null,
      onerooms: [...onerooms],
      menuItems: ['Home', 'Shop', 'About'],
      modalOpen: false,
      showDiscount : true,
    };
  },
  methods: {
    increase(id) {
      const room = this.onerooms.find(r => r.id === id);
      if (room) {
        room.reportCnt++;
      }
    },
    openModal(id) {
      this.selectedID = id;
      this.modalOpen = true;
    },
    closeModal() {
      this.modalOpen = false;
    },
    priceSort() {
      this.onerooms.sort(function(a, b){
        return a.price-b.price;
      });
    },
    priceHighSort(){
      this.onerooms.sort(function(a,b){
        return b.price-a.price;
      })
    },
    nameSort(){
      this.onerooms.sort(function(a,b){
        if(a.title < b.title)
        return -1;
      })
    },
    sortBack() {
      // this.onerooms = this.originOnerooms; // array를 등호로 넣으면 왼쪽 오른쪽 값을 공유하게 됨
      this.onerooms = [...this.originOnerooms] // 그래서 카피본을 만들어 넣어야함
    }

  },
  components: {
    DetailModal,
    DiscountBanner,
    InfoCard
  },
  created(){ // 라이프 사이클 훅 (ajax 요청 시 데이터 요청) (mounted에서도 ajax 데이터 요청)
              //html 생성 전 데이터만 존재할 때
  },
  beforeMounted(){ // 라이프 사이클 훅 (마운트 되기 전 실행할 것)

  },
  mounted(){ // 라이프 사이클 훅 (마운트 된 후)
    setTimeout(()=>{ // this를 사용할 때 arrow function 사용해야함
      this.showDiscount = false;
    }, 20000)
  },
};
</script>

<style>
/* <Transition>을 사용할 때 다음 3개 만들어서 사용*/
.fade-enter-from{    /*시작*/
  opacity : 0;
  transform : translateY(-1000px);
} 
.fade-enter-active{
  transition : all 1s;  /*애니메이션 */
}
.fade-enter-to{
  opacity : 1;      /*끝*/
}

/* <Transition>을 퇴장 애니메이션*/
.fade-leave-from{    /*시작*/
  opacity : 1;
} 
.fade-leave-active{
  transition : all 1s;  /*애니메이션 */
}
.fade-leave-to{
  opacity : 0;      /*끝*/
  transform : translateY(-1000px);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin: 0;
}

.menu {
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}

.menu a {
  color: white;
  padding: 10px;
}

.room-img {
  width: 30%;
  margin-top: 40px;
}

.black-bg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  left: 0;
  padding: 20px;
  box-sizing: border-box;
}

.white-bg {
  width: 100%;
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-sizing: border-box;
}

.white-bg img {
  width: 80%;
}

.start{
  opacity : 0;
  transition : all 1s;
}
.end {
  opacity : 1;
}
</style>
