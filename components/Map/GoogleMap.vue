<template>
  <GmapMap
  :center="{lat: 34.101699, lng: -84.139432}"
  :zoom="17"
  map-type-id="terrain"
  style="width: 100%; height: 400px"
>
    <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="false"
    @click="center=m.position"
  />
    <gmap-info-window :position="{lat: 34.101999, lng: -84.139432}">
        <a href="https://www.google.com/maps/dir/34.1072584,-84.2475532/3592+Old+Atlanta+Rd,+Suwanee,+GA+30024/@34.1009526,-84.2292546,13z/data=!3m1!4b1!4m17!1m7!3m6!1s0x88f59980bdbfe83f:0x596d63b52ee0bd15!2s3592+Old+Atlanta+Rd,+Suwanee,+GA+30024!3b1!8m2!3d34.1016369!4d-84.1395148!4m8!1m1!4e1!1m5!1m1!1s0x88f59980bdbfe83f:0x596d63b52ee0bd15!2m2!1d-84.1395148!2d34.1016369" target="__blank">3592 Old Atlanta Road Suwanee, GA, 30024
Suite 103</a>
    </gmap-info-window>
  </GmapMap>
</template>

<script>
export default {
  data() {
    return {
      center: { lat: 34.101699, lng: -84.139432 },
      markers: [
        {
          position: { lat: 34.101699, lng: -84.139432}
        }
      ]
    }
  }

}
</script>

<style>

</style>
