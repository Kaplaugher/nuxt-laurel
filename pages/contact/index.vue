<template>
  <div>
    <section class="hero-wrapper">
      <div class="hero-text">
        <h1>Contact Us</h1>
      </div>
    </section>
    <Hours />
    <div class="contact-wrapper">
      <div class="form-wrapper">
        <h2 class="is-size-2">Have a question?</h2>
        <p>Or need additional information? Please feel free to contact us.</p>
        <Form />
      </div>
      <div class="map-wrapper">
        <GoogleMap />
      </div>

    </div>
  </div>

</template>

<script>
import Hours from "~/components/UI/Hours";
import GoogleMap from "~/components/Map/GoogleMap";
import Form from "~/components/UI/Form";
export default {
  head () {
    return {
      title: 'Contact Us',
      meta: [
        { hid: 'description', name: 'description', content: 'Have a question? Need additional information? Please feel free to contact us.' }
      ]
    }
  },
  components: {
    Hours,
    GoogleMap,
    Form
  }
};
</script>

<style scoped>
.hero-wrapper {
  height: 50vh;
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
  color: white;
}

h1 {
  font-size: 4rem;
}

p {
  padding: 10px 0;
}

.form-title {
  text-align: center;
}

.form-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.map-wrapper {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.contact-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 25px;
  padding: 32px;
}

@media (max-width: 700px) {
  .contact-wrapper {
    grid-template-columns: 1fr;
  }

  .left {
    grid-template-columns: 1fr;
  }
}
</style>
