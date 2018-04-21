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
          'https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1524338327/laurelsprings/IMG_0533_iy1sy0.jpg',
          'https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1524338327/laurelsprings/IMG_0532_kugbr3.jpg',
          'https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1524338327/laurelsprings/IMG_0531_ehfjub.jpg',
          'https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1524338327/laurelsprings/IMG_0530_iok1gq.jpg',
          'https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1524338327/laurelsprings/IMG_0529_ot2xt6.jpg',
          'https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1524338327/laurelsprings/IMG_0528_n7mxjg.jpg',
          'https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1524338327/laurelsprings/IMG_0527_ncjxfe.jpg',
          'https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1524338326/laurelsprings/IMG_0526_znabch.jpg',
          'https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1524338326/laurelsprings/IMG_0522_mvbvmu.jpg',
          'https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1524338326/laurelsprings/IMG_0521_zz0fan.jpg',
          'https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1524338326/laurelsprings/IMG_0520_m50wsq.jpg',
          'https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1524338326/laurelsprings/IMG_0519-1_wf5ulz.jpg',
          'https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1524338326/laurelsprings/IMG_0518_cadnkn.jpg',
          'https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1524338326/laurelsprings/IMG_0517_u9pvt7.jpg',
          'https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1524338326/laurelsprings/IMG_0516_rxockt.jpg',
          'https://res.cloudinary.com/kaptivating-io/image/upload/f_auto/v1524338326/laurelsprings/IMG_0514_w0v0ky.jpg',
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
  transform: scale(1.03);
}


</style>

