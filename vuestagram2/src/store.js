import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
  state(){
    return {
        postingData : [],
        moreCnt : 0,
        filters: [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
                 "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
                "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2" ],
        uploadImage : [],
        selectedFilter : null,
    }
  },
    mutations : { // 데이터 수정 방법 정의
        setPostingData(state, data) {
            state.postingData = ([...data])
        },
        setMoreData(state, data){
            state.postingData.push(...data);
        },
        increaseMoreCnt(state){
            state.moreCnt += 1;
        },
        toggleLike(state, idx){
            const post = state.postingData[idx];
            post.liked=!post.liked;
            post.likes += post.liked ? 1 : -1;
        },
        addUploadImage(state, file){
            state.uploadImage = [file];
        },
        clearUploadImage(state){
            state.uploadImage = [];
        },
        clearSelectedFilter(state){
            state.selectedFilter = null;
        },
        setSelectedFilter(state, data){
            state.selectedFilter = data;
        },
        addNewPosting(state, data) {
            state.postingData = [data, ...state.postingData];
            console.log(this.postingData)
         }
        
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
                console.log("더이상 없음")
            })
        },
        toggleLike(context, idx){
            context.commit('toggleLike', idx)
        },
        uploadImage(context, file){
            context.commit('addUploadImage', file)
        },
        uploadPosting(context, data) {
            context.commit('addNewPosting', data);
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
        getSelectedFilter(state){
            return state.selectedFilter;
        },
    }
})

export default store