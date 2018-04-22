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
        <h2 class="is-size-4 left-title">Emergency/After Hours:</h2>
        <p>North Georgia Veterinary Specialists<br> 1328 Buford Hwy<br> Building 200 Buford, GA 30518<br> (678) 835-3300</p>
        <p>All Pets Emergency and Referral<br> 6460 Highway 9<br> Alpharetta, GA 30004<br> (678) 366-2125</p>
      </div>
      <div class="right">
        <Form />
      </div>
    </div>
    <div class="map-container">
      <GoogleMap />
    </div>
  </div>

</template>

<script>
import Hours from "~/components/UI/Hours";
import GoogleMap from "~/components/Map/GoogleMap";
import Form from "~/components/UI/Form";
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

.form-title {
  text-align: center;
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.form-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 32px;
}
</style>
