import axios from 'axios';

const follower = {
  namespaced: true,
  state() {
    return {
      follower: [],
      followerOrigin: [], 
    };
  },
  mutations: {
    setFollower(state, data) {
      state.follower = data;
    },
    setFollowerOrigin(state, data) {
      state.followerOrigin = data;
    },
    searchFollower(state, query) {
        // 팔로우 ㅓ찾기
      const filtered = state.followerOrigin.filter(filterData => {
        return filterData.name.toLowerCase().includes(query.toLowerCase());
      });
      state.follower = filtered;
    }
  },
  actions: {
    async fetchFollowerData({ commit }) {
      try {
        const res = await axios.get('/follower.json');
        const data = res.data;

        commit('setFollower', data);
        commit('setFollowerOrigin', [...data]);
      } catch (error) {
        console.error('팔로워 데이터 가져오기 실패:', error);
      }
    },
    searchFollower({ commit }, query) {
      commit('searchFollower', query);
    }
  },
  getters: {
    getFollower(state) {
      return state.follower;
    },
    getFollowerOrigin(state) {
      return state.followerOrigin;
    },
  },
};

export default follower;
