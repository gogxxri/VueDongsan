import { createStore } from 'vuex';
import posting from './store/postingStore';
import follower from './store/followerStore';

const store = createStore({
  modules: {
    posting,
    follower
  }
});

export default store;
 