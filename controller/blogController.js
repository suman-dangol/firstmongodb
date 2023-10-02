import blogModel from "../models/blogModel.js";

export default class blogController {
  async addBlog(req, res) {
    try {
      const response = await blogModel.create({
        title: "blog title 2",
        description: "blog description 2 ",
      });

      res.json(response);
    } catch (err) {
      res.json({ sucess: false, message: err.message });
    }
  }

  async getBlogById(req, res) {
    try {
      const { id } = req.params;
      // console.log(id);
      const response = await blogModel.findById(id);

      res.json(response);
    } catch (err) {
      res.json({ sucess: false, message: err.message });
    }
  }

  async updateBlog(req, res) {
    try {
      const { id } = req.params;
      // console.log(id);
      const response = await blogModel.findById(id);

      res.json(response);
    } catch (err) {
      res.json({ sucess: false, message: err.message });
    }
  }

  async deleteBlog(req, res) {
    try {
      const { id } = req.params;
      const response = await blogModel.deleteOne({ _id: id });
      res.json(response);
    } catch (err) {
      res.json({ succss: false, message: err.message });
    }
  }
}
