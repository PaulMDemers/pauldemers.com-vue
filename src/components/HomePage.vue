<template>
    <div>
        <div class="container">
            <div class="card mt-2">
                <div class="card-body">
                    <div class="card-title text-center"><h3>About</h3></div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin mattis augue diam. Duis et mollis sapien. Proin vitae aliquet dui. Morbi gravida varius viverra. In finibus blandit orci a ullamcorper. Proin at auctor sapien. Praesent accumsan metus molestie urna lacinia euismod. Integer semper ex a tellus efficitur, eget vehicula enim ultrices. Vestibulum feugiat mauris in mi auctor vehicula. Aenean eleifend aliquam mattis.</p>
                    <p>Nam accumsan dolor et aliquet molestie. Donec pulvinar, quam in iaculis posuere, erat velit hendrerit mi, in blandit ipsum odio ac ligula. Phasellus nunc ipsum, iaculis in ligula non, molestie facilisis metus. Cras in nulla ac nulla consequat dignissim. Nullam eget cursus tellus, id luctus lectus. Nam ac tortor turpis. Maecenas tristique dictum sem, nec consequat massa tempor vitae.</p>
                </div>
            </div>
        </div>
        <h3 class="text-center mt-2">Latest Posts</h3>
        <BlogPage />
    </div>
</template>
<script>
import BlogPage from './BlogPage.vue';

export default {
  name: 'HomePage',
  components : {
      BlogPage
  }
}
</script>
