<template>
  <section class="clinic-wrapper">
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            Clinic Tour
          </h1>
        </div>
      </div>
    </section>
    <Hours />
    <h1 class="is-size-2 has-text-centered virtual-tour">Virtual Tour</h1>
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
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('~assets/kitten.jpg');
  background-size: cover;
  background-position: center center;
}

.hero-text {
  display: flex;
  flex-direction: column;
  padding: 40px;
}

.title {
  color: white;
}

.virtual-tour {
  padding: 25px;
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

@media (max-width: 700px) {
  .hero {
    height: 30vh;
  }
}
</style>
