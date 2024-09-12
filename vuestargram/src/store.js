import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state(){
    return {
      likes : 0,
      clickCnt : false,
      morePosting : [],
      moreCnt : 0,
    }
  },
    mutations : { // 데이터 수정 방법 정의
        setMore(state, payload){
            state.morePosting.push(payload)
            console.log(state.morePosting)
        },
        toggleClick(state){
            if(state.clickCnt == false){
                state.likes +=1
                state.clickCnt=true;
            } else {
                state.likes -=1;
                state.clickCnt= false;
            }
        },
        incrementMoreCnt(state) {
            state.moreCnt += 1;
        }
    },
    actions : { // ajax요청하거나 오래 걸리는 작업 하는 곳
        getData(context){
            axios.get(`https://codingapple1.github.io/vue/more${context.state.moreCnt}.json`)
            .then((res)=>{
                context.commit('setMore', res.data)
                context.commit('incrementMoreCnt');
            })
            .catch(()=>{
                context.commit('setMore', "더 이상 없음")
            })
        }
    }, 
})

export default store