<template>
  <div class="note-container">
    <div v-for="note in notes" :key="note.id" class="note" :class="note.color">
      <h1>{{ note.title }}</h1>
      <hr>
      <p>{{ note.content }}</p>
      <div class="dates">
        <p>{{ note.dateCreated }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
  data() {
    return {
      notes: [
        {
          id: 'i123jfnejk',
          title: '¿Qué es Lorem Ipsum?',
          content: 'Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de...',
          color: 'aqua',
          images: null,
          dateCreated: 'July 15th, 4:00PM'
        }
      ]
    }
  }
}
</script>

<style scoped>
/*display flex setup*/
.note-container, .dates {
  -webkit-display: flex;
  -moz-display: flex;
  -ms-display: flex;
  display: flex;
}

/*notes container and note elements*/
.note-container {
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
}

.note>p{
    font-size: 17px;
}

.note>hr{
    height: 3px;
    border: none;
    border-radius: 5px;
    margin-top: -15px;
}

.note>h1,
.note>hr {
  margin: 10px;
}

.note>p{
  margin: 20px;
}

.dates {
    border-radius: 7px;
    padding: 0;
    -webkit-justify-content: center;
    -moz-justify-content: center;
    -ms-justify-content: center;
    justify-content: center;
    margin: 0 86px 0 86px;
}

.dates>p{
  margin: 2px 0 2px 0;
}

/*color setup*/
.aqua {
  background-color: aqua;
}

.aqua>.dates, 
.aqua>hr {
    background-color: rgb(50, 192, 192);
    color: #194545;
}
</style>
