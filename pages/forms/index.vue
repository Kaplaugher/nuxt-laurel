<template>
  <div>
    <section class="hero-wrapper">
      <div class="hero-text">
        <h1>Forms</h1>
      </div>
    </section>
    <Hours />
  </div>
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
  color: black;
}

h1 {
  color: white;
  font-size: 4rem;
}


</style>
