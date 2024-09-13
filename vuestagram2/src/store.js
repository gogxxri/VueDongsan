import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state(){
    return {
        postingData : [],
        moreCnt : 0,
        filters: [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
                 "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
                "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2" ]
    }
  },
    mutations : { // 데이터 수정 방법 정의
        setPostingData(state, data) {
            state.postingData = data
        },
        setMoreData(state, data){
            state.postingData.push(data)
        },
        increaseMoreCnt(state){
            state.moreCnt += 1;
        },
        
    },
    actions : { // ajax요청하거나 오래 걸리는 작업 하는 곳
        getPostingData(context){
            axios.get("/posting.json")
            .then((res)=>{
               context.commit('setPostingData', res.data)// mutation 호출
            }).catch(()=>{
                alert("데이터 없음")
            })
        },
        getMoreData(context){
            axios.get(`https://codingapple1.github.io/vue/more${context.state.moreCnt}.json`)
            .then((res)=>{
                console.log(res.data)
                context.commit('setMoreData', res.data)
                context.commit('increaseMoreCnt');
            })
            .catch((error)=>{
                console.error("데이터 로딩 실패:", error);
                alert("더이상 없음")
            })
        }
    }, 
})

export default store