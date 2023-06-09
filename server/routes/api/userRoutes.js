const router = require('express').Router();
const {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
  getUsers,
  loginUser,

} = require('../../controllers/userController');

router.route('/signup').post(createUser);
router.route('/login').post(loginUser);
router.route('/:id').get(getUserById);
router.route('/').get(getUsers);

module.exports = router;