<template>
  <div class="page-wrapper">
    <h1 class="is-size-2 has-text-primary has-text-centered">What Our Clients Have To Say</h1>
    <carousel :per-page="perPage" paginationActiveColor="#368fed" paginationColor="black" :perPageCustom="[[768, 2]]">
      <slide>
        <div class="cards">
          <div class="card-content">
            <p class="title">
              “I have been bringing my dog and 5 cats to Dr. Tierney for the last 7 years and couldn't be happier. She really makes us all feel like family :-)”
            </p>
            <p class="has-text-centered">
              Dawn W.
            </p>
          </div>
        </div>
      </slide>
      <slide>
        <div class="cards">
          <div class="card-content">
            <p class="title">
              “Dr. Tierney and her staff are true professionals. She takes time with you and your pet to answer questions and make sure you are comfortable with the treatment and the follow up prescribed. We would not take our pet anywhere else.”
            </p>
            <p class="has-text-centered">
              William M.
            </p>
          </div>
        </div>
      </slide>
      <slide class="slide">
        <div class="slide-wrapper">
          <div class="cards">
            <div class="card-content">
              <p class="title">
                “Great experience, amazing doc, friendly staff. Definitely recommend.”
              </p>
              <p class="has-text-centered">
                Sandeep T.
              </p>
            </div>
          </div>
        </div>
      </slide>
      <slide>
        <div class="cards">
          <div class="card-content">
            <p class="title">
              “Wonderful experience, love taking my kitties here who are scared of everything but love Laurel Springs Animal Clinic and Dr. Tierney.”
            </p>
            <p class="has-text-centered">
              Kimberly C.
            </p>
          </div>
        </div>
      </slide>
      <slide>
        <div class="slide-wrapper">
          <div class="cards">
            <div class="card-content">
              <p class="title">
                “Kelly has taken great care of our dogs for several years. She loves animals and they love her! She does a great job.”
              </p>
              <p class="has-text-centered">
                Jeff T.
              </p>
            </div>
          </div>
        </div>
      </slide>
    </carousel>
  </div>

</template>

<script>
export default {
  data() {
    return {
      perPage: 1
    };
  }
};
</script>

<style scoped>
</style>
