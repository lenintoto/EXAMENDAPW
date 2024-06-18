import Router from "express";
import { loginUserController, registerUserController } from "../controllers/user_controller.js";

const router = Router()

router.post('/user/register', registerUserController)

router.post('/user/login', loginUserController)


export default router