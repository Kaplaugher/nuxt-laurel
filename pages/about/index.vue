<template>
  <section class="about-wrapper">
    <section class="hero-wrapper">
      <div class="hero-text">
        <div>
          <h1 class="title is-1 ">About Us</h1>
        </div>
      </div>
    </section>
    <Hours />
    <div class="column-wrapper">
      <div class="info">
        <h2 class="is-size-3 has-text-centered has-text-primary has-text-weight-bold	">About Us</h2>
        <p>At Laurel Springs Animal Hospital, we understand that your pet is a special part of your family and we will take the appropriate steps to understand both your needs. Our staff is committed to providing your pet with the finest care! We want your pet to be a happy and healthy member of the family. That’s why, we treat every pet as a member of our family.</p>
      </div>
      <div class="pic-wrapper">
        <div class="pic">
          <img src="~/assets/drt.jpg" alt="Dr.Tierney" class="responsive">
        </div>
      </div>
    </div>
    <div class="services-wrapper">
      <h2 class="is-size-3 has-text-centered has-text-primary has-text-weight-bold">Our Services</h2>
      <div class="columns">
        <div class="column">
          <ul>
            <li>Health Exams</li>
            <li>Digital Radiology</li>
            <li>Dentistry</li>
            <li>Vaccinations</li>
            <li>In-house diagnostic testing</li>
            <li>Dermatology</li>
            <li>Neurology</li>
          </ul>
        </div>
        <div class="column">
          <ul>
            <li>K Laser</li>
            <li>Ultrasound</li>
            <li>Full Service Pharmacy</li>
            <li>Microchipping</li>
            <li>Special Dieting Programs</li>
            <li>Geriatric Care</li>
            <li>Surgery</li>
          </ul>
        </div>
        <div class="column">
          <ul>
            <li>Pocket Pet Care</li>
            <li>Anesthesia</li>
            <li>Flea Control</li>
            <li>Health Certificates</li>
            <li>Declawing</li>
            <li>In-house Bloodwork</li>
            <li>Outpatient Care</li>
          </ul>
        </div>
        <div class="column">
          <ul>
            <li>Pain Management</li>
            <li>Parasite Control</li>
            <li>Prescriptions</li>
            <li>Endoscopy</li>
            <li>Cystoscope Laparoscopic Biopsies</li>
          </ul>
        </div>
      </div>

    </div>
  </section>
</template>

<script>
import Hours from "~/components/UI/Hours";
import Gallery from "~/components/Gallery/Gallery";
export default {
  head() {
    return {
      title: "About Us",
      meta: [
        {
          hid: "description",
          name: "description",
          content:
            "At Laurel Springs Animal Hospital, we understand that your pet is a special part of your family and we will take the appropriate steps to understand both your needs. Our staff is committed to providing your pet with the finest care! We want your pet to be a happy and healthy member of the family. That’s why, we treat every pet as a member of our family."
        }
      ]
    };
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

.column-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
}

.responsive {
  width: 100%;
  height: auto;
  max-height: 400px;
}

.pic {
  padding: 32px;
}
.info {
  display: grid;
  padding: 32px;
  align-content: center;
}

.services-wrapper {
  padding: 32px;
}

@media (max-width: 700px) {
  .columns {
    text-align: center;
  }
  .column-wrapper {
    grid-template-columns: 1fr;
  }
}
</style>
