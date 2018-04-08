<template>
  <div>
    <section class="hero-wrapper">
      <div class="hero-text">
        <h1>Contact Us</h1>
      </div>
    </section>
    <Hours />
    <div class="form-container">
      <div class="left">
        <Form />
      </div>
      <div class="right">
        <p>right side</p>
      </div>
    </div>
    <div class="map-container">
      <GoogleMap />
    </div>
  </div>

</template>

<script>
import Hours from "~/components/UI/Hours";
import GoogleMap from '~/components/Map/GoogleMap'
import Form from '~/components/UI/Form'
export default {
  components: {
    Hours,
    GoogleMap,
    Form
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

h1 {
  color: white;
  font-size: 4rem;
}

.form-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 32px;
}

</style>
