<template>
  <div>
    <div class="note-container">
      <div v-for="note in getNotes" 
      :key="note.id" 
      class="note" 
      :class="note.color"
      @click="openNote(note)">
        <h1>{{ note.title }}</h1>
        <hr>
        <p>{{ note.summarizedContent }}</p>
        <div class="dates">
          <p>{{ note.dateCreated }}</p>
        </div>
      </div>
    </div>
    <note-modals></note-modals>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
  methods: {
    ...mapMutations(['openModal']),
    openNote(note) {
      this.openModal({ type: 'read', note })
    },
  },
  computed: mapGetters(['getNotes']),
};
</script>

<style>
</style>
