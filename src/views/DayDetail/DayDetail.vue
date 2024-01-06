<template>
  <div class="day-detail">
    <img class="day-detail-bg" src="../../assets/image/dayDetailBG.png" alt="">
    <div class="day-detail-user">
      <img src="../../assets/icon/userIcon.png" alt="">
    </div>
    <div v-if="onRecord" class="day-detail-top">
      <div class="day-detail-top-title">Hi~@Anble,<br>距离与你初次见面已经过去了</div>
      <div class="day-detail-top-text">
        让我们追溯到原点<br>翻阅藏在时光细节里的珍贵瞬间
        <small-card class="day-detail-small-card">
          <div slot="card-text">坚持+</div>
        </small-card>
      </div>
    </div>
    <div v-else class="day-detail-top1">
      Hi Anble,<br>初次见面, 你好哇！<br>2024年, 和棵岩阅读一起开启学术之旅吧~
    </div>
    <div class="day-detail-middle">
      同一时间里，不同空间内<br>那些黑夜盏盏明灯亮起，来自棵岩圈的他们与你同在
    </div>
    <!-- subjectDataImg.png -->
    <div class="day-detail-middle-img">
      <img src="../../assets/image/subjectDataImg.png" alt="">
    </div>
    <div class="day-detail-bottom-img">
      <img src="../../assets/image/universityDataImg.png" alt="">
    </div>
  </div>
</template>
<script>
import SmallCard from '../../components/SmallCard/SmallCard.vue'
export default {
  name: 'DayDetail',
  data() {
    return {
      onRecord: true,
    }
  },
  components: {
    SmallCard
  },
  methods: {
  },
  mounted() {
  }
}
</script>
<style scoped>
@import 'DayDetail.css'
</style>