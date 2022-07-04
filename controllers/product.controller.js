const { Product } = require("../models/product.model");
// create controller

exports.test = function (req, res) {
  console.log("test", req);
  res.send("Hello World");
};
// create products

exports.create = async function (req, res) {
  console.log("create", req.body);
  if (!req.body.name || !req.body.price) {
    return res.status(400).send({
      message: "Product name and price can not be empty",
    });
  }
  //   mongooes provide create for collections
  const product = await Product.create(req.body);
  res.send(product);
};

exports.createProduct = async (req, res) => {
  try {
    let requestBody = req.body;
    // resource create
    const product = await Product.create(requestBody);

    res.status(201).json({
      success: true,
      error: null,
      data: product,
    });
  } catch (error) {
    console.log(error);
    // res.status(500).json({
    //   success: false,
    //   error: error,
    //   data: product,
    // });
  }
};

// finds all products
exports.GetProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("userId");
    res.status(200).json({
      data: products,
      error: null,
      success: true,
      message: "products fetching successfully ",
    });
  } catch (error) {}
};

// find product by id
exports.UpdateProductById = async (req, res) => {
    try{
      let id = req.params.id;
      const deletedResource = await Product.findById({ _id: id }).populate("userId");
      res.status(200).json({
        data: deletedResource,
        error: null,
        success: true,
        message: `Users address fetching successfully`,
      });
    }catch(error){
      console.log(error);
    }
};

// finds one product
exports.DeleteProduct = async (req, res) => {
  try {
    //  /products/?id=njdjnsdns
    let id = req.params.id;
    console.log("Resource id", id);
    const deletedResource = await Product.findByIdAndDelete({ _id: id });
    res.status(200).json({
      data: deletedResource,
      error: null,
      success: true,
      message: `${deletedResource.name} delete successfully`,
    });
  } catch (error) {
    console.log(error);
  }
};

// Todo make update apis
exports.UpdateProduct = async (req, res) => {
  try{
    let id = req.params.id;
    let requestBody = req.body;
    const updateResource = await Product.findByIdAndUpdate({ _id: id }, requestBody);

    Product.findByIdAndUpdate({ _id: id }, requestBody, (err, docs) => {
      if (err){
          console.log(err)
      }
      else{
          res.status(201).json({
            data: docs,
            error: null,
            success: true,
            message: `product updated successfully`,
          });
      }
  });
    
  }catch(error){
    console.log(error);
  }
};
