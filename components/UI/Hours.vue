<template>
  <section class="hour-section">
    <div class="left">
      <div class="title">
        <h5 class="is-size-4" style="color: white">Daily Business Hours</h5>
      </div>
      <div class="times">
        <div class="time">
          <h6 >Monday - Friday</h6>
          <p >8:30am - 5:30pm</p>
        </div>
        <div class="time">
          <h6 >Saturday</h6>
          <p >12:30om - 1:30pm</p>
        </div>
        <div class="time">
          <h6 >Closed During Lunch</h6>
          <p >12:30am - 1:30pm</p>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="title">
        <h5 class="is-size-4" style="color: white">Address</h5>
      </div>
      <div class="address">
        <!-- <span class="is-size-7">3592 Old Atlanta Road</span>
        <span class="is-size-7">Suite 103</span>
        <span class="is-size-7">Suwanee, GA, 30024</span>
        <span class="is-size-7">(770) 888-9750</span> -->
        <p><a href="">3592 Old Atlanta Road, Suite 103, Suwanee, GA, 30024 </a></p>
        <p><a href="">(770) 888-9750 </a></p>
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
    background: #368fed;
    display: grid;
    grid-template-columns: 2fr 1fr;
    padding: 10px 0;
    align-items: center;
    color: white;
  }

  .title {
    text-align: center;
    margin-bottom: 1.05rem;
  }

  a {
  color: white;
}

a:hover {
  text-decoration: underline;
}

  .times {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding-bottom: 5px;
  }
  .address {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }

  @media (max-width: 700px) {
    .hour-section {
      grid-template-columns: 1fr;
      justify-items: center;
    }
    .times {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 15px;
      padding: 32px;
    }
  }

</style>
