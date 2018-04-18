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
  display: flex;
  padding: .5vw;
  flex-flow: row wrap;
}

.image {
  background-size: cover;
  flex: auto;
  width: 200px;
  margin: .5vw;
  height: auto;
  transition: .3s ease-in-out;
}

.image:hover {
  cursor: pointer;
  transform: scale(1.05);
}


</style>

