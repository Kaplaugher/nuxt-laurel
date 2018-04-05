<template>
  <section class="home-wrapper">
    <section class="hero-wrapper">
      <div class="hero-text">
        <div class="title">
          <h1 class="title is-1">Laurel Springs Animal Hospital</h1>
        </div>
      </div>
    </section>
    <Hours />
    <section class="welcome-wrapper">
      <div class="welcome">
        <h1 style="font-size: 1.5rem;">Welcome to Laurel Springs Animal Hospital, seriving the Forsyth/Gwinett area.</h1>
        <p style="padding-top: 15px;">We are a full service small animal practice offerseing a wide range of medical and surgical services for your pets.</p>
      </div>
      <div class="image-wrapper">
        <img id="front-img" src="~/assets/images/dogcat.jpg">
      </div>
    </section>
    <section class="why-wrapper">
      <div class="why-title">
        <h1 style="color: black;" class="title is-1">Why Choose us?</h1>
      </div>
      <div class="reasons-wrapper">
        <div class="reason">
          <h1>Icon 1</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vitae necessitatibus totam eos, ab quos incidunt molestias cupiditate quas sequi perspiciatis provident delectus sed soluta et impedit ullam aspernatur libero!</p>
        </div>
        <div class="reason">
          <h1>Icone 2</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse repudiandae voluptates modi, rem placeat necessitatibus reprehenderit voluptatem qui pariatur aliquid culpa temporibus omnis accusamus mollitia? Labore quos amet iste.</p>
        </div>
        <div class="reason">
          <h1>icon 3</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam obcaecati laudantium voluptatibus facere fuga itaque vel atque unde, commodi, inventore, dolores ullam dolorem earum similique in cum quaerat ut. Facilis.</p>
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
  background-image: url("~/assets/images/dogstick.jpg");
  background-size: cover;
  background-position: center center;
  display: grid;
  align-items: center;
}

.hero-text {
  display: flex;
  flex-direction: column;

}

.title {
  color: white;
}

.subtitle {
  color: white;
}

.welcome-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-gap: 15px;
  padding: 3rem;
}

.why-title {
  text-align: center;
  padding: 3rem;
}

.reasons-wrapper {
  background: blueviolet;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  justify-items: center;
  color: white;
  grid-gap: 25px;
  justify-items: center;
  padding: 3rem;

}

#front-img {
  max-height: 400px;
}
</style>
