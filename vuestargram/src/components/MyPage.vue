<template>
    <div>
        <div  style="padding : 10px">
            <h4>팔로워 {{followerCount}}명</h4>
            <input @input="search($event.target.value)" placeholder="🔍" />
            <div class="post-header" v-for="(follower) in follower" :key="follower.id">
                <div class="profile" :style="{backgroundImage : `url(${follower.image})`}"></div>
                <span class="profile-name">{{follower.name}}</span>
            </div>
        </div>
    </div>
</template>0

<script>
import {ref, onMounted, toRefs,/*reactive*/ watch, computed} from 'vue'
import axios from 'axios';
import {useStore} from 'vuex'
export default {
    name : "myPage",
    props : {
        one : Number,
        two : Number,
    },
    setup(props){ // created LifeCycle과 비슷함, 데이터 생성-조작-hook-methods 등 모든 기능개발을 setup에서 사용가능함
        const follower = ref([]); //ref로 감싸야 실시간 반영 가능
        const followerOrigin = ref([]);
        //const test = reactive({name : 'kim'}) // ref와 비슷한 역할을 하는데 arr, obj를 넣음 (ref는 나머지 자료형 가능)

        let {one, two} = toRefs(props);
        console.log(one.value)
        console.log(two.value)

        let store = useStore();
        console.log(store.state.clickCnt)
        // console.log(store.commit())
        // compositionApi에서 mapState 못씀

        // function search(inputValue){
        //     let filterFollower = followerOrigin.value.filter((searchName) => {
        //         return searchName.name.indexOf(inputValue) != -1
        //     });
        //     follower.value = [...filterFollower]
        // }

        function search(inputValue){
            let filterFollower = followerOrigin.value.filter(follower =>{
                return follower.name.toLowerCase().includes(inputValue.toLowerCase())
            })
            follower.value = filterFollower
        }

        watch(one, (newValue)=>{
            // one이라는 props가 변경될때마다 실행할 코드
            console.log('one이 바뀜:', newValue);
        })

        onMounted(()=>{ //Composition API에서 라이프 사이클 사용할때는 on 붙여야함
             axios.get('/follower.json')
            .then((res)=>{
                follower.value = res.data
                followerOrigin.value = [...res.data];
            })
        })
        console.log({follower})

        const followerCount = computed(() => {
            // const count = follower.value.length
            // console.log(count)
            return follower.value.length;
        });
        
        return {follower, followerCount, search} // return 해야 위에서 사용 가능

        
    },
    data(){
        return{

        }
    },
}
</script>

<style scoped> /*scoped 하면 여기에 적용한 css가 다른 곳에 전염되지 않음*/

</style>