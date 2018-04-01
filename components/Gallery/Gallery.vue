<template>
  <main class="main">
    <section class="info1">
      <h2>The Title</h2>
      <p>Some Text goes here, some text goes here, some text goes here, some text goes here.</p>
      <a href="#" class="info-link">Learn more...</a>
    </section>
    <figure class="figure1" @click="openModal()">
      <img class="figure-img" src="http://placekitten.com/g/350/200" alt="a kitten">
      <div class="modal" :class="(modalStatus) ? 'is-active' : ''">
        <div class="modal-background"></div>
        <div class="modal-content">
          <p class="image is-4by3">
            <img src="http://placekitten.com/g/350/200" alt="">
          </p>
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
      </div>
    </figure>
    <figure class="figure2">
      <img class="figure-img" src="http://placekitten.com/g/300/200" alt="a kitten">
    </figure>
    <figure class="figure3">
      <img class="figure-img" src="http://placekitten.com/g/500/500" alt="a kitten">
    </figure>
    <figure class="figure4">
      <img class="figure-img" src="http://placekitten.com/g/460/460" alt="a kitten">
    </figure>
    <figure class="figure5">
      <img class="figure-img" src="http://placekitten.com/g/210/300" alt="a kitten">
    </figure>
    <figure class="figure6">
      <img class="figure-img" src="http://placekitten.com/g/330/250" alt="a kitten">
    </figure>
    <section class="info2">
      <h2>The Title</h2>
      <p>Some Text goes here, some text goes here, some text goes here, some text goes here.</p>
      <a href="#" class="info-link">Learn more...</a>
    </section>
    <figure class="figure7">
      <img class="figure-img" src="http://placekitten.com/g/300/150" alt="a kitten">
    </figure>
    <figure class="figure7">
      <img class="figure-img" src="http://placekitten.com/g/370/190" alt="a kitten">
    </figure>
  </main>
</template>

<script>
export default {
  data() {
    return {
      modalStatus: false
    };
  },
  methods: {
    openModal() {
      this.modalStatus = !this.modalStatus;
    }
  }
};
</script>

<style scoped>
/* grid styles ------------------------------------ */
@media (min-width: 600px) {
  main {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  }

  .info1 {
    grid-column: span 2;
    grid-row: span 2;
  }

  .info2 {
    grid-column: span 2;
  }

  .figure1 {
    grid-column: span 3;
    grid-row: span 2;
  }
  .figure6 {
    grid-column: span 2;
  }
  .figure7 {
    grid-column: span 3;
  }
}

/* generic styles ----------------------------------- */

.logo-img {
  margin-right: 10px;
  height: 60px;
  transform: scaleX(-1);
}

.logo-text {
  font-family: "Lobster", cursive;
  font-size: 2.6em;
  color: #c3bab9;
  text-shadow: -1px -1px 0 #615655, 1px -1px 0 #615655, -1px 1px 0 #615655,
    1px 1px 0 #615655;
}

.figure-img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.info1,
.info2 {
  padding: 40px;
  background-color: #333;
  color: white;
}

h2 {
  font-size: 2em;
  margin-bottom: 1em;
}

p {
  margin-bottom: 1em;
}

figure:hover {
  cursor: pointer;
}

.info-link {
  text-decoration: none;
  color: #ff9900;
}
</style>
