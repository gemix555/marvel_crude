import Api from "@/api/api.js";

const state = {
  post: null,
  posts: [],
  error: null,
  message: null,
};

const getters = {
  getPost(state) {
    return state.post;
  },
  getPosts(state) {
    return state.posts;
  },
  getError(state) {
    return state.error;
  },
  getMessage(state) {
    return state.message;
  },
};

const mutations = {
  setStart(state) {
    state.message = null;
    state.error = null;
  },
  setPost(state, post) {
    state.post = post;
  },
  setPosts(state, posts) {
    state.posts = posts;
  },
  setPostError(state, error) {
    state.error = error;
  },
  setPostMessage(state, message) {
    state.message = message;
  },
};

const actions = {
  async fetchPost({ commit }, id) {
    try {
      commit("setStart");
      const post = await Api.getPostByID(id);
      commit("setPost", post);
    } catch (error) {
      commit("setPostError", error);
    }
  },
  async fetchAllPost({ commit }) {
    try {
      commit("setStart");
      const posts = await Api.getAllPost();
      console.log("STORE_fetchALLPost");
      commit("setPosts", posts);
    } catch (error) {
      commit("setPostError", error);
    }
  },
  async fetchAdd({ commit }, data) {
    try {
      commit("setStart");
      const post = await Api.addPost(data);
      commit("setPostMessage", post.message);
    } catch (error) {
      commit("setPostError", error);
    }
  },
  async fetchUpdate({ commit }, data) {
    try {
      commit("setStart");
      const id = state.post._id;
      const post = await Api.updatePost(id, data);
      commit("setPostMessage", post.message);
    } catch (error) {
      commit("setPostError", error);
    }
  },
  async fetchDelete({ commit }, id) {
    try {
      commit("setStart");
      const post = await Api.deletePost(id);
      commit("setPostMessage", post.message);
    } catch (error) {
      commit("setPostError", error);
    }
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
