<template>
    <div class="container">
        <BlogPost v-if="post" v-bind:title="post.title" v-bind:featuredimg="post.featuredimg" v-bind:content="post.content" v-bind:id="post.id" class="mt-2"/>
    </div>
</template>
<script>
import BlogPost from './BlogPost';
import { ajaxGet } from "../ajax.js";

export default {
    name: "BlogPostPage",
    components: {
        BlogPost
    },
    data: function() {
        return {
            post: null
        }
    },
    mounted: function() {
        let page = this;
        ajaxGet("http://localhost:3000/posts/" + page.$route.params.postId, (data) => {
            page.post = data;
        }, () =>{});
    }
}
</script>