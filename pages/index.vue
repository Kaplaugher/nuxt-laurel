<template>
  <section class="home-wrapper">
    <section class="hero-wrapper">
      <div class="hero-text">
        <div class="title">
          <h1>Laurel Springs Animal Hospital</h1>
        </div>
        <div class="subtitle">
          <h2>Here is subtitle</h2>
        </div>
      </div>
    </section>
    <Hours />
    <section class="info-wrapper">
      <div class="why-wrapper">
        <h1>Why choose us?</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quam quasi ipsa suscipit saepe incidunt cum minima dicta placeat mollitia.</p>
      </div>
      <div class="why-wrapper">
        <h1>list</h1>
      </div>
      <div class="why-wrapper">
        <h1>list</h1>
      </div>
    </section>
  </section>
</template>

<script>
import Hours from "~/components/UI/Hours";
export default {
  components: {
    Hours
  }
};
</script>

<style scoped>
.hero-wrapper {
  height: 30vh;
  background-image: url("~/assets/images/dogstick.jpg");
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

.info-wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 0 32px;
  justify-items: center;
  align-items: center;
  height: 40vh;
}


</style>
