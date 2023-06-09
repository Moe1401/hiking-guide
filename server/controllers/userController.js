const { User, Hike } = require('../models');

// Create new user
const createUser = async (req, res) => {
  console.log(req.body)
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const userData = await User.findOne({ where: { email: req.body.email } });
    if (!userData) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    const validPassword = await userData.checkPassword(req.body.password);
    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  } catch (err) {
    res.status(400).json(err);
  }
}

// Get User by User ID
const getUserById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id)
      .populate('hikes')
      // .aggregate([
        // { "$unwind": "$hikes" },
        // { "$group": {
        //   "_id": "$hikes._id",
        //   "total": { "$sum": "$hikes.distance" }
        // }}
      //   { "$addFields": {
      //     "total_distance": {
      //         "$sum": "$hikes.distance"
      //     }
      // } },
      // ]);
    if (user) {
      res.json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Get all Users
function getUsers(req, res) {
  console.log("you are here");
  User.find()
    .then((user) => res.json(user))
    .catch((err) => res.status(500).json(err));
}

// Update User ID
const updateUserById = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (updatedUser) {
      res.json(updatedUser);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Delete User ID
const deleteUserById = async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);
    if (deletedUser) {
      res.json({ message: 'User deleted successfully' });
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
  getUsers,
  loginUser,
};