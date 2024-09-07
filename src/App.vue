<template>
  <div>
    <div class="menu">
      <a v-for="(nav, i) in menuItems" :key="i">{{ nav }}</a>
    </div>

    <DiscountBanner />

    <div class="list" v-for="(room) in onerooms" :key="room.id" @click="openModal(room.id)">
      <img :src="room.image" class="room-img" />
      <h4>{{ room.title }}</h4>
      <p>{{ room.price }} 원</p>
      <button @click.stop="increase(room.id)">허위매물 신고</button> 
      <span>신고 수: {{ room.reportCnt }}</span> 
    </div>

    <DetailModal
      :onerooms="onerooms" :selectedID="selectedID" :modalOpen="modalOpen"
    />
  </div>
</template>

<script>
import onerooms from './assets/oneroom.js';
import DetailModal from './components/DetailModal.vue';
import DiscountBanner from './components/Discount.vue';

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
  },
};
</script>

<style>
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
</style>
