import { createStore } from "vuex";
import { HTTP } from "@/helper/Http";

export default createStore({
  state: {
    users: [],
    isLoading: false,
  },
  mutations: {
    setUsers(state, payload) {
      state.users = payload;
    },
    setLoading(state, payload) {
      state.isLoading = payload;
    },
    removeUsers(state, payload) {
      state.users.splice(
        state.users.findIndex((user) => user.id === payload),
        1
      );
    },
  },
  actions: {
    async getUsers({ state, commit }) {
      if (state.users.length) return;
      try {
        const users = (await HTTP.get("/users")).data;
        commit("setUsers", users);
      } catch (err) {
        console.log(err);
      }
    },
  },
});
