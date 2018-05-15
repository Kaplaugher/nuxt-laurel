<template>
  <div>
    <section class="hero-wrapper">
      <div class="hero-text">
        <h1>Forms</h1>
      </div>
    </section>
    <Hours />
    <div class="content-wrapper">
      <div class="form-info">
        <h2 class="is-size-2">Forms</h2>
        <p>We try to save you as much time as possible while taking care of your pet.  The following forms are intended for you to download and fill out before you come in.  This should save you some time so your wait at our clinic is minimal.  In order to read and print these forms you will need Adobe Acrobat Reader installed on your computer.</p>
        <nuxt-link to='/contact' class="button is-primary contact-button">Contact Us</nuxt-link>
      </div>
      <div class="form-cards">
        <Card
          title="New Patient?"
          content='Make your first visit a breeze by completing this form.'
          download='Download'/>
        <Card
          title="Thinking about surgery?"
          content='Get ahead of the game fill it out before your visit!'
          download='Download'/>
      </div>

    </div>
  </div>
</template>

<script>
import Hours from "~/components/UI/Hours";
import Card from '~/components/UI/Card';
export default {
  head () {
    return {
      title: 'Forms',
      meta: [
        { hid: 'description', name: 'description', content: 'We try to save you as much time as possible while taking care of your pet.  The following forms are intended for you to download and fill out before you come in.  This should save you some time so your wait at our clinic is minimal.  In order to read and print these forms you will need Adobe Acrobat Reader installed on your computer.' }
      ]
    }
  },
  components: {
    Hours,
    Card
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
  color: black;
}

h1 {
  color: white;
  font-size: 4rem;
}

.content-wrapper {
  grid-template-columns: 1fr 1fr;
  display: grid;
  grid-gap: 25px;
  padding: 32px;
  min-height: 50vh;
}

.form-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.form-cards {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.contact-button {
  max-width: 50%;
}



@media(max-width: 700px) {
  .content-wrapper {
    grid-template-columns: 1fr;
  }
}


</style>
