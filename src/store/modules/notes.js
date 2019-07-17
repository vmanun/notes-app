// This logic is expected somewhere in actions
const shortenContent = content => {
  
  if (content.length> 100){
    let shortContent = content.substring(0, 100);
    return shortContent[99] == " "
      ? shortContent.substring(0, 99) + "..."
      : shortContent + "...";
  }
}

let notes = [
  {
    id: "i123jfnejk",
    title: "¿Qué es Lorem Ipsum?",
    content:
      "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar del mundo de la tipografía, incluso en la web. Lorem Lorem Lorem Lorem Lorem",
    summarizedContent: '',
    color: "aqua",
    images: null,
    dateCreated: "July 15th, 4:00PM"
  },
  {
    id: "i123jfnwww",
    title: "THE lorem ipsum, bro",
    content:
      "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ",
    summarizedContent: '',
    color: "aqua",
    images: null,
    dateCreated: "July 15th, 4:00PM"
  }
]

notes.forEach(note => { note.summarizedContent = shortenContent(note.content) })

// Export to the store
export default {
  state: {
    notes
  },
  getters: {
    getNotes: state => state.notes
  },
  actions: {},
  mutations: {}
};
