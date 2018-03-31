<template>
  <section class="hour-section">
    <div class="left">
      <div class="title">
        <h5 class="is-size-6">Daily Business Hours</h5>
      </div>
      <div class="times">
        <div class="time">
          <h2 class="is-size-7">Monday - Friday</h2>
          <p class="is-size-7">8:30am - 5:30pm</p>
        </div>
        <div class="time">
          <h2 class="is-size-7">Saturday</h2>
          <p class="is-size-7">12:30om - 1:30pm</p>
        </div>
        <div class="time">
          <h2 class="is-size-7">Closed During Lunch</h2>
          <p class="is-size-7">8:30am - 5:30pm</p>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="title">
        <h5 class="is-size-6">Address</h5>
      </div>
      <div class="address">
        <span class="is-size-7">3592 Old Atlanta Road</span>
        <span class="is-size-7">Suite 103</span>
        <span class="is-size-7">Suwanee, GA, 30024</span>
        <span class="is-size-7">(770)888-9750</span>
      </div>
    </div>

  </section>
</template>

<script>
export default {
  name: 'Hours'

}
</script>

<style scoped>
  .hour-section {
    background: cadetblue;
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 20px 0;
    align-items: center;
  }

  .title {
    text-align: center;
  }

  .times {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 10px;
  }
  .address {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

</style>
