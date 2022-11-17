import { Router } from "express";
import { bookController } from "../controller";

const router: Router = Router();

router.get("/:bookId", bookController.getBookById);

export default router;
