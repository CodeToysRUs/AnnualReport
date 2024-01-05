<template>
  <div class="reading-time">
    <div class="reading-time-icon">
      <img src="../../assets/icon/userIcon.png" alt="">
    </div>
    <div v-if="onRecord" class="reading-time-top">
      <div class="reading-time-top-title">今年，<br>你的阅读总时长为</div>
      <div class="reading-time-top-middle">
        <div class="reading-time-top-middle-left">阅读总篇数</div>
        <div class="reading-time-top-middle-right">113<span>篇</span></div>
      </div>
      <div class="reading-time-top-bottom">
        <div class="reading-time-top-bottom-left">
          每一次点击都是对知识的渴望<br>每一秒思考都是对学术的追求
        </div>
        <div class="reading-time-top-bottom-right">
          <img src="../../assets/image/viewN.png" alt="">
        </div>
      </div>
    </div>
    <div v-else class="reading-time-top">
      <div class="reading-time-top-title">在棵岩星球还有些迷茫？</div>
      <div class="reading-time-top-text">2024年，相信你一定能沉浸其中<br>让藏匿在学术中的哲思点亮前路晦暗<br>找到属于你自己的光</div>
      <div class="reading-time-top-icon">
        <img src="../../assets/image/viewN.png" alt="">
      </div>
    </div>
    <div class="reading-time-middle">
      <div class="reading-time-middle-title">
        为了让你读的更快乐，2023年棵岩阅读<br>为你新增了
      </div>
      <div class="reading-time-middle-img">
        <img src="../../assets/image/readingTimeImg1.png" alt="">
        <img src="../../assets/image/readingTimeImg2.png" alt="">
        <img src="../../assets/image/readingTimeImg3.png" alt="">
      </div>
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
  @import 'ReadingTime.css'
</style>