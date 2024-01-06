<template>
  <div class="small-card">
    <!-- smallCard -->
    <img src="../../assets/image/smallCard.png" alt="">
    <div class="small-card-content">
      <slot name="card-text"></slot>
    </div>
  </div>
</template>
<script>
export default {
  
}
</script>
<style scoped>
@import 'SmallCard.css'
</style>