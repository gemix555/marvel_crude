<template>
  <v-container v-if="post">
    <v-row no-gutters>
      <v-col sm="10" class="mx-auto">
        <v-card class="pa-5">
          <v-card-title>Edit Post</v-card-title>
          <v-divider></v-divider>
          <v-form
            @submit.prevent="updateForm"
            ref="form"
            class="pa-5"
            enctype="multipart/form-data"
          >
            <v-text-field
              v-model="post.title"
              label="Title"
              prepend-icon="mdo-note"
              :rules="rules"
            >
            </v-text-field>
            <v-text-field
              v-model="post.category"
              label="Category"
              prepend-icon="mdi-view-list"
              :rules="rules"
            >
            </v-text-field>
            <v-textarea
              label="Content"
              prepend-icon="mdi-note-plus"
              :rules="rules"
              v-model="post.content"
            ></v-textarea>
            <v-file-input
              @change="selectFile"
              show-size
              counter
              multiple
              label="Select Image"
            ></v-file-input>
            <v-img :src="`/${post.image}`" width="120px"></v-img>
            <v-btn type="submit" class="mt-3" color="primary"
              >Update Post
            </v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "add-post",
  data() {
    return {
      rules: [(value) => !!value || "This field is required!!"],
      post: {
        title: "",
        category: "",
        content: "",
        image: "",
      },
      image: "",
    };
  },
  computed: {
    ...mapGetters({
      getPost: "getPost",
      getMessage: "getMessage",
    }),
    postItem() {
      const post = this.getPost;
      return post;
    },
  },
  methods: {
    ...mapActions({
      fetchUpdate: "fetchUpdate",
      fetchPost: "fetchPost",
    }),
    selectFile(file) {
      this.image = file[0];
    },
    async updateForm() {
      const formData = new FormData();
      formData.append("title", this.post.title);
      formData.append("category", this.post.category);
      formData.append("content", this.post.content);
      formData.append("image", this.image);
      if (this.$refs.form.validate()) {
        console.log("UPDATE.Vue_FROM_DATA", formData); //this.$route.params.id,
        this.fetchUpdate(formData);
        this.$router.push({
          name: "home",
        });
      }
    },
  },
  mounted() {
    this.fetchPost(this.$route.params.id);
    this.post = this.postItem;
  },
};
</script>

<style></style>
