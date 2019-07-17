<template>
  <div>
    <nav-bar></nav-bar>
    <main>
      <note-list></note-list>
    </main>
    <footer-bar></footer-bar>
  </div>
</template>

<script>
  export default {
    created() {
      document.title = "Notes - Dashboard"
    }
  }
</script>

<style scoped>
main{
  margin-top: 100px;
}

body{
  background-color: #FFFEEF;
}
</style>
