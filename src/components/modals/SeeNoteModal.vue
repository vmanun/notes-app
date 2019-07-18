<template>
  <div :class="showModal">
      <div class="modal-background" @click="closeModal"></div>
      <div class="modal" :class="showModal">
        <div class="modal-heading">
          <h1 class="title">{{ note.title }}</h1>
          <img src="../../assets/img/close.png" 
            class="close-modal" 
            alt="Close the note"
            width="20" 
            height="20"
            @click="closeModal">
        </div>
        <hr>
        <h2 class="title">Content</h2>
        <p class="modal-content">{{ note.content }}</p>
        <h2 class="title">Attached Images</h2>
        <ul class="modal-images-cont">
          <li v-for="(image, index) in note.images" :key="index">
            <a :href="image" target="_blank" rel="noopener noreferrer" class="modal-images">
              <img :src="image" alt="Attached image - click to see" class="modal-image">
              <!-- Temporal way of getting the img's filename -->
              <i>{{ image.substr(image.lastIndexOf("/") + 1) }}</i>
            </a>
          </li>
        </ul>
        <div class="modal-foot">
          <div class="dates">
            <p>{{ note.dateCreated }}</p>
          </div>
          <img src="../../assets/img/edit.png" alt="Edit this note" height="25" class="modal-edit"> 
        </div>      
    </div>
  </div>
</template>

<script>
export default {
  props: {
    show: Boolean,
    note: Object
  },
  computed: {
    showModal: function() {
      return typeof this.show === 'boolean' && this.show ? `shown ${this.note.color}` : 'not-shown' 
    }
  },
  methods: {
    closeModal() {
      this.$emit('onclose', this.note)
    },
  }
}
</script>

<style>
/*Note setup*/
@import url('../../styles/NoteGeneral.css');

/*Modal rules*/
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  margin: 90px auto auto auto;
  background-color: aqua;
  max-width: 570px;
  max-height: 85%;
}

.modal-heading > .title {
  float: left;
  margin: inherit 0 0 inherit;
  word-wrap: break-word;
  max-width: 70%;
  min-width: 100px; 
  margin-right: 0;
}

.modal-heading > .close-modal {
  float: right;
  margin: 10px 10px;
}

.modal > hr {
  margin: 15px inherit 25px inherit;
}

.modal-content {
  margin: -5px 20px 25px 20px;
  text-align: justify;
  line-height: 25px;
  font-size: 17px; 
  min-height: 100px;
  max-height: 150px;
  overflow-y: auto;
}

.modal-foot { 
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
}

.modal-foot > .dates{ 
  margin-right: 30px
}

.modal-edit {
  padding: 8px;
  border-radius: 100%;
  transition: background-color 200ms;
  cursor: pointer;
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
