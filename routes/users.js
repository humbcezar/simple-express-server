const express = require('express');
const router = express.Router();
const UserModel = require("../app/Models/User");
const UsersService = require("../app/Services/Users");
const UsersControllerFactory = require("../app/Controllers/UsersController");
const UsersController = UsersControllerFactory(
    UsersService.Creator(UserModel),
    UsersService.Retrieval(UserModel)
);

/* GET users listing. */
router.get('/:userName', UsersController.show);
router.post('/', UsersController.store);

module.exports = router;
