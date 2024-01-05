<template>
  <div class="reading-time-detail">
    <div class="reading-detail-top">
      <div class="reading-detail-top-left">
        <img src="../../assets/icon/userIcon.png" alt="">
      </div>
      <div class="reading-detail-top-right">
        <img src="../../assets/image/readingTimeDetailSunImg.png" alt="">
      </div>
    </div>
    <div v-if="onRecord">
      <div class="reading-detail-middle-record"></div>
      <div class="reading-detail-middle-img">
        <img src="../../assets/image/viewN.png" alt="">
      </div>
    </div>
    <div v-else class="reading-detail-middle"></div>
    <div class="reading-detail-bottom">
      <img src="../../assets/image/readingTimeDetailMsg.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      onRecord: false, // 有记录用户
    }
  },
}
</script>
<style scoped>
  @import 'ReadingTimeDetail.css'
</style>