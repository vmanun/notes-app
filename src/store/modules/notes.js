// This logic is expected somewhere in actions
const shortenContent = content => {
  if (content.length > 100){
    let shortContent = content.substring(0, 100);
    return shortContent[99] == " "
      ? shortContent.substring(0, 99) + "..."
      : shortContent + "...";
  } else {
    return content;
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
    images: [
      'https://picsum.photos/700/500',
      'https://picsum.photos/500/700',
      'https://picsum.photos/500/800',
      'https://picsum.photos/700/800'
    ],
    dateCreated: "July 15th, 4:00PM"
  },
  {
    id: "i123jfnwww",
    title: "THE lorem ipsum, bro",
    content:
      "Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem  Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem ",
    summarizedContent: '',
    color: "yellow",
    images: [
      'https://picsum.photos/500/500',
      'https://picsum.photos/500/500'
    ],
    dateCreated: "July 15th, 4:00PM"
  },
  {
    id: "i123jfnw3w",
    title: "Title",
    content:
      "description",
    summarizedContent: '',
    color: "green",
    images: [
      'https://picsum.photos/500/500',
      'https://picsum.photos/500/500'
    ],
    dateCreated: "July 15th, 4:00PM"
  },
  {
    id: "i1235fnwww",
    title: "New note",
    content:
      "note description here. ",
    summarizedContent: '',
    color: "red",
    images: [
      'https://picsum.photos/500/500',
      'https://picsum.photos/500/500'
    ],
    dateCreated: "July 15th, 4:00PM"
  },
  {
    id: "p323jfkww",
    title: "Lorem",
    content:
      "Lorem Lorem Lorem Lorem LoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLoremLorem Lorem Lorem Lorem",
    summarizedContent: '',
    color: "pink",
    images: [
      'https://picsum.photos/500/500',
      'https://picsum.photos/500/500'
    ],
    dateCreated: "July 15th, 4:00PM"
  },
  {
    id: "3333jonwww",
    title: "Note",
    content:
      "notenotenotenote",
    summarizedContent: '',
    color: "white",
    images: [
      'https://picsum.photos/500/500',
      'https://picsum.photos/500/500'
    ],
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
  actions: {
    submitNote({ dispatch, commit }, options = { note: {}, type: 'new' }) {
      commit('saveNote', JSON.parse(JSON.stringify(options)));
      dispatch('closeModal', false, { root: true });
      // Save to databas/backend here. 
    }

  },
  mutations: {    
    saveNote(state, options) {      
      if(options.type === 'modify') {
        state.notes.forEach((stateNote, index) => {
          if(stateNote.id === options.note.id) {
            options.note.summarizedContent = shortenContent(options.note.content);
            state.notes.splice(index, 1, JSON.parse(JSON.stringify(options.note)))
          }
        })
      }
    }
  }
};
