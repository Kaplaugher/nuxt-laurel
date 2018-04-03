<template>
  <div>
    <section class="hero-wrapper">
      <div class="hero-text">
        <div>
          <h1 class="title is-1">About Us</h1>
        </div>
      </div>
    </section>
    <Hours />
    <section class="card-container">
      <div class="card">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-left">
              <figure class="image is-48x48">
                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
              </figure>
            </div>
            <div class="media-content">
              <p class="title is-4">John Smith</p>
              <p class="subtitle is-6">@johnsmith</p>
            </div>
          </div>

          <div class="content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
            <a>@bulmaio</a>.
            <a href="#">#css</a>
            <a href="#">#responsive</a>
            <br>
            <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Hours from '~/components/UI/Hours'
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
</style>
