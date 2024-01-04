<template>
  <div class="loading" @click="loginPage">
    <div class="iphone-top">iphone头部</div>
    <div class="loading-top">
      <div class="loading-top-title">棵岩阅读</div>
      <div class="loading-top-percent">{{percentNumber}}%</div>
    </div>
    <div class="loading-title">
      <div class="loading-title-text">正在加载</div>
      <div class="loading-title-dot">
        <div v-if="dot1" class="loading-title-dot-index"></div>
        <div v-if="dot2" class="loading-title-dot-index"></div>
        <div v-if="dot3" class="loading-title-dot-index"></div>
      </div>
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
  },
  data() {
    return {
      dotIndex: null,
      dot1: false,
      dot2: false,
      dot3: false,
      percentNumber: 0,
      percentIndex: null,
    };
  },
  computed: {

  },
  created() {
    this.dotIndex = setInterval(this.displayDot, 1000);
    this.percentIndex = setInterval(this.updatePercentNumber, 100)
  },
  methods: {
    loginPage() {
      this.$router.push('/loginPage');
    },
    updatePercentNumber() {
      if (this.percentNumber < 98) {
        this.percentNumber++;
      }
      if (this.percentNumber === 37 || this.percentNumber === 45 || this.percentNumber === 63) {
        clearInterval(this.percentIndex);
        this.percentIndex = setInterval(this.updatePercentNumber, 500)
      }
      if (this.percentNumber === 41 || this.percentNumber === 49 || this.percentNumber === 67) {
        clearInterval(this.percentIndex);
        this.percentIndex = setInterval(this.updatePercentNumber, 100)
      }
    },
    displayDot() {
      if (!this.dot1 && !this.dot2 && !this.dot3) {
        this.dot1 = true;
      } else if (this.dot1 && !this.dot2 && !this.dot3) {
        this.dot2 = true;
      } else if (this.dot1 && this.dot2 && !this.dot3) {
        this.dot3 = true;
      } else if (this.dot1 && this.dot2 && this.dot3) {
        this.dot1 = false;
        this.dot2 = false;
        this.dot3 = false;
      }
    }
  },
  beforeDestroy() {
    clearInterval(this.dotIndex);
    clearInterval(this.percentNumber);
  }
}
</script>

<style>
@import 'LoadingPage.css'
</style>
