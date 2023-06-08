const router = require('express').Router();
const {
  createUser,
  getUserById,
  updateUserById,
  deleteUserById,
  getUsers,

} = require('../../controllers/userController');

router.route('/signup').post(createUser);
router.route('/:id').get(getUserById);
router.route('/').get(getUsers);

module.exports = router;