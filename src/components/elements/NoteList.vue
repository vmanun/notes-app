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
    <see-note-modal :show="noteIsOpened" :note="noteOpened" @onclose="openNote"></see-note-modal>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return{
      noteIsOpened: false,
      noteOpened: {}
    }
  },
  methods: {
    openNote(note) {
      this.noteIsOpened = !this.noteIsOpened
      this.noteOpened = note 
    }
  },
  computed: mapGetters(['getNotes']),
};
</script>


<style>
/*Note setup*/
@import url('../../styles/NoteGeneral.css');

/*notes container and note elements*/
.note-container {
  -webkit-display: flex;
  -moz-display: flex;
  -ms-display: flex;
  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  -webkit-flex-wrap: wrap;
  -moz-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  -webkit-justify-content: space-around;
  -moz-justify-content: space-around;
  -ms-justify-content: space-around;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: 35px;
}

.note {
  -webkit-box-shadow: 5px 5px 15px #666, -5px -5px 15px #666;
  -moz-box-shadow: 5px 5px 15px #666, -5px -5px 15px #666;
  box-shadow: 5px 5px 15px #666, -5px -5px 15px #666;
  height: 265px;
  max-width: 300px;
  margin: 10px;
  -webkit-flex-basis: 300px;
  -moz-flex-basis: 300px;
  -ms-flex-basis: 300px;
  flex-basis: 300px;
  -webkit-flex-grow: 2;
  -moz-flex-grow: 2;
  -ms-flex-grow: 2;
  flex-grow: 2;
  cursor: pointer;
}
</style>
