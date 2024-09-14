<template>
  <main class="main">
      <div class="prev-next-wrap">
    <div>
      <button class="no-style-btn" @click="stepMinus">X</button>
    </div>
    <div v-if="postingStep < 2">
      <button class="no-style-btn" @click="stepPlus">next</button>
    </div>
    <div v-else-if="postingStep === 2">
      <button class="no-style-btn" @click="submitPosting">업로드</button>
    </div>
  </div>

    <!--사진 업로드-->
    <div v-if="postingStep == 0">
        <div class="posting-image">
            <img v-if="imageUrl" :src="imageUrl" alt="uploadImage"/>
        </div>
        <div class="upload-image-form"
            @drop="handleDrop"
            @dragover.prevent
            @dragenter.prevent
            >
            <!-- 파일 입력을 클릭할 수 있는 영역 -->
            <label for="upload-image" class="upload-image">
            <img src="@/assets/image-upload.png" alt="Upload Image" />
            </label>
        <div class="upload-info">사진을 여기에 끌어다 놓으세요.</div>
            <!-- 파일입력(display:none으로 숨김) -->
            <input id="upload-image" class="input-image" type="file" @change="fileUpload"/>
        </div>
    </div>

    <!--필터-->
    <div v-if="postingStep==1">
        <div :class= "selectedFilter" class="posting-image" >
            <img v-if="imageUrl" :src="imageUrl" alt="uploadImage"/>
        </div>
        <div class="filter-box">
            <div class="filter-wrapper">
                <div v-for="(filter, i) in filters" :key="i">
                    <div @click="selectFilter(filter)">
                        <img class="filtered-image" :src="imageUrl" alt="Filtered Image" :class="filter"/>
                    </div>
                    <div>
                        <div class="filter-name">{{filter}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!--글 작성-->
    <div  v-if="postingStep==2">
        <div :class= "selectedFilter" class="posting-image" >
            <img v-if="imageUrl" :src="imageUrl" alt="uploadImage"/>
        </div>
        <div class="input-box">
            <div class="input-content">
                <textarea v-model="postingContent" placeholder="글을 입력하세요."></textarea>
            </div>
        </div>
    </div>
  </main>
</template>

<script>

import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
    name : 'newPostingPage',
    data(){
        return{
            postingStep : 0,
            postingContent : '',
        }
    },
     methods: {
        ...mapActions(['uploadImage', 'uploadPosting']),
        ...mapMutations(['setSelectedFilter', 'clearSelectedFilter', 'clearUploadImage']),
        ...mapGetters(['getNewPosting']),
        fileUpload(e) {
            const file = e.target.files[0];
            if (file) {
                this.uploadImage(file);
            }
        },
        handleDrop(e) {
            e.preventDefault(); 
            const file = e.dataTransfer.files[0];
            if (file) {
                this.uploadImage(file);
            }
        },
        stepMinus(){
            if(this.postingStep == 2){
                this.postingStep--;
                this.postingContent = '';
                this.clearSelectedFilter();
            }
            else if(this.postingStep == 1){
                this.postingStep--;
                this.clearSelectedFilter();
            } else if(this.postingStep ==0){
                this.$router.go(-1);
                this.clearUploadImage();
            }
        },
        stepPlus(){
            if(this.imageUrl){
                this.postingStep++;
            }
            console.log(this.postingStep)
            console.log(this.filters)
        },
        selectFilter(filter){
            this.setSelectedFilter(filter);
            console.log(filter);
        },
        submitPosting(){
            if(this.postingContent !== ''){ 
                const newPosting = {
                    "name": "gyuri",
                    "userImage": "https://picsum.photos/100?random=1",
                    "postImage": this.imageUrl,
                    "likes": 0,
                    "date": "July 25",
                    "liked": false,
                    "content": this.postingContent,
                    "filter": this.selectedFilter,
                }

                this.uploadPosting(newPosting);
                this.$router.push('/');  

                this.clearUploadImage(); 
                this.clearSelectedFilter();  
                this.postingContent = '';  
            } else if (this.postingContent == ''){ 
                alert("내용을 작성하세요!")
            }
        }
    },
    computed: {
        ...mapGetters(['getUploadImage', 'getFilters', 'getSelectedFilter']),
        imageUrl() {
            return this.getUploadImage.length > 0 ? URL.createObjectURL(this.getUploadImage[0]) : null;
        },
        filters(){
            return this.getFilters;
        },
        selectedFilter(){
            return this.getSelectedFilter;
        }
    },
}
</script>

<style>
.main {
    display: flex;
    flex-direction: column;
}

.prev-next-wrap {
    display: flex;
    justify-content: space-between;
    padding: 0.5rem;
}

.no-style-btn {
    background-color: transparent;
    border: none;
    color: white;
    font-size: 1.2rem;
}

.posting-image {
    width: 100%;
    aspect-ratio: 1 / 1;
    background-color: rgb(126, 126, 126);
    display: flex; 
    justify-content: center; 
    align-items: center; 
    overflow: hidden;
}

.posting-image img{
  width: 100%;
  height: 100%; 
  object-fit: cover;
}


.upload-image-form {
    display: flex;
    flex-direction: column;
    justify-content: center; 
    align-items: center;  
    width: 100%;
    aspect-ratio: 1 / 1;
    flex:1;
}
.upload-image{
    display: flex;
    justify-content: center;
}
.upload-image img{
    width:10%;
    margin-bottom:1rem;
}
.upload-info{
    margin-bottom : 1rem;
}
.input-image {
  display: none;
}
.filter-box{
    padding : 1rem;
}

.filter-wrapper {
    display: flex;
    flex-direction: row;
    align-items: center;  
    width: 100%;
    aspect-ratio: 1 / 1;
    overflow-x: auto;
}

.filtered-image{
    width:8rem;
    aspect-ratio:1/1;
    object-fit:cover;
    padding : 0.2rem;
    border-radius:1rem;
}
.filter-image{
    width:100%;
    height:100%;
    object-fit: contain;
}
.filter-name{
    text-align: center;
}
.input-box{
    display: flex;
    flex-direction: row;
    width: 100%;
    aspect-ratio: 1 / 1;
}
.input-content{
    width: 100%;
    height:100%;
    padding:2rem;
}
textarea{
    width: calc(100% - 2rem) ;
    height:calc(100% - 2rem);
    overflow-y: auto; 
    resize: none;
    background-color: transparent;
    padding:1rem;
    border-radius: 1rem;
    color : white;
}
</style>