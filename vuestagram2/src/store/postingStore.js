import axios from 'axios';

const posting = {
namespaced: true,
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
      console.log(state.postingData)
    }
  },
  actions: {
    async getPostingData({ commit }) { // 임시로 로컬에 저장함!!
      // 로컬 데이터 가져옴
      const localData = JSON.parse(localStorage.getItem('postingData')) || [];

      try {
        // 2. 서버에서 데이터 가져옴
        const res = await axios.get("/posting.json");
        const serverData = res.data;

        // 3. 로컬 데이터와 서버 데이터 합침
        const combinedData = [...localData, ...serverData];

        // 4. 포스팅 데이터 업뎃
        commit('setPostingData', combinedData);

      } catch (error) {
        console.error("데이터를 가져오기 에러:", error);

        commit('setPostingData', localData);
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
        // 로컬 스토리지저장 (서버 대신)
        let postings = JSON.parse(localStorage.getItem('postingData')) || [];
        postings.unshift(data);
        localStorage.setItem('postingData', JSON.stringify(postings));
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
    },

  }
};

export default posting;
