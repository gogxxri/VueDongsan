<template>
  <div>
    <div class="menu">
      <a v-for="(nav, i) in menuItems" :key="i">{{ nav }}</a>
    </div>

    <DiscountBanner />

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
      selectedID: null,
      onerooms,
      menuItems: ['Home', 'Shop', 'About'],
      modalOpen: false,
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
  },
  components: {
    DetailModal,
    DiscountBanner,
    InfoCard
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
