<template>
  <div class="page-wrapper">
    <h1 class="is-size-2 has-text-primary has-text-centered">Reviews</h1>
    <carousel :per-page="1" mouse-drag="false">
      <slide>
        <div class="slide-wrapper">
          <div class="card">
            <div class="card-content">
              <p class="title">
                “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
              </p>
              <p class="subtitle">
                Jeff Atwood
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <p class="title">
                “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
              </p>
              <p class="subtitle">
                Jeff Atwood
              </p>
            </div>
          </div>
        </div>

      </slide>
      <slide>
        <div class="slide-wrapper">
          <div class="card">
            <div class="card-content">
              <p class="title">
                “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
              </p>
              <p class="subtitle">
                Jeff Atwood
              </p>
            </div>
          </div>
          <div class="card">
            <div class="card-content">
              <p class="title">
                “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”
              </p>
              <p class="subtitle">
                Jeff Atwood
              </p>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>

</template>

<script>
export default {};
</script>

<style scoped>
.slide-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 15px;
  padding: 32px;
}
</style>
