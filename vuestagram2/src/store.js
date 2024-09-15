import { createStore } from 'vuex';
import axios from 'axios';

const store = createStore({
  state() {
    return {
      postingData: [],
      moreCnt: 0,
      filters: [
        "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson",
        "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua",
        "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"
      ],
      uploadImage: [],
      selectedFilter: null,
    };
  },
  mutations: {
    setPostingData(state, data) {
      state.postingData = data;
    },
    setMoreData(state, data) {
      if (Array.isArray(data)) {
        state.postingData = [...state.postingData, ...data];
      } else {
        state.postingData.push(data); 
      }
    },
    increaseMoreCnt(state) {
      state.moreCnt += 1;
    },
    resetMoreCnt(state) {
      state.moreCnt = 0;
    },
    toggleLike(state, idx) {
      const post = state.postingData[idx];
      if (post) {
        post.liked = !post.liked;
        post.likes += post.liked ? 1 : -1;
      }
    },
    addUploadImage(state, file) {
      state.uploadImage = [file];
    },
    clearUploadImage(state) {
      state.uploadImage = [];
    },
    clearSelectedFilter(state) {
      state.selectedFilter = null;
    },
    setSelectedFilter(state, data) {
      state.selectedFilter = data;
    },
    addNewPosting(state, data) {
      state.postingData.unshift(data);
    }
  },
  actions: {
    async getPostingData({ commit }) {
      try {
        const res = await axios.get("/posting.json");
        commit('setPostingData', res.data);
      } catch {
        alert("데이터 없음");
      }
    },
    async getMoreData({ commit, state }) {
      try {
        const res = await axios.get(`https://codingapple1.github.io/vue/more${state.moreCnt}.json`);
        commit('setMoreData', res.data);
        commit('increaseMoreCnt');
      } catch (error) {
        console.error("데이터 로딩 실패:", error);
      }
    },
    toggleLike({ commit }, idx) {
      commit('toggleLike', idx);
    },
    uploadImage({ commit }, file) {
      commit('addUploadImage', file);
    },
    uploadPosting({ commit }, data) {
      commit('addNewPosting', data);
      console.log('새 포스팅 추가:', data);
    }
  },
  getters: {
    getUploadImage(state) {
      return state.uploadImage;
    },
    getFilters(state) {
      return state.filters;
    },
    getSelectedFilter(state) {
      return state.selectedFilter;
    }
  }
});

export default store;
