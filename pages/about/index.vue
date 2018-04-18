<template>
  <section class="about-wrapper">
    <section class="hero-wrapper">
      <div class="hero-text">
        <div>
          <h1 class="title is-1">About Us</h1>
        </div>
      </div>
    </section>
    <Hours />
    <Gallery />

  </section>
</template>

<script>
import Hours from "~/components/UI/Hours";
import Gallery from '~/components/Gallery/Gallery';
export default {
  components: {
    Hours,
    Gallery
  }
};
</script>

<style scoped>
.hero-wrapper {
  height: 40vh;
  background-image: url("~/assets/images/kittens.jpg");
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

.about-clinic {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.clinic-left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 25px;
}

.left-title {
  font-size: 1.5rem;
}


</style>
