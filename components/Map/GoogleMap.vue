<template>
  <GmapMap
  :center="{lat: 34.101699, lng: -84.139432}"
  :zoom="17"
  map-type-id="terrain"
  style="width: 100%; height: 300px"
>
    <GmapMarker
    :key="index"
    v-for="(m, index) in markers"
    :position="m.position"
    :clickable="true"
    :draggable="false"
    @click="center=m.position"
  />
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
