import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      name:'kim',
      age : 20,
    }
  },
  mutations : { // 데이터 수정 방법 정의
    nameChange(state){
        state.name = 'park'
    },
    plus(state, payload){
        state.age += payload
    }
  }
})

export default store