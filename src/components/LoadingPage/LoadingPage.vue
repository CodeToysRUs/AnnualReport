<template>
  <div class="loading">
    <div class="iphone-top">1</div>
    <div class="loading-top">
      <div class="loading-top-title">棵岩阅读</div>
      <div class="loading-top-percent">12%</div>
    </div>
    <div class="loading-title">
      <div class="loading-title-text">正在加载</div>
      <div class="loading-title-dot">.</div>
    </div>
    <div class="loading-img">
      <img src="../../assets/image/loadingImg.png" alt="">
    </div>
    <div class="loading-bottom">即将解锁你的学术人格</div>
    <div class="loading-progress"></div>
  </div>
</template>

<script>
export default {
  name: 'LoadingPage',
  props: {
    // msg: String
  }
}
</script>

<style>
@import 'LoadingPage.css'
</style>
