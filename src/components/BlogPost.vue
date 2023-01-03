<template>
    <div class="card">
        <div class="card-body">
            <router-link class="card-title" v-bind:to="{path: '/post/' + id}" ><h3>{{title}}</h3></router-link>
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <img v-if="featuredimg" v-bind:src="featuredimg" class="float-center"/>
                </div>
                <div class="col-12">
                    {{content}}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'BlogPost',
  props : [
      "id",
      "title",
      "featuredimg",
      "content",
      "tags",
      "postdate"
  ]
}
</script>
<style scoped>

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