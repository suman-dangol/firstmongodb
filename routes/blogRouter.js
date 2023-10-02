import { Router } from "express";
import BlogController from "../controller/blogController.js";

const router = Router();
const blogController = new BlogController();

router.post("/add", blogController.addBlog);
router.get("/:id", blogController.getBlogById);
router.put("/:id", blogController.updateBlog);
router.delete("/:id", blogController.deleteBlog);

export default Router;
