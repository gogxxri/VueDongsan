<template>
  <div>
    <div class="post"> 
        <div class="post-header">
        <div class="profile" :style="{ backgroundImage: `url(${posting.userImage})` }"></div>
        <span class="profile-name">{{posting.name}}</span>
        </div>
        <div class="post-body" :class="posting.filter" :style="{ backgroundImage: `url(${posting.postImage})` }"></div>
        <div class="post-content">
        <p>❤ {{posting.likes}}</p>
        <p><strong>{{posting.name}}</strong> {{posting.content}}</p>
        <p class="date">{{posting.date}}</p>
        </div>
    </div> 
  </div>
</template>

<script>
export default {
    name : 'postComponent',
    props : {
        posting : Array,
    },
}
</script>

<style>
.post {
  width: 100%;
}
.profile {
  background-image: url("https://picsum.photos/100?random=0");
  width: 30px;
  height: 30px;
  background-size: 100%;
  border-radius: 50%;
  float: left;
}
.profile-name {
  display: block;
  float: left;
  padding-left: 10px;
  padding-top: 7px;
  font-size: 14px;
}
.post-header {
  height: 30px;
  padding: 10px;
}
.post-body {
  background-image: url("https://picsum.photos/600?random=0");
  height: 450px;
  background-position: center;
  background-size: cover;
}
.post-content {
  padding-left: 15px;
  padding-right: 15px;
  font-size: 14px;
}
.date {
  font-size: 11px;
  color: grey;
  margin-top: -8px;
} 
</style>