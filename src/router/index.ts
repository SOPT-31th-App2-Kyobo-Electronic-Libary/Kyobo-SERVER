import { Router } from "express";
import userRouter from "./userRouter";
import bookRouter from "./bookRouter";

const router: Router = Router();

router.use("/user", userRouter);
router.use("/book", bookRouter);

router.use("/book",bookRouter);

export default router;
