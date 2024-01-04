<template>
  <div class="login">
    <div class="login-top">
      <div class="login-top-left">
        <div class="login-top-left-title">
          棵岩阅读
        </div>
        <div class="login-top-left-content">
          <div class="login-top-left-white">
            <!-- <div class="login-left-white-border"></div> -->
            <div class="login-left-white-img">
              <img src="../../assets/image/loginPageYearImg.png" alt="">
              <div class="login-white-img-text">
                <div class="login-left-white-text">年度报告</div>
              </div>
            </div>
          </div>
          <div class="login-top-left-black"></div>
        </div>
      </div>
      <div class="login-top-right">
        <img src="../../assets/image/loginPageImg.png" alt="">
      </div>
    </div>
    <div class="login-button"></div>
    <div class="login-footer">
      <div v-if="userAgree" class="login-footer-circle" @click="userAgreeFun"></div>
      <div v-else class="login-footer-circle login-agree" @click="userAgreeFun">
        <div class="login-agree-circle"></div>
      </div>
      <div class="login-footer-text">我已阅读并同意<span>《用户协议》</span>与<span>《隐私协议》</span></div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userAgree: false,
    }
  },
  methods: {
    userAgreeFun() {
      this.userAgree = !this.userAgree
    }
  },
}
</script>
<style>
@import 'LoginPage.css'
</style>