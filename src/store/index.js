import Vue from "vue";
import Vuex from "vuex";
import posts from "@/store/modules/posts.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { posts },
});
