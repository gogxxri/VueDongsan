<template>
<div>

  <div :class="'filter-item ' + filter" :style="{ backgroundImage: `url(${uploadImg})` }"></div>
  <div>{{filter}}</div>
</div>
</template>

<script>
export default {
    name : "filterBoxComponent",
    data(){
        return{
            filterName : null,
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
}
</style>