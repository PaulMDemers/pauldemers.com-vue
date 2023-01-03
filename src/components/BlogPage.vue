<template>
    <div class="container">
        <BlogPost v-for="post in posts" :key="post.id" v-bind:title="post.title" v-bind:featuredimg="post.featuredimg" v-bind:content="post.content" v-bind:id="post.id" class="mt-2"/>

        <div class="card mt-2">
            <div class="card-body d-flex justify-content-center">
                <router-link v-bind:to="{path: (projectMode ? '/projects/' : '/blog/')}">&lt;&lt;</router-link>&nbsp;
                <router-link v-if="currentPage > 0" v-bind:to="{path: (projectMode ? '/projects/' : '/blog/') + (parseInt(currentPage)-1)}">&lt;</router-link>&nbsp;
                {{currentPage}}&nbsp;
                <router-link v-if="currentPage < maxPages" v-bind:to="{path: (projectMode ? '/projects/' : '/blog/') + (parseInt(currentPage)+1)}">&gt;</router-link>&nbsp;
                <router-link v-bind:to="{path: (projectMode ? '/projects/' : '/blog/') + maxPages}" >&gt;&gt;</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import BlogPost from './BlogPost';
import { ajaxGet } from "../ajax.js";

export default {
  name: 'BlogPage',
  components : {
      BlogPost
  },
  props: ["projectMode"],
  data : function() {
      return {
          posts : [],
          maxPages : 0,
          currentPage: 0
      }
  },
  mounted: function() {
      this.updatePosts();
  },
  watch: {
    $route() {
        this.updatePosts();
    }
  },
  methods: {
      updatePosts : function() {
        let page = this;
        ajaxGet("http://localhost:3000/posts?Page=" + (page.$route.params.page ? page.$route.params.page : 0) + (page.projectMode ? "&Tag=Project" : ""), (data) => {
            page.posts = data.posts;
            page.currentPage = page.$route.params.page ? page.$route.params.page : 0;
            page.maxPages = parseInt(data.numPosts / 10);
        }, () =>{});
      }
  }
}
</script>
<style>
/* unvisited link */
a:link {
  color: #212529;
  text-decoration: none;
}

/* visited link */
a:visited {
  color: #212529;
  text-decoration: none;
}

/* mouse over link */
a:hover {
  color: rgba(0,0,0,0.75);
  text-decoration: underline;
}

/* selected link */
a:active {
  color: #212529;
  text-decoration: underline;
}
</style>