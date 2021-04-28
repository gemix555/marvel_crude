<template>
  <v-container v-if="getPosts">
    <v-alert
      border="left"
      close-text="Close Alert"
      color="red accent-4"
      dark
      dismissible
      v-if="error"
      >{{ error }}
    </v-alert>
    <v-alert
      border="left"
      close-text="Close Alert"
      color="green accent-4"
      dark
      dismissible
      v-if="message"
      >{{ message }}
    </v-alert>
    <v-row no-gutters>
      <v-col sm="4" class="pa-3" v-for="post in getPosts" :key="post._id">
        <v-card class="pa-1" :to="{ name: 'post', params: { id: post._id } }">
          <v-img v-if="post.image" heigth="250" :src="`/${post.image}`"></v-img>
          <v-btn class="m1-4 mt-3" small outlined color="indigo">
            {{ post.category }}
          </v-btn>
          <v-card-title class="headline">
            {{ post.title }}
          </v-card-title>
          <v-card-text class="py-0">
            <p>{{ `${post.content.substring(0, 100)}...` }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "home",
  components: {},
  data() {
    return {};
  },
  methods: {
    ...mapActions({
      fetchAllPost: "fetchAllPost",
    }),
  },
  computed: {
    ...mapGetters({
      getPosts: "getPosts",
      error: "getError",
      message: "getMessage",
    }),
  },
  created() {
    console.log("Home_Created");
    this.fetchAllPost();
  },
};
</script>
