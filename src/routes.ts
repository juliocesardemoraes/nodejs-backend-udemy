import { Router } from "express";
import { UserController } from "./modules/user/controller.js";

const userRouter = Router();

userRouter.post("/", UserController.create);

export { userRouter };
