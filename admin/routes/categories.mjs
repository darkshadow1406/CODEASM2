import { Router } from "express";
import { categories, products } from "../constants/index.mjs";

const router = Router();

router.get("/categories", (req, res) => {
  res.send(categories);
});

router.get("/categories/:id", (req, res) => {
  const id = req.params.id;
  const matchedProducts = products?.filter((item) => item?._base === id);

  if (!matchedProducts || matchedProducts.length === 0) {
    return res
      .status(404)
      .json({ message: "Không có sản phẩm phù hợp với danh mục này" });
  }
  res.json(matchedProducts);
});

export default router;
