<template>
  <div class="form-container">
    <div class="field">
      <label class="label">Name</label>
      <div class="control">
        <input class="input" type="text" placeholder="e.g Alex Smith">
      </div>
    </div>

    <div class="field">
      <label class="label">Email</label>
      <div class="control">
        <input class="input" type="email" placeholder="e.g. alexsmith@gmail.com">
      </div>
    </div>
    <div class="field">
      <label class="label">Message</label>
      <div class="control">
        <textarea class="textarea" placeholder="Textarea"></textarea>
      </div>
    </div>
    <a class="button is-primary">Submit</a>
  </div>
</template>

<script>
export default {

};
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
}



</style>
