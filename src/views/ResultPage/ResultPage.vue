<template>
  <div class="result-page">
    <!-- ResultPage -->
    <div v-if="resultUrl === ''">
      <div class="result-page-top">
        <div class="result-page-top-left">
          <div class="result-page-top-left-top">棵岩阅读</div>
          <div class="result-page-top-left-bottom">微信公众号
            <img src="../../assets/icon/weChat.png" alt="">
          </div>
        </div>
        <div class="result-page-top-right">
          <div class="result-page-top-right-qrCode"></div>
          <div class="result-page-top-right-text">发送“学术人格”，查看我的学术人格</div>
        </div>
      </div>
      <div class="result-page-container">
        <div class="result-page-middle">
          <div class="result-page-middle-top">
            <div class="result-page-middle-top-left">
              <img src="../../assets/image/resultMeddleTopLeft.png" alt="">
              <div class="result-page-middle-container">
                <div class="result-page-middle-container-name">@Anble</div>
                <div class="result-page-middle-container-content">学术人格<div class="result-page-middle-circle-container">
                  <div class="result-page-middle-circle pink"></div>
                  <div class="result-page-middle-circle grey"></div>
                  <div class="result-page-middle-circle green"></div>
                </div></div>
              </div>
            </div>
            <div class="result-page-middle-top-right">ENTJ</div>
          </div>
          <div class="result-page-middle-bottom">
            <img src="../../assets/image/resultMeddleBottomBG.png" alt="">
            <div class="result-page-middle-bottom-container">
              <div class="result-page-middle-bottom-top-border">
                <img src="../../assets/image/resultPageTopBorder.png" alt="">
                <div class="result-page-top-border-text"><span>灵活高效的键盘</span></div>
              </div>
              <div class="result-page-middle-bottom-border">
                <img src="../../assets/image/resultMeddleBottomBottomBG.png" alt="">
                <div class="result-page-middle-bottom-bottom-container">
                  你更倾向于更倾向于尝试理解大局和理论的整体连贯性，同时也更倾向于探讨研究的潜在影响和意义，喜欢通过教导和帮助他人来影响团队。
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="result-page-bottom">
          <img src="../../assets/image/resultPageBottom1.png" alt="">
          <div class="result-page-bottom-container">
            <img src="../../assets/image/resultPageBottom2.png" alt="">
          </div>
        </div>
      </div>
      <!-- <div class="result-page-middle">
        <div class="result-page-middle-top">
          <div class="result-page-middle-top-left">
            <img src="../../assets/image/resultMeddleTopLeft.png" alt="">
            <div class="result-page-middle-container">
              <div class="result-page-middle-container-name">@Anble</div>
              <div class="result-page-middle-container-content">学术人格<div class="result-page-middle-circle-container">
                <div class="result-page-middle-circle pink"></div>
                <div class="result-page-middle-circle grey"></div>
                <div class="result-page-middle-circle green"></div>
              </div></div>
            </div>
          </div>
          <div class="result-page-middle-top-right">ENTJ</div>
        </div>
        <div class="result-page-middle-bottom">
          <img src="../../assets/image/resultMeddleBottomBG.png" alt="">
          <div class="result-page-middle-bottom-container">
            <div class="result-page-middle-bottom-top-border">
              <img src="../../assets/image/resultPageTopBorder.png" alt="">
              <div class="result-page-top-border-text"><span>灵活高效的键盘</span></div>
            </div>
            <div class="result-page-middle-bottom-border">
              <img src="../../assets/image/resultMeddleBottomBottomBG.png" alt="">
              <div class="result-page-middle-bottom-bottom-container">
                你更倾向于更倾向于尝试理解大局和理论的整体连贯性，同时也更倾向于探讨研究的潜在影响和意义，喜欢通过教导和帮助他人来影响团队。
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="result-page-bottom">
        <img src="../../assets/image/resultPageBottom1.png" alt="">
        <div class="result-page-bottom-container">
          <img src="../../assets/image/resultPageBottom2.png" alt="">
        </div>
      </div> -->
      <!-- <academic-personality ref="academicPersonality"></academic-personality> -->
      <div class="result-page-button">
        <img src="../../assets/icon/updateIcon.png" alt="">
        <div class="result-page-button-right" @click="convertToImage">分享图片</div>
      </div>
    </div>
    <div class="result-page-share" v-if="resultUrl">
      <div class="result-page-share-title">分享图片
        <div class="result-page-share-title-back" @click="backToResult"><img src="../../assets/image/shareTitleBack.png" alt="">返回</div>
      </div>
      <div class="result-page-share-img" ref="resultPageShare">
        <div class="result-page-share-img-bg-container">
          <div class="result-page-share-img-bg">
            <img src="../../assets/image/shareImgBG.png" alt="">
          </div>
        </div>
        <img class="result-page-share-img-top" :src="resultUrl"  alt="">
        <div class="result-page-share-img-bottom">
          <img src="../../assets/image/ShareResultBottomImg.png" alt="">
          <div class="result-page-share-img-bottom-weChat" ></div>
        </div>
      </div>
      <div class="result-page-share-bottom">
        <img src="../../assets/image/shareFriend.png" alt="">
        <img src="../../assets/image/shareWeChat.png" alt="">
        <img src="../../assets/image/shareQQ.png" alt="">
        <img src="../../assets/image/downloadResult.png" alt="" @click="saveResultImg">
      </div>
    </div>
  </div>
</template>
<script>
// import AcademicPersonality from './AcademicPersonality/AcademicPersonality.vue'
import html2canvas from 'html2canvas';
export default {
  data() {
    return {
      resultUrl: '',
    }
  },
  components: {
    // AcademicPersonality
  },
  methods: {
    saveResultImg() {
      const content = this.$refs.resultPageShare;
      html2canvas(content).then(canvas => {
        const dataUrl = canvas.toDataURL();
        const link = document.createElement('a');
        link.download = '棵岩阅读-mbit.png';
        link.href = dataUrl;
        link.click();
      });
    },
    backToResult() {
      this.resultUrl = ''
    },
    convertToImage() {
      const result = document.querySelector(".result-page-container");
      html2canvas(result, { backgroundColor: 'transparent' }).then(canvas => {
        const image = canvas.toDataURL();
        this.resultUrl = image;
      });
      const title = document.querySelector(".result-page-top");
      html2canvas(title).then(canvas => {
        const image = canvas.toDataURL();
        this.titleUrl = image;
      });
    }
  },
}
</script>
<style scoped>
  @import 'ResultPage.css'
</style>