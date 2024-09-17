<template>
  <main class="scroll-container">
    <div class="scroll-content" @scroll="handleScroll">
      <div class="main-section" v-for="(posting, i) in postingData" :key="i">
        <div class="main-userInfo">
          <div class="user-image" :style="{ backgroundImage: `url(${posting.userImage})` }"></div>
          <div class="user-name">{{ posting.name }}</div>
        </div>
        <div class="posting-image" :class="posting.filter">
          <img :src="posting.postImage" />
        </div>
        <div class="likes-date">
          <div @click="toggleLike(i)" :class="{'liked': posting.liked, 'not-liked': !posting.liked}">
            <span>❤</span> {{ posting.likes }}
          </div>
          <div>{{ posting.date }}</div>
        </div>
        <div class="posting-content">
          <div>{{ posting.content }}</div>
        </div>
      </div>
      <div v-if="isLoading" class="loading">Loading...</div>
    </div>
  </main>
</template>

<script>
export default {
  name: 'ContainerComponent',
  data() {
    return {
      isLoading: false,
    };
  },
  methods: {
    async loadMore() {
      if (this.isLoading) return;
      this.isLoading = true;
      await this.$store.dispatch('posting/getMoreData'); 
      this.isLoading = false;
    },
    handleScroll(event) {
      const container = event.target;
      const bottom = container.scrollHeight - container.scrollTop - container.clientHeight <= 10;
      if (bottom && !this.isLoading) {
        this.loadMore();
      }
    },
    toggleLike(idx) {
      this.$store.dispatch('posting/toggleLike', idx); 
    },
    async getPostingData() {
      await this.$store.dispatch('posting/getPostingData'); 
    }
  },
  computed: {
    postingData() {
      return this.$store.state.posting.postingData; 
    }
  },
  mounted() {
    this.getPostingData();
    this.$store.commit('posting/resetMoreCnt');
  }
}

</script>

<style>
.scroll-container {
  height: 100vh;
  overflow: hidden;
  background-color: black;
  color: white;
}

.scroll-content {
  height: 100%;
  overflow-y: scroll;
}

.scroll-content::-webkit-scrollbar {
  display: none;
}

.main-section {
  margin-bottom: 1rem; 
}

.main-userInfo {
  display: flex;
  flex-direction: row;
  padding: 1rem 0.5rem;
}

.user-image {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  margin-right: 1rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.user-name {
  text-align: center;
  align-content: center;
}

.posting-image img {
  width: 100%;
}

.posting-content {
  padding: 1rem 0.5rem;
}

.likes-date {
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
}

.loading {
  text-align: center;
  padding: 1rem;
}

.liked span {
  color: red;
  cursor: pointer;
}

.not-liked span {
  color: white;
  cursor: pointer;
}
</style>
