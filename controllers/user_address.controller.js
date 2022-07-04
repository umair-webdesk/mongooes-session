const { UserAddress } = require("../models/user_address.model");
// create controller


// create User sample
/*exports.create = async function (req, res) {
  console.log("create", req.body);
  if (!req.body.name || !req.body.price) {
    return res.status(400).send({
      message: "User name and price can not be empty",
    });
  }
  //   mongooes provide create for collections
  const user = await UserAddress.create(req.body);
  res.send(user);
};*/

// Create a user
exports.CreateUserAddress = async (req, res) => {
  try {
    let requestBody = req.body;
    if (!requestBody.address || !requestBody.city || !requestBody.zipcode) {
      return res.status(400).send({
        message: "Address, City & Zipcode are required.",
      });
    }
    // resource create
    const user = await UserAddress.create(requestBody);
    res.status(201).json({
      success: true,
      error: null,
      data: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      error: error,
      data: user,
    });
  }
};

// finds all users
exports.GetUserAddress = async (req, res) => {
  try {
    const users = await UserAddress.find().populate("userId");
    res.status(200).json({
      data: users,
      error: null,
      success: true,
      message: "Users address fetching successfully ",
    });
  } catch (error) {
    console.log(error);
  }
};

// find user by id
exports.GetUserAddressById = async (req, res) => {
    try{
      let id = req.params.id;
      const deletedResource = await UserAddress.findById({ _id: id }).populate("userId");
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

// finds one user
exports.DeleteUserAddress = async (req, res) => {
  try {
    //  /users/?id=njdjnsdns
    let id = req.params.id;
    console.log("Resource id", id);
    const deletedResource = await UserAddress.findByIdAndDelete({ _id: id });
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
exports.UpdateUserAddress = async (req, res) => {
  try{
    let id = req.params.id;
    let requestBody = req.body;
    //console.log(requestBody);
    const updateResource = await UserAddress.findByIdAndUpdate({ _id: id }, requestBody);

    UserAddress.findByIdAndUpdate({ _id: id }, requestBody, (err, docs) => {
      if (err){
          console.log(err);
      }
      else{
          res.status(201).json({
            data: docs,
            error: null,
            success: true,
            message: `user address updated successfully`,
          });
      }
  });
    
  }catch(error){
    console.log(error);
  }
};
