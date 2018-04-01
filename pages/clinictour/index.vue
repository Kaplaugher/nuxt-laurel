<template>
  <section class="clinic-wrapper">
    <section class="hero-wrapper">
      <div class="hero-text">
        <div class="title">
          <h1 class="title is-1">Laurel Springs Animal Hospital</h1>
        </div>
      </div>
    </section>
    <Hours />
    <Gallery />
    <Modal>
      <img src="https://bulma.io/images/placeholders/1280x960.png" alt="">
    </Modal>
  </section>
</template>

<script>
import Hours from "~/components/UI/Hours";
import Gallery from '~/components/Gallery/Gallery'
import Modal from '~/components/Gallery/Modal'
export default {
  components: {
    Hours,
    Gallery,
    Modal
  },

};
</script>

<style scoped>
.hero-wrapper {
  height: 40vh;
  background-image: url("~/assets/images/dogs.jpg");
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
