import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    res.send({ success: true, data: postMessage });
  } catch (err) {
    res.send({ success: false, message: err?.message });
  }
};

export const createPosts = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await newPost.save();
    res.send({ success: true, data: newPost });
  } catch (err) {
    res.send({ success: false, message: err?.message });
  }
};
