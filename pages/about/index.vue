<template>
  <section class="about-wrapper">
    <section class="hero is-medium">
      <div class="hero-body">
        <div class="container">
          <h1 class="title has-text-white">
            Who We Are
          </h1>
        </div>
      </div>
    </section>
    <Hours />
    <div class="column-wrapper">
      <div class="info">
        <h2 class="is-size-3 has-text-centered has-text-primary has-text-weight-bold">About Us</h2>
        <p class="description">At Laurel Springs Animal Hospital, we understand that your pet is a special part of your family and we will take the appropriate steps to understand both your needs. Our staff is committed to providing your pet with the finest care! We want your pet to be a happy and healthy member of the family. That’s why, we treat every pet as a member of our family.</p>
      </div>
      <div class="pic-wrapper">
        <Profile />
      </div>
    </div>
    <div class="staff-selection has-background-primary">
      <h2 class="is-size-3 has-text-centered has-text-white has-text-weight-bold section-title">Meet Our Staff</h2>
      <div class="columns staff-columns">
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="~/assets/vettech3.jpeg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <h1 class="is-size-3">Blah blah</h1>
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="~/assets/vettech1.jpg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <h1 class="is-size-3">Blah blah</h1>
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
        </div>
        <div class="column">
          <div class="card">
            <div class="card-image">
              <figure class="image is-4by3">
                <img src="~/assets/vettech2.jpg" alt="Placeholder image">
              </figure>
            </div>
            <div class="card-content">
              <h1 class="is-size-3">Blah blah</h1>
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="services-wrapper">
      <h2 class="is-size-3 has-text-centered has-text-primary has-text-weight-bold section-title">Our Services</h2>
      <div class="columns service-columns">
        <div class="column">
          <ul class="list-wrapper">
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
          <ul class="list-wrapper">
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
          <ul class="list-wrapper">
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
          <ul class="list-wrapper">
            <li>Pain Management</li>
            <li>Parasite Control</li>
            <li>Prescriptions</li>
            <li>Endoscopy</li>
            <li>Cystoscope Laparoscopic Biopsies</li>
          </ul>
        </div>
      </div>
    </div>
    <EmergencyHours />
  </section>

</template>

<script>
import Hours from "~/components/UI/Hours";
import EmergencyHours from "~/components/UI/EmergencyHours";
import Gallery from "~/components/Gallery/Gallery";
import Profile from "~/components/UI/Profile";
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
    EmergencyHours,
    Gallery,
    Profile,
  }
};
</script>

<style scoped>
.hero {
  background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url("~/assets/mouse.jpeg");
  background-size: cover;
  background-position: center center;
}

.pic-wrapper {
  padding: 32px;
}

.description {
  margin-top: 20px;
}

.column-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
}

.staff-selection {
  background-color: hsl(171, 100%, 41%);
  padding: 32px;
}

.staff-columns {
  padding: 32px;
}

.service-columns {
  padding: 32px;
}

.responsive {
  width: 100%;
  height: auto;
  max-height: 400px;
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
  .column-wrapper {
    grid-template-columns: 1fr;
    justify-items: center;
  }

  .hero {
    height: 30vh;
  }

  .content {
    font-size: 15px;
  }

  .service-columns {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1000px) {
  .hero {
    height: 40vh;
  }
}
</style>
