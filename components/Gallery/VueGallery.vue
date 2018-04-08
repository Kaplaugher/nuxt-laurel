<template>
  <div class="gallery-wrapper">
    <gallery :images="images" :index="index" @close="index = null"></gallery>
    <div
      class="image"
      v-for="(image, imageIndex) in images"
      :key="imageIndex"
      @click="index = imageIndex"
      :style="{ backgroundImage: 'url(' + image + ')', width: '300px', height: '200px' }"
    ></div>
  </div>
</template>

<script>
  import VueGallery from 'vue-gallery';

  export default {
    data: function () {
      return {
        images: [
          'https://source.unsplash.com/random',
          'https://source.unsplash.com/random',
          'https://source.unsplash.com/random',
          'https://source.unsplash.com/random',
          'https://source.unsplash.com/random',
          'https://source.unsplash.com/random',
          'https://source.unsplash.com/random',
          'https://source.unsplash.com/random',
          'https://source.unsplash.com/random',
          'https://source.unsplash.com/random',
          'https://source.unsplash.com/random',
        ],
        index: null
      };
    },

    components: {
      VueGallery
    },
  }
</script>
<style scoped>
.gallery-wrapper {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-template-rows: auto;
  justify-items: center;
  padding: 32px;
}

.image {
  background-size: cover;
}

</style>

