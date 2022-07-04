const express = require("express");
const router = express.Router();

const {
  test,
  createProduct,
  GetProducts,
  DeleteProduct,
  UpdateProduct,
  UpdateProductById
} = require("./controllers/product.controller");

const {
  CreateUser,
  GetUser,
  DeleteUser,
  UpdateUser,
  GetUserById
} = require("./controllers/user.controller");

// user address
const {
  CreateUserAddress,
  GetUserAddress,
  DeleteUserAddress,
  UpdateUserAddress,
  GetUserAddressById
} = require("./controllers/user_address.controller");

// add route to get all routes
router.post("/", test);
// product add
router.get("/products", GetProducts);
router.post("/products", createProduct);
router.delete("/products/:id", DeleteProduct);
router.put("/products/:id", UpdateProduct);
router.get("/products/:id", UpdateProductById);

// User Module
router.get("/users", GetUser);
router.post("/users", CreateUser);
router.delete("/users/:id", DeleteUser);
router.put("/users/:id", UpdateUser);
router.get("/users/:id", GetUserById);

// User Address Module
router.get("/address", GetUserAddress);
router.post("/address", CreateUserAddress);
router.delete("/address/:id", DeleteUserAddress);
router.put("/address/:id", UpdateUserAddress);
router.get("/address/:id", GetUserAddressById);

module.exports = router;
