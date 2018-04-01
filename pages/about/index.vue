<template>
  <section class="about-wrapper">
    <section class="hero-wrapper">
      <div class="hero-text">
        <div class="title">
          <h1 class="title is-1">About Us</h1>
        </div>
      </div>
    </section>
    <Hours />
    <section class="about-us">
      <div class="us">
        <h1>Us</h1>
      </div>
      <div class="services">
        <div class="title">
          <h1 style="color: black;">Services</h1>
        </div>
        <div>
          <ul class="list">
            <li>-Health exams</li>
            <li>-Health exams</li>
            <li>-Health exams</li>
            <li>-Health exams</li>
            <li>-Health exams</li>
            <li>-Health exams</li>
            <li>-Health exams</li>
            <li>-Health exams</li>
            <li>-Health exams</li>
            <li>-Health exams</li>
          </ul>
        </div>
      </div>
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
  height: 40vh;
  background-image: url("~/assets/images/kittens.jpg");
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

.about-us {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  grid-gap: 15px;
  padding: 25px;
}

.list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}

li {
  color: black;
  font-size: 1.2rem;
}
</style>
