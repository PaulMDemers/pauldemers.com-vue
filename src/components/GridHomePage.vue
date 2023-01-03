<template>
    <div>
        <div class="container-fluid">
        <div class="row">
            <div class="col-4 articlebox darkbox">
                <h3>About</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis augue diam. Duis et mollis sapien. Proin vitae aliquet dui. Morbi gravida varius viverra. In finibus blandit orci a ullamcorper. Proin at auctor sapien. Praesent accumsan metus molestie urna lacinia euismod. Integer semper ex a tellus efficitur, eget vehicula enim ultrices. Vestibulum feugiat mauris in mi auctor vehicula. Aenean eleifend aliquam mattis.</p>
            </div>

            <div class="col-4 articlebox lightbox">
                <h3>Resume</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis augue diam. Duis et mollis sapien. Proin vitae aliquet dui. Morbi gravida varius viverra. In finibus blandit orci a ullamcorper. Proin at auctor sapien. Praesent accumsan metus molestie urna lacinia euismod. Integer semper ex a tellus efficitur, eget vehicula enim ultrices. Vestibulum feugiat mauris in mi auctor vehicula. Aenean eleifend aliquam mattis.</p>
            </div>

            
            <div v-for="(post, index) in posts" :key="post.id" v-bind:class="{ 'col-4' : true, articlebox: true, lightbox: (index % 2), darkbox: !(index % 2) }">
                <h3>{{post.title}}</h3>
                <p>{{post.content.substring(0, 300)}}</p>
            </div>
        </div>
        </div>


    </div>
</template>
<script>
import { ajaxGet } from "../ajax.js";

export default {
  name: 'HomePage',
  data: function() {
      return {
          posts: []
      };
  },
  mounted: function() {
      this.updatePosts();
  },
  methods: {
      updatePosts : function() {
        let page = this;
        ajaxGet("http://localhost:3000/posts?Page=0", (data) => {
            page.posts = data.posts;
        }, () =>{});
      }
  }
}
</script>
<style>
.articlebox {
    height: 300px;
}

.darkbox {
    background-color: #212529;
    color: rgba(255,255,255,.55);
}

.lightbox {
    background-color: #ffffff;
    color: rgba(0,0,0,.75);
}
</style>