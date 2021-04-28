<template>
  <v-container v-if="post">
    <v-row>
      <v-col sm="10" class="pa-4 mx-auto">
        <v-card class="pa-2">
          <v-img :src="`/${post.image}`"></v-img>
          <v-card-actions class="pb-0">
            <v-row class="mt-1 mx-1">
              <v-col sm="2">
                <v-btn small outlined color="primary">{{
                  post.category
                }}</v-btn>
              </v-col>
              <v-col sm="10" class="d-flex justify-end">
                <v-btn
                  color="success"
                  text
                  :to="{ name: 'edit-post', params: post._id }"
                  >Edit</v-btn
                >
                <v-btn color="red" @click="deletePost(post._id)" text
                  >Delete</v-btn
                >
              </v-col>
            </v-row>
          </v-card-actions>
          <v-card-subtitle class="healine">
            <h3>{{ post.title }}</h3>
          </v-card-subtitle>
          <v-card-text class="grey-text">
            <p>{{ post.content }}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "post",
  methods: {
    ...mapActions({
      fetchPost: "fetchPost",
      fetchDelete: "fetchDelete",
    }),
    deletePost(id) {
      this.fetchDelete(id);
      this.$router.push({
        name: "home",
        params: { message: this.message },
      });
    },
  },
  computed: {
    ...mapGetters({
      post: "getPost",
      message: "getMessage",
    }),
  },
  created() {
    this.fetchPost(this.$route.params.id); //this.$route.params.id
  },
};
</script>

<style></style>
