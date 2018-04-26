<template>
  <section class="clinic-wrapper">
    <section class="hero-wrapper">
      <div class="hero-text">
        <div class="title">
          <h1 class="title is-1">Clinic Tour</h1>
        </div>
      </div>
    </section>
    <Hours />
    <VueGallery />
  </section>

</template>

<script>
import Hours from "~/components/UI/Hours";
import Gallery from '~/components/Gallery/Gallery'
import Modal from '~/components/Gallery/Modal'
import VueGallery from '~/components/Gallery/VueGallery'
export default {
  head () {
    return {
      title: 'Clinic Tour',
      meta: [
        { hid: 'description', name: 'description', content: 'We are proud of our state of the art facilities.  Please take a moment to take a quick tour.' }
      ]
    }
  },
  components: {
    Hours,
    Gallery,
    Modal,
    VueGallery
  },

};
</script>

<style scoped>
.hero-wrapper {
  height: 40vh;
  background-image: url("~/assets/guinnea.jpg");
  background-size: cover;
  background-position: center center;
  display: grid;
  align-items: center;
}

.hero-text {
  display: flex;
  flex-direction: column;
  padding: 40px;
}

.title {
  color: white;
}

.subtitle {
  color: white;
}

.image {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  background: brown;
}
</style>
