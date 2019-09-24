<template>
  <div :class="`${showModal}`">
      <div class="modal-background" @click="closeModal(false)"></div>
      <div class="modal" :class="`${this.note.color}`">
        <div class="modal-heading">
          <h1 class="title">{{ note.title }}</h1>
          <img src="../../assets/img/close.png" 
            class="close-modal" 
            alt="Close the note"
            width="20" 
            height="20"
            @click="closeModal(false)">
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
          <img src="../../assets/img/edit.png" 
            alt="Edit this note" 
            height="25" 
            class="modal-edit"
            @click="closeModal({type: 'edit', note})"> 
        </div>      
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  props: {
    show: Boolean,
    note: Object
  },
  computed: {
    showModal() {
      return typeof this.show === 'boolean' && this.show ? 'shown' : 'not-shown' 
    }
  },
  methods: { ...mapActions(['closeModal']) },
}
</script>

<style>
</style>
