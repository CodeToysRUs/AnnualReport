<template>
  <div class="notes-detail">
    <div class="notes-detail-top">
      <div class="notes-detail-top-left">
        <img src="../../assets/icon/userIcon.png" alt="">
      </div>
      <div class="notes-detail-top-right">
        学术和你是真正的双向奔赴<br>泼天的学术好运迟早降临到你身上
      </div>
    </div>
    <div v-if="onRecord" class="notes-detail-msg">
      <div class="notes-detail-msg-record-text">
        今年，<br>
        你在<span>243</span>篇笔记中，<br>
        一共记录了<span>10,324</span>条笔记<br>
      </div>
    </div>
    <div v-else class="notes-detail-msg">
      <div class="notes-detail-msg-text">
        今年,<br>
        你好像还没有决定记录的内容呢~<br>
        你的每一个想法都值得留下痕迹，<br>
        新的一年用笔记来储蓄热爱吧~<br>
      </div>
    </div>
    <div class="notes-detail-img">
      <img src="../../assets/image/mindsetN.png" alt="">
    </div>
    <div class="notes-detail-middle">
      为了让你记得更丝滑，2024年棵岩阅读<br>
      为你开发了
    </div>
    <div class="notes-detail-bottom-img">
      <img src="../../assets/image/notesDetail1.png" alt="">
      <img src="../../assets/image/notesDetail1.png" alt="">
      <img src="../../assets/image/notesDetail1.png" alt="">
    </div>
  </div>
</template>
<script>
export default {
  name: 'NotesDetail',
  data() {
    return {
      onRecord: true, // 有记录用户
    }
  },
}
</script>
<style scoped>
@import 'NotesDetail.css'
</style>