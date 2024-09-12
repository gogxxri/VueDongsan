<template>
    <div>
        <div v-if="step==0">
            <Post :posting="posting" v-for="(posting, i) in posting" :key="i" />
        </div>

        <!-- 필터선택페이지 -->
        <div v-if="step === 1">
            <div :class="selectedFilter" class="upload-image" :style="{ backgroundImage: `url(${uploadImg})` }"></div>
                <div class="filters">
                    <FilterBox
                        v-for="(filter, i) in filters"
                        :key="i"
                        :uploadImg="uploadImg"
                        :filter="filter"
                    > <span>{{filter}}</span>
                    </FilterBox>
            </div>
        </div>

        <!-- 글작성페이지 -->
        <div v-if="step==2">
            <div class="upload-image" :class="selectedFilter" :style="{backgroundImage:`url(${uploadImg})`}"></div>
            <div class="write">
                <textarea class="write-box" @input="$emit('write', $event.target.value)">write!</textarea>
            </div>
        </div>
    </div>
</template>

<script>
import FilterBox from './FilterBox.vue';
import Post from './Post';

export default {
    name : 'ContainerComponent',
    data(){
    return {
        filters : [ "aden", "_1977", "brannan", "brooklyn", "clarendon", "earlybird", "gingham", "hudson", 
                    "inkwell", "kelvin", "lark", "lofi", "maven", "mayfair", "moon", "nashville", "perpetua", 
                    "reyes", "rise", "slumber", "stinson", "toaster", "valencia", "walden", "willow", "xpro2"]
        }
    },
    props : {
        posting : Array,
        step : Number,
        uploadImg : String,
        selectedFilter : String,
    },
    components : {
        Post,
        FilterBox,
    },mounted(){
        console.log(this.selectedFilter)
    }

}

</script>

<style>
.upload-image{
width: 100%;
height: 450px;
background: cornflowerblue;
background-size : cover;
}
.filters{
overflow-x:scroll;
white-space: nowrap;
display: flex;
flex-direction: row;
}
.filter-1 {
width: 100px;
height: 100px;
background-color: cornflowerblue;
margin: 10px 10px 10px auto;
padding: 8px;
display: inline-block;
color : white;
background-size: cover;
}
.filters::-webkit-scrollbar {
height: 5px;
}
.filters::-webkit-scrollbar-track {
background: #f1f1f1; 
}
.filters::-webkit-scrollbar-thumb {
background: #888; 
border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
background: #555; 
}
.write-box {
border: none;
width: 90%;
height: 100px;
padding: 15px;
margin: auto;
display: block;
outline: none;
}
</style>