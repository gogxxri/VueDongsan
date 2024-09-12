import { createStore } from 'vuex'

const store = createStore({
  state(){
    return {
      likes : 0,
      clickCnt : false,
    }
  },
  mutations : { // 데이터 수정 방법 정의
    toggleClick(state){
        if(state.clickCnt == false){
            state.likes +=1
            state.clickCnt=true;
        } else {
            state.likes -=1;
            state.clickCnt= false;
        }
    }
  }
})

export default store