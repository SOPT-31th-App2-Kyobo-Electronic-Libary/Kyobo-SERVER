
import { Router } from "express";
import bookController from "../controller/bookController";

const router: Router = Router();

router.get("/:bookId", bookController.getBookById);

router.post("/:bookId/lending", bookController.createBookLending);

export default router;
