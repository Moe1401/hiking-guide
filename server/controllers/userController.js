const User = require('../models/User.js');

module.exports = {
  // getUsers(req, res) {
  //   User.find()
  //     .then(async (users) => {
  //       const userObj = {
  //         users,
  //       };
  //       return res.json(userObj);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       return res.status(500).json(err);
  //     });
  // },
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.userId })
      .select('-__v')
      .populate('hikes')
      .populate('friends')
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({
              user,
            })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // createUser(req, res) {
  //   User.create(req.body)
  //     .then((user) => res.json(user))
  //     .catch((err) => res.status(500).json(err));
  // },
  // updateUser(req, res) {
  //   User.findOneAndUpdate(
  //     { _id: req.params.userId },
  //     { $set: req.body },
  //     { runValidators: true, new: true }
  //   )
  //     .then((user) =>
  //       !user
  //         ? res.status(404).json({ message: 'No users found with those IDs :(' })
  //         : res.json(user)
  //     )
  // },
  // async deleteUser(req, res) {
  //   try {
  //     const user = await User.findOneAndRemove({ _id: req.params.userId })
  //     if(!user) {
  //       res.status(404).json({ message: 'No user with that ID' })
  //     } else {
  //       await Thought.deleteMany({ _id: { $in: user.thoughts} })
  //       res.json({ message: 'User successfully deleted' })
  //     }
  //   } catch(err) {
  //     res.status(500).json(err);
  //   }
  // },
};
