<template>
  <div id="note-modals">
    <see-note-modal :show="getModalStatus && getType === 'read'" :note="getNote"></see-note-modal>
    <edit-note-modal :show="getModalStatus && getType === 'edit' && true" :note="getNote"></edit-note-modal>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  computed: { ...mapGetters(['getModalStatus', 'getType', 'getNote']) }, 
}
</script>
<style>
  /*Modal rules*/
@import url('../../styles/modal.css');
</style>

