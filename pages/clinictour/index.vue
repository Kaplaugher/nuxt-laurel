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
  </section>
</template>

<script>
import Hours from "~/components/UI/Hours";
import Gallery from '~/components/Gallery/Gallery'
export default {
  components: {
    Hours,
    Gallery
  },

};
</script>

<style scoped>
.hero-wrapper {
  height: 30vh;
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
