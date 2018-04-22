<template>
  <div>
    <section class="hero-wrapper">
      <div class="hero-text">
        <h1>Forms</h1>
      </div>
    </section>
    <Hours />
    <section class="form-cards">
      <Card />
      <Card />
      <Card />
    </section>
  </div>
</template>

<script>
import Hours from "~/components/UI/Hours";
import Card from '~/components/UI/Card';
export default {
  components: {
    Hours,
    Card
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
}

.title {
  color: black;
}

h1 {
  color: white;
  font-size: 4rem;
}

.form-cards {
  display: grid;
  padding: 10%;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 25px;
}

@media(max-width: 700px) {
  .form-cards {
    grid-template-columns: 1fr;
  }
}


</style>
