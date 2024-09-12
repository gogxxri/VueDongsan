<template>
    <div>
        <div :class="'filter-item ' + filter" @click="fire" :style="{ backgroundImage: `url(${uploadImg})` } ">
            <div class="overlay">
                <slot></slot> <!--html 내용물을 데이터 바인딩 하고싶을 때만 사용가능-->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : "filterBoxComponent",
    data(){
        return{

        }
    },
    methods: {
        fire() {
            this.emitter.emit('sendFilter', this.filter);
        }
    },
    props : {
        uploadImg : String,
        filter : String,
    }
}
</script>

<style>
.filter-item {
  width: 100px;
  height: 100px;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color : white;
  background-size: cover;
  background-position : center;
  position: relative;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center; 
  justify-content: center;
  color: white;
}
</style>