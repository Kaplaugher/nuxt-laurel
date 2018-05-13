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
  </section>
</template>

<script>
import Hours from "~/components/UI/Hours";
import Gallery from '~/components/Gallery/Gallery';
export default {
  head () {
    return {
      title: 'About Us',
      meta: [
        { hid: 'description', name: 'description', content: 'At Laurel Springs Animal Hospital, we understand that your pet is a special part of your family and we will take the appropriate steps to understand both your needs. Our staff is committed to providing your pet with the finest care! We want your pet to be a happy and healthy member of the family. That’s why, we treat every pet as a member of our family.' }
      ]
    }
  },
  components: {
    Hours,
    Gallery
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
