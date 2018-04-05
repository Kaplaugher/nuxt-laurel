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
    <div class="about-clinic">
      <div class="clinic-left">
        <h1 class="left-title">Laurel Springs Animal Hospital</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Itaque esse nisi pariatur, cumque id veritatis nesciunt nostrum eveniet distinctio provident, accusantium, voluptates ut veniam consectetur laudantium et a molestias blanditiis!</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestiae, dolorum quaerat sapiente quos dicta porro asperiores consequuntur facere excepturi enim labore eveniet reiciendis, alias non sunt beatae molestias earum adipisci?</p>
      </div>
      <div class="clinic-right">

      </div>
    </div>
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
