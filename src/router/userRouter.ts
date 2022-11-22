import { Router } from "express";
import { userController } from "../controller";

const router: Router = Router();
router.get("/:userId/lending", userController.getUserLending)
export default router;
