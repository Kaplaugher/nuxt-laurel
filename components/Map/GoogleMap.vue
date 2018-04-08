<template>
    <googlemaps-map ref="map" :center="center" @ready="ready" :zoom="18">

    </googlemaps-map>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 34.101699, lng: -84.139432 },
      markers: [{

      }]
    };
  },
  methods: {
    ready() {
      this.$refs.map.resize();
    }
  }
};
</script>

<style>
.vue-google-map {
  width: 100%;
  height: 35vh;
}
</style>
