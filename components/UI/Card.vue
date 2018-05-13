<template>
  <div class="card">
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{title}}</p>
        </div>
      </div>

      <div class="content">
      {{content}} <br><a>{{download}}</a>.
      </div>
    </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      download: ''
    }
  },
  props: {
    title: '',
    content: '',
    download: ''
  }


}
</script>

<style>

.card {
  max-width: 500px;
}

hr {
  margin: 10px;
}

</style>
