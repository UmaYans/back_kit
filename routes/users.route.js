const { Router } = require("express");
const { usersController } = require("../controllers/users.controllers");
const authMiddlewares = require("../controllers/middlewares/auth.middlewares");
const fileMiddleware = require("../controllers/middlewares/file.middlewares");
const router = Router();

router.post("/users", usersController.registerUser);
router.post("/login", usersController.login);
router.get("/user", authMiddlewares, usersController.getUserById);
router.get("/allUsers", usersController.getUsers);
router.patch(
  "/avatar",
  authMiddlewares,
  fileMiddleware.single("avatar"),
  usersController.pathAvatar
);
router.patch("/addMoney", authMiddlewares, usersController.addMoney);
// router.post("/users", usersController.registerUser);
// router.post("/login", usersController.login);
// router.get("/user", authMiddlewares, usersController.getUserById);
// для вывода профиля пользователя по айди из токена 🔼

module.exports = router;
