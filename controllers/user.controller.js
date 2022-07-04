const { User } = require("../models/user.model");
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
  const user = await User.create(req.body);
  res.send(user);
};
*/
// Create a user
exports.CreateUser = async (req, res) => {
  try {
    let requestBody = req.body;
    if (!requestBody.name || !requestBody.email) {
      return res.status(400).send({
        message: "User name and Email can not be empty",
      });
    }
    // resource create
    const user = await User.create(requestBody);
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
exports.GetUser = async (req, res) => {
  try {
    const users = await User.find().populate(['address','product']);
    res.status(200).json({
      data: users,
      error: null,
      success: true,
      message: "Users fetching successfully ",
    });
  } catch (error) {
    console.log(error);
  }
};

// find user by id
exports.GetUserById = async (req, res) => {
    try{
      let id = req.params.id;
      const deletedResource = await User.findById({ _id: id }).populate(['address','product']);
      res.status(200).json({
        data: deletedResource,
        error: null,
        success: true,
        message: `Users fetching successfully`,
      });
    }catch(error){
      console.log(error);
    }
};

// finds one user
exports.DeleteUser = async (req, res) => {
  try {
    //  /users/?id=njdjnsdns
    let id = req.params.id;
    console.log("Resource id", id);
    const deletedResource = await User.findByIdAndDelete({ _id: id });
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
exports.UpdateUser = async (req, res) => {
  try{
    let id = req.params.id;
    let requestBody = req.body;

    const updateResource = await User.findByIdAndUpdate({ _id: id }, requestBody);

    User.findByIdAndUpdate({ _id: id }, requestBody, (err, docs) => {
      if (err){
          console.log(err)
      }
      else{
          res.status(201).json({
            data: docs,
            error: null,
            success: true,
            message: `user updated successfully`,
          });
      }
  });
    
  }catch(error){
    console.log(error);
  }
};
