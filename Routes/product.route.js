const express = require("express");
const {
  getAllproducts,
  getProduct,
  updatedProduct,
  deleteProduct,
  createProduct,
} = require("../Controller/products.controller");

const router = express.Router();

router.get("/", getAllproducts);
router.get("/:id", getProduct);
router.put("/:id", updatedProduct);
router.delete("/:id", deleteProduct);
router.post("/", createProduct);

module.exports = router;
