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
          <p >8:30am - 12:30pm</p>
        </div>
        <div class="time">
          <h6 >Closed During Lunch</h6>
          <p >12:30pm - 1:30pm</p>
        </div>
      </div>
    </div>
    <div class="right">
      <div class="title">
        <h5 class="is-size-4" style="color: white">Address</h5>
      </div>
      <div class="address">
        <p><a href="https://www.google.com/maps/place/3592+Old+Atlanta+Rd+%23103,+Suwanee,+GA+30024/@34.1016413,-84.1417035,17z/data=!3m1!4b1!4m5!3m4!1s0x88f59980bdbfe83f:0x11237a31c5a30a9c!8m2!3d34.1016369!4d-84.1395148" target="__blank">3592 Old Atlanta Road, Suite 103, Suwanee, GA, 30024 </a></p>
        <p><a href="tel:770-888-9750">(770) 888-9750 </a></p>
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
      font-size: 13px;
    }
  }

</style>
