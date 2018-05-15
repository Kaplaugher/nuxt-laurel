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
        <h1 style="font-size: 1.5rem;">Welcome to Laurel Springs Animal Hospital, serving the Forsyth/Gwinett area.</h1>
        <p style="padding-top: 15px;">We are a full service small animal practice offerseing a wide range of medical and surgical services for your pets.</p>
      </div>
      <div class="image-wrapper">
        <img id="front-img" src="~/assets/dogcatfield.jpg">
      </div>
    </section>
    <section class="why-wrapper">
      <div class="why-title">
        <h1 style="color: black;" class="title is-1">Why Choose us?</h1>
      </div>
      <div class="reasons-wrapper">
        <div class="reason">
          <h1 class="is-size-4 reason-title">Friendly/Courteous Staff</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur vitae necessitatibus totam eos, ab quos incidunt molestias cupiditate quas sequi perspiciatis provident delectus sed soluta et impedit ullam aspernatur libero!</p>
        </div>
        <div class="reason">
          <h1 class="is-size-4 reason-title">Personalized Service</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum esse repudiandae voluptates modi, rem placeat necessitatibus reprehenderit voluptatem qui pariatur aliquid culpa temporibus omnis accusamus mollitia? Labore quos amet iste.</p>
        </div>
        <div class="reason">
          <h1 class="is-size-4 reason-title">State of the Art Facilities</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam obcaecati laudantium voluptatibus facere fuga itaque vel atque unde, commodi, inventore, dolores ullam dolorem earum similique in cum quaerat ut. Facilis.</p>
        </div>
      </div>
    </section>
  </section>
</template>

<script>
import Hours from "~/components/UI/Hours";
export default {
  head () {
    return {
      title: 'Home',
      meta: [
        { hid: 'description', name: 'description', content: 'Welcome to Laurel Springs Animal Hospital! We are a full service small animal practice offerseing a wide range of medical and surgical services for your pets. We are located at 3592 Old Atlanta Road Suite 103 Suwanee, GA, 30024. Come on by or give us a call at (770)888-9750 ' }
      ]
    }
  },
  components: {
    Hours
  }
};
</script>

<style scoped>
.hero-wrapper {
  height: 50vh;
  background-image: url("~/assets/linedup.jpg");
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
  background: #4f9bdb;
  color: white;
  min-height: 50vh;
}

.why-title {
  text-align: center;
  padding: 3rem;
}

.reasons-wrapper {
  display: grid;
  grid-template-columns: repeat(3,1fr);
  justify-items: center;
  grid-gap: 30px;
  justify-items: center;
  padding: 0 3rem;
  padding-bottom: 3rem;
}

.why-wrapper {
 min-height: 50vh;
}

@media (max-width: 700px) {
  .welcome-wrapper {
    grid-template-columns: 1fr;
  }

  .reasons-wrapper {
    grid-template-columns: 1fr;
  }

  .title {
    font-size: 2rem;
  }
}



.reason-title {
  text-align: center;
  padding-bottom: 15px;
}

#front-img {
  max-height: 400px;
}
</style>
