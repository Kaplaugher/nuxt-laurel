<template>
  <div class="home-wrapper">
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
        <h1 style="font-size: 1.5rem;">Welcome to Laurel Springs Animal Hospital</h1>
        <hr>
        <p style="padding-top: 15px;">We are a full service small animal practice offerseing a wide range of medical and surgical services for your pets. We believe in preventive care which means we want to keep your pet healthy so they can live a long and happy life. Our standards of care allow for us to identify and diagnose underlying conditions using comprehensive wellness exam and blood testing before they threaten the health of your pet.</p>
      </div>
      <div class="image-wrapper">
        <img id="front-img" src="~/assets/dogcatfield.jpg">
      </div>
    </section>
    <section class="reasons-wrapper">
      <h1 class="is-size-3 reason-title">Why Choose Us?</h1>
      <div class="reasons">
        <div class="column">
          <p>We offer superior care in a friendly and compassionate environment. At Laurel Springs Animal Hospital, we understand that your pet is a special part of your familly and we take the appropriate steps to...</p>
        </div>
        <div class="column">
          <ul>
            <li> - We care for your pet like you would</li>
            <li> - Dedicated, personalized service</li>
            <li> - Something</li>
          </ul>
        </div>
        <div class="column">
          <ul>
            <li> - Friendly and courteoous staff</li>
            <li> - State of the art facilities</li>
            <li> - Pet drop off (for those with scheduling difficulties)</li>
          </ul>
        </div>
      </div>
    </section>
    <Reviews />
    <EmergencyHours />

  </div>
</template>

<script>
import Hours from "~/components/UI/Hours";
import EmergencyHours from "~/components/UI/EmergencyHours";
import Reviews from '~/components/UI/Reviews';
export default {
  head() {
    return {
      title: "Home",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "Welcome to Laurel Springs Animal Hospital! We are a full service small animal practice offerseing a wide range of medical and surgical services for your pets. We are located at 3592 Old Atlanta Road Suite 103 Suwanee, GA, 30024. Come on by or give us a call at (770)888-9750 "
        }
      ]
    };
  },
  components: {
    Hours,
    EmergencyHours,
    Reviews
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

.center {
  margin: 0 auto;
  text-align: left;
}

.welcome-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: center;
  grid-gap: 15px;
  padding: 3rem;
  min-height: 50vh;
}

.reasons-wrapper {
  padding: 32px;
  background-color: hsl(171, 100%, 41%);
  color: white;
  font-weight: bold;
}

.reasons {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 32px;
}

.reason-title {
  padding-bottom: 15px;
}

@media (max-width: 700px) {
  .welcome-wrapper {
    grid-template-columns: 1fr;
  }

  .title {
    font-size: 2rem;
  }

  .reasons {
    grid-template-columns: 1fr;
  }
}

#front-img {
  max-height: 400px;
}
</style>
