<template>
  <div :class="showModal()">
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal" :class="showModal()">
        <div class="modal-heading">
          <h2 class="title">{{ note.title }}</h2>
          <img src="../../assets/img/close.png" 
            class="close-modal" 
            alt="Close the note"
            width="20" 
            height="20"
            @click="closeModal">
        </div>
        <hr>
        <p class="modal-content">{{ note.content }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: {},
    note: {}
  },
  methods: {
    showModal() {
      return this.show ? 'shown' : 'not-shown' 
    },
    closeModal() {
      this.show = false
      this.$emit('onclose', this.note)
    }
  }  
}
</script>

<style>
.modal-background{
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed; 
  z-index: 0;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}

.modal {
  display: grid;
  grid-template-columns: 100%;
  grid-template-rows: repeat(auto-fill, auto); 
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  margin: 100px 40px auto 40px;
  background-color: aqua;
}

.modal-heading > .title {
  float: left;
  margin: 10px 0 0 10px;
  word-wrap: break-word;
  max-width: 300px; 
}

.modal-heading > .close-modal {
  float: right;
  margin: 10px 10px;
}

.modal > hr {
  display: block;
  text-align: center;
  margin: 25px;
}

.modal-content {
  margin: -5px 20px 25px 20px;
  text-align: justify;
  line-height: 25px;
  font-size: 14px; 
}

.not-shown {
  opacity: 0;
  visibility: collapse;
  transition: opacity 500ms 0ms, visibility 0s 500ms;
}

.shown{
  opacity: 1;
  visibility: visible;
  transition: opacity 500ms, visibility 0s 0ms;
}
</style>
