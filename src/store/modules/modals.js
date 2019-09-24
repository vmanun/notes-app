export default {
  state: {
    isOpen: false,
    type: "",
    note: {}
  },
  getters: {
    getModalStatus: state => state.isOpen,
    getType: state => state.type,
    getNote: state => state.note
  },
  mutations: {
    openModal(state, options = { type: "read", note: {} }) {
      state.isOpen = true;
      state.type = options.type;
      state.note = options.note;
    },
    closeModal(state) {
      state.isOpen = false;
      state.type = "";
    },
    deleteModalNote: (state) => { state.note = {}; }
  },
  actions: {
    closeModal({ commit }, options = { type: "", note: {} }) {
      if (options) {
        commit("closeModal");
        setTimeout(() => {
          commit("openModal", options);
        }, 200);
      } else {
        commit("closeModal");
        setTimeout(() => { commit('deleteModalNote'); }, 600);
      }
    }
  }
};
