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
        <div class="result-page-middle" :style="{height:resultPageMiddleHeight}">
          <div class="result-page-middle-resultImg">
            <img :src="resultImg" alt="">
          </div>
          <div class="result-page-middle-top">
            <div class="result-page-middle-top-left">
              <img src="../../assets/image/resultMeddleTopLeft.png" alt="">
              <div class="result-page-middle-container">
                <div class="result-page-middle-container-name">@<span>{{ userName }}</span></div>
                <div class="result-page-middle-container-content">学术人格<div class="result-page-middle-circle-container">
                  <div class="result-page-middle-circle pink"></div>
                  <div class="result-page-middle-circle grey"></div>
                  <div class="result-page-middle-circle green"></div>
                </div></div>
              </div>
            </div>
            <!-- <div class="result-page-middle-top-right">ENTJ</div> -->
            <div class="result-page-middle-top-right">{{ resultMBTI }}</div>
          </div>
          <div class="result-page-middle-bottom">
            <img src="../../assets/image/resultMeddleBottomBG.png" alt="">
            <div class="result-page-middle-bottom-container">
              <div class="result-page-middle-bottom-top-border">
                <img src="../../assets/image/resultPageTopBorder.png" alt="">
                <div class="result-page-top-border-text">
                  <!-- <span>灵活高效的键盘</span> -->
                  <span>{{ characterTitle }}</span>
                </div>
              </div>
              <div class="result-page-middle-bottom-border">
                <img src="../../assets/image/resultMeddleBottomBottomBG.png" alt="" :style="{height:descriptionBGHeight}">
                <!-- <img src="../../assets/image/rectangle.png" alt="" :style="{height:descriptionBGHeight1}" class="description-height1">
                <img src="../../assets/image/trapezoid.png" alt="" :style="{height:descriptionBGHeight2}" class="description-height2"> -->
                <div class="result-page-middle-bottom-bottom-container" ref="characterDescriptionHeight">
                  <!-- {{ characterDescription }} -->
                  <div class="result-page-middle-bottom-bottom-container-text">{{ characterDescription }}</div>
                  <!-- <div class="result-page-middle-bottom-bottom-container-text" :style="{height:descriptionHeight}">{{ characterDescription }}</div> -->
                </div>
              </div>
            </div>
          </div>
          <!-- <div class="result-page-middle-bottom-border">
            <img src="../../assets/image/resultMeddleBottomBottomBG.png" alt="" :style="{height:descriptionBGHeight}">
            <div class="result-page-middle-bottom-bottom-container" ref="characterDescriptionHeight">
              {{ characterDescription }}
            </div>
          </div> -->
        </div>
        <!-- <div class="result-page-middle-bottom-border">
          <img src="../../assets/image/resultMeddleBottomBottomBG.png" alt="" :style="{height:descriptionBGHeight}">
          <div class="result-page-middle-bottom-bottom-container" ref="characterDescriptionHeight">
            {{ characterDescription }}
          </div>
        </div> -->
        <div class="result-page-bottom">
          <img src="../../assets/image/resultPageBottom1.png" alt="">
          <div class="result-page-bottom-container">
            <img src="../../assets/image/resultPageBottom2.png" alt="">
            <div class="result-page-bottom-text-border">
              <div class="result-page-bottom-text">
                <div class="result-page-bottom-text-container result-page-bottom-text-left flush-right">
                  <div class="result-page-bottom-text-title">课题组同门</div>
                  <div class="result-page-bottom-text-subheading">一起干活一起卷</div>
                  <div class="result-page-bottom-text-content">{{groupMemberMBTI}}</div>
                </div>
                <div class="result-page-bottom-text-container">
                  <div class="result-page-bottom-text-title">师兄师姐</div>
                  <div class="result-page-bottom-text-subheading">有你是我的福气</div>
                  <div class="result-page-bottom-text-content">{{predecessorMBTI}}</div>
                </div>
              </div>
              <div class="result-page-bottom-text">
                <div class="result-page-bottom-text-container result-page-bottom-text-left flush-right">
                  <div class="result-page-bottom-text-content">{{idolMBTI}}</div>
                  <div class="result-page-bottom-text-subheading">冲刺的能量来源</div>
                  <div class="result-page-bottom-text-title">科研偶像</div>
                </div>
                <div class="result-page-bottom-text-container">
                  <div class="result-page-bottom-text-content">{{tutorMBTI}}</div>
                  <div class="result-page-bottom-text-subheading">我导血压我决定</div>
                  <div class="result-page-bottom-text-title">金牌导师</div>
                </div>
              </div>
            </div>
            <div class="result-page-bottom-img-border">
              <div class="result-page-bottom-img-outline">
                <div class="result-page-bottom-img-container result-page-bottom-img-top">
                  <div class="result-page-bottom-img">
                    <img :src="groupMemberImg" alt="">
                  </div>
                  <div class="result-page-bottom-img">
                    <img :src="predecessorImg" alt="">
                  </div>
                </div>
                <div class="result-page-bottom-img-container">
                  <div class="result-page-bottom-img">
                    <img :src="idolImg" alt="">
                  </div>
                  <div class="result-page-bottom-img">
                    <img :src="tutorImg" alt="">
                  </div>
                </div>
              </div>
            </div>
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
      <div class="result-page-share-img-border" >
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
      </div>
      <div class="result-page-share-bottom">
        <img src="../../assets/image/shareFriend.png" alt="">
        <img src="../../assets/image/shareWeChat.png" alt="">
        <img src="../../assets/image/shareQQ.png" alt="">
        <img src="../../assets/image/downloadResult.png" alt="" @click="saveResultImg">
      </div>
      <div class="result-page-share-success" v-if="showSuccess">保存成功</div>
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
      showSuccess: false,
      userName: 'IVAN',
      // resultImg: require('@/assets/image/keyboard.png'),
      // resultImg: require('@/assets/image/stapler.png'),
      // resultImg: require('@/assets/image/scissor.png'),
      // groupMemberImg: require('@/assets/image/pen.png'),
      // predecessorImg: require('@/assets/image/scissor.png'),
      // idolImg: require('@/assets/image/eraser.png'),
      // tutorImg: require('@/assets/image/calculator.png'),
      resultImg: '',
      groupMemberImg: '',
      predecessorImg: '',
      idolImg: '',
      tutorImg: '',
      // resultMBTI: 'ISTP', // 用户测试结果
      resultMBTI: 'ENFJ', 
      groupMemberMBTI:'',
      predecessorMBTI:'',
      idolMBTI:'',
      tutorMBTI:'',
      academicRelationships: [],
      characterDescription: '',
      characterTitle:'',
      descriptionBGHeight: '',
      descriptionBGHeight1: '',
      descriptionBGHeight2: '',
      resultPageMiddleHeight: '',
      descriptionHeight: '',
    }
  },
  created() {
    this.setResultImg();
    // this.getDescriptionHeight()
  },
  components: {
    // AcademicPersonality
  },
  watch: {
    characterDescription(newValue, oldValue) {
      console.log('characterDescription 变化：', newValue, oldValue)
      this.$nextTick(() => {
        // 使用 $nextTick 确保 DOM 已经更新
        this.getDescriptionHeight();
      });
    }
  },
  methods: {
    getDescriptionHeight() {
      const descriptionHeight = this.$refs.characterDescriptionHeight.offsetHeight;
      console.log("div 高度：", descriptionHeight)
      this.descriptionBGHeight = `${descriptionHeight}px`
      const descriptionBGHeight1 = descriptionHeight + 2
      this.descriptionBGHeight1 = `${descriptionBGHeight1}px`
      const descriptionBGHeight2 = descriptionHeight + 12
      this.descriptionBGHeight2 = `${descriptionBGHeight2}px`
      const middleHeight = 214 + descriptionHeight;
      this.resultPageMiddleHeight = `${middleHeight}px`
      this.descriptionHeight = `${(descriptionHeight / 6) * 5}px`
    },
    setAcademicRelationships(mbti) {
      this.academicRelationships = []
      if (mbti === 'INTJ') {
        this.characterTitle = '精致细腻的钢笔'
        this.characterDescription = '“钢笔”型学术人格的特点是有远见、独立、自信。你喜欢追求知识和创新，有着高远的目标和独立的思想，不喜欢受到限制和干扰。钢笔的字迹清晰而有力，表达了正如你的学术思维总是清晰而深刻。'
        this.academicRelationships = ['ENFP', 'ENTJ', 'INTP', 'INFJ']
      }
      if (mbti === 'ISFJ') {
        this.characterTitle = '柔软贴心的橡皮擦'
        this.characterDescription = '“橡皮擦”型学术人格特点是忠诚、负责、体贴。你喜欢维护秩序和和谐，不喜欢冲突和变化。你的存在像橡皮擦一样让人感到安心，在课题组中，你总是乐于解决突发状况的那一个，帮助同门修正问题，像橡皮擦一样擦去错误和痕迹。'
        this.academicRelationships = ['ISTJ', 'ESTP', 'ESFJ', 'ENFJ']
      }
      if (mbti === 'INTP') {
        this.characterTitle = '理智冷静的计算器'
        this.characterDescription = '“计算器”型学术人格的特点是聪明、富有好奇心、和善于分析。你喜欢探索理论和逻辑，不满足于表面的现象或者既定的规则，具有无限的创造力。你的思维清晰而深刻，总是能像计算机一样解决复杂的难题，并且给出精确的答案。'
        this.academicRelationships = ['ENTP', 'ESTJ', 'INTJ', 'ENTJ']
      }
      if (mbti === 'ESFP') {
        this.characterTitle = '别出心裁的剪刀'
        this.characterDescription = '“剪刀”型学术人格的特点是活泼、友好、灵活。剪刀的行为多变而有趣，可以剪出各种各样的形状和图案，给人惊喜和乐趣。你喜欢体验生活和娱乐，不喜欢束缚和压力。你有着活泼的性格和友好的态度，不喜欢被束缚或者压抑，在学术领域，你总是有很多新奇的想法'
        this.academicRelationships = ['ESTP', 'INFP', 'ESTJ', 'ENFJ']
      }
      if (mbti === 'ESTP') {
        // ESTP
        this.characterTitle = '严格机敏的鼠标'
        this.characterDescription = '“鼠标”型学术人格的特点是敏捷、务实、具有冒险精神。鼠标的动作灵活而简单，可以用不同的速度和方向，控制着屏幕上的光标。你喜欢行动和刺激，不喜欢理论和沉闷，有着敏捷的反应和实际的行动。'
        this.academicRelationships = ['ESFP', 'ISTJ', 'ENTJ', 'INFJ']
      }
      if (mbti === 'ISFP') {
        this.characterTitle = '独具匠心的画笔'
        this.characterDescription = '”画笔”型学术人格的特点是注重审美效果，喜欢创造，不喜欢冲突和压力。画笔用不同的颜色和笔触，画出各种各样的风景和人物，带来愉悦的审美体验。在完成学术任务时你也总是讲究视觉效果的自然和创新，体现出你的艺术气质和丰富的情感。'
        this.academicRelationships = ['INFP', 'ENTP', 'ESFJ', 'ENFJ']
      }
      if (mbti === 'ISTP') {
        this.characterTitle = '创新灵活的磁铁'
        this.characterDescription = '“磁铁”型学术型人格有趣、灵活，喜欢吸引和变化，不喜欢固定和无聊。磁铁的魅力独特而强大，它可以用不同的极性和力量，吸引或者排斥其他的金属，给人一种神奇和好玩的感觉。磁铁的用户通常是那些有着有趣的性格和灵活的适应的人，他们不喜欢固定或者无聊，他们总是吸引和变化，他们的技巧精湛。'
        this.academicRelationships = ['INTP', 'ESTJ', 'INTJ', 'ENTJ']
      }
      if (mbti === 'ESFJ') {
        this.characterTitle = '井然有序的日历'
        this.characterDescription = '”日历“型学术人格的特点是贴心、讲原则、负责。日历记录下每一天的重要事件和日期，一切都在规划之中。你喜欢在实施学术计划前提前做时间及事项规划。无论是完成ddl还是参加组会你的时间观念总是非常强。'
        this.academicRelationships = ['ISFJ', 'ENFP', 'ENFJ', 'INFJ']
      }
      if (mbti === 'INFP') {
        this.characterTitle = '理想高远的日记本'
        this.characterDescription = '“日记本”型学术人格的特点是理想化、追求个性、真诚。日记本用不同的字体和语言记录下真诚而深刻的心声。你喜欢分享、倾诉和表达，不喜欢虚假和规则。在学术领域，你怀揣着纯净而崇高的学术追求，期待做出独到见解的学术成果。'
        this.academicRelationships = ['INFJ', 'ESTP', 'ENFP', 'ENFJ']
      }
      if (mbti === 'ESTJ') {
        this.characterTitle = '一丝不苟的钉书机'
        this.characterDescription = '“钉书机”型学术人格的特点是坚强、实际、喜欢组织性。订书机可以将松散的纸张钉成一本整齐的书，带来秩序感。你喜欢执行计划和达成目标，不喜欢混乱和怠惰，你的作风果断而有效，不容忍混乱或者怠惰，具有很强的领导力。'
        this.academicRelationships = ['ISTJ', 'ENTP', 'ENTJ', 'INTJ']
      }
      if (mbti === 'ENFJ') {
        this.characterTitle = '热爱合作的胶水'
        this.characterDescription = '“胶水”型学术人格的特点是热情、喜欢合作、鼓舞人心。胶水可以将不同的物品粘合在一起，形成整体。你具有极高的人格魅力，不喜欢冷漠和孤立，在学术环境中喜欢思考对社会能做出明显贡献，推进社会关系团结的课题。'
        this.academicRelationships = ['ENFP', 'ISTP', 'INFJ', 'ENFJ']
      }
      if (mbti === 'ENFP') {
        this.characterTitle = '创意无限的彩笔'
        this.characterDescription = '“彩笔”型学术人格的特点是具有创造力、富有热情、崇尚自由。彩笔可以用不同的颜色和线条，画出各种各样的图画和文字，给人带来无限想象的空间。你喜欢发现可能和表达自我，不喜欢限制和重复，具有极高的创造天赋。'
        this.academicRelationships = ['ENFJ', 'ISTJ', 'ENTP', 'INTJ']
      }
      if (mbti === 'ENTP') {
        this.characterTitle = '灵活高效的键盘'
        this.characterDescription = '“键盘”型学术人格的特点是智慧、创新、勇于挑战。键盘的言语灵敏而有力，它可以用不同的符号和语言，输入出各种各样的信息和数据。你喜欢解决问题和辩论，不喜欢约束和无聊，具有极佳的口才和创新思维。'
        this.academicRelationships = ['ENFP', 'ESTJ', 'ENTJ', 'INTP']
      }
      if (mbti === 'ENTJ') {
        this.characterTitle = '富有条理的文件夹'
        this.characterDescription = '“文件夹”型学术人格是有条理、高效、具有领导力。文件夹的能力领导而出色，它可以将杂乱的文件整理成有序的分类，给人一种组织和控制的感觉。你具有高效的执行力且富有条理。'
        this.academicRelationships = ['INTJ', 'INFP', 'ESTJ', 'INTJ']
      }
      if (mbti === 'INFJ') {
        this.characterTitle = '眼明心亮的显示器'
        this.characterDescription = '“显示器”型学术人格的特点是理想化、具有洞察力和共情力。显示器的视野清晰而广阔，它可以展示出各种各样的画面和信息。你喜欢寻求意义和理解，不喜欢虚假和冲突，有着理想的信念和洞察的眼光，不容忍虚假或者冲突，总是寻求意义和理解。'
        this.academicRelationships = ['ISFP', 'ESTP', 'ENFJ', 'ENTJ']
      }
      if (mbti === 'ISTJ') {
        this.characterTitle = '明察秋毫的尺子'
        this.characterDescription = '“尺子”型学术人格的特点是严谨、可靠、坚定，喜欢遵守事实和责任，不喜欢猜测和冒险。尺子的标准公正而规范，它可以精确地测量出长度和角度。你具有严谨的态度和可靠的品质，在课题组中你具有较高的信誉。'
        this.academicRelationships = ['ESTJ', 'ENFP', 'ISFJ', 'INTP']
      }
    },
    setImg(mbti) {
      if (mbti === 'INTJ') {
        return 'pen'
      }
      if (mbti === 'ISFJ') {
        return 'eraser'
      }
      if (mbti === 'INTP') {
        return 'calculator'
      }
      if (mbti === 'ESFP') {
        return 'scissor'
      }
      if (mbti === 'ESTP') {
        return 'mouse'
      }
      if (mbti === 'ISFP') {
        return 'brush'
      }
      if (mbti === 'ISTP') {
        return 'magnet'
      }
      if (mbti === 'ESFJ') {
        return 'calendar'
      }
      if (mbti === 'INFP') {
        return 'diary'
      }
      if (mbti === 'ESTJ') {
        return 'stapler'
      }
      if (mbti === 'ENFJ') {
        return 'glue'
      }
      if (mbti === 'ENFP') {
        return 'colourPen'
      }
      if (mbti === 'ENTP') {
        return 'keyboard'
      }
      if (mbti === 'ENTJ') {
        return 'folder'
      }
      if (mbti === 'INFJ') {
        return 'display'
      }
      if (mbti === 'ISTJ') {
        return 'ruler'
      }
    },
    setResultImg() {
      this.setAcademicRelationships(this.resultMBTI)
      const result = this.setImg(this.resultMBTI)
      this.resultImg = require(`@/assets/image/${result}.png`)
      // console.log(`@/assets/image/${result}.png`)
      // this.groupMemberMBTI = 'ENFP'
      this.groupMemberMBTI = this.academicRelationships[0]
      this.groupMemberImg = require(`@/assets/image/${this.setImg(this.groupMemberMBTI)}.png`)
      // this.idolMBTI = 'ENTJ'
      this.idolMBTI = this.academicRelationships[1]
      this.idolImg = require(`@/assets/image/${this.setImg(this.idolMBTI)}.png`)
      // this.predecessorMBTI = 'ENFJ'
      this.predecessorMBTI = this.academicRelationships[2]
      this.predecessorImg = require(`@/assets/image/${this.setImg(this.predecessorMBTI)}.png`)
      // this.tutorMBTI = 'INTP'
      this.tutorMBTI = this.academicRelationships[3]
      this.tutorImg = require(`@/assets/image/${this.setImg(this.tutorMBTI)}.png`)
    },
    saveResultImg() {
      const content = this.$refs.resultPageShare;
      html2canvas(content).then(canvas => {
        const dataUrl = canvas.toDataURL();
        const link = document.createElement('a');
        const currentTime = this.currentTime()
        link.download = `棵岩阅读_${currentTime}.png`;
        link.href = dataUrl;
        link.click();
        this.showSuccess = true;
        setTimeout(() => {
          this.showSuccess = false;
        }, 1500);
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
    },
    currentTime() {
      const currentDate = new Date();
      const year = currentDate.getFullYear().toString().padStart(4, '0');
      const month = (currentDate.getMonth() + 1).toString().padStart(2, '0');
      const day = currentDate.getDate().toString().padStart(2, '0');
      const hours = currentDate.getHours().toString().padStart(2, '0');
      const minutes = currentDate.getMinutes().toString().padStart(2, '0');
      const seconds = currentDate.getSeconds().toString().padStart(2, '0');

      const formattedTime = `${year}${month}${day}${hours}${minutes}${seconds}`;
      return formattedTime;
    },
  },
}
</script>
<style scoped>
  @import 'ResultPage.css'
</style>