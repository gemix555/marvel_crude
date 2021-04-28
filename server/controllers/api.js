const Post = require("../models/Post");
const fs = require("fs");

class Api {
  async fetchAllPost(req, res) {
    try {
      const posts = await Post.find();
      console.log("Controller_All", posts);
      res.status(200).json(posts);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async fetchPostByID(req, res) {
    try {
      const id = req.params.id;
      const post = await Post.findById(id);
      res.status(200).json(post);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async createPost(req, res) {
    try {
      const post = req.body;
      const imagename = req.file.filename;
      post.image = imagename;
      await Post.create(post);
      res.status(201).json({ message: "Post Created successfully!!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async updatePost(req, res) {
    try {
      const id = req.params.id;
      const { image } = await Post.findById(id);

      const old_image = image;
      let new_image = "";
      if (req.file) {
        new_image = req.file.filename;

        if (old_image) {
          fs.unlinkSync(`./uploads/${old_image}`);
        }
      } else {
        new_image = old_image;
      }
      console.log("New_FILE", new_image);

      const newPost = req.body;

      newPost.image = new_image;

      await Post.findByIdAndUpdate(id, newPost, { new: true });

      res.status(200).json({ message: "Post Update Successfully!" });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
  async deletePost(req, res) {
    try {
      const id = req.params.id;
      const { image, title } = await Post.findById(id);
      if (image) {
        fs.unlinkSync(`./uploads/${image}`);
      }

      await Post.findByIdAndDelete(id);
      res.status(200).json({ message: `Post Delete ${title} Successfully!` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
}

module.exports = new Api();
