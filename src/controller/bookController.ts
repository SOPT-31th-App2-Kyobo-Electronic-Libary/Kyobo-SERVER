import { Request, Response } from 'express';
import { bookService } from '../service';
import statusCode from '../module/statusCode';
import util from '../module/util';
import message from '../module/responseMessage';

const getBookById = async (req: Request, res: Response) => {
  const { bookId } = req.params;

  try {
    const data = await bookService.getBookById(Number(bookId));
    if (!data) {
      return res
        .status(statusCode.BAD_REQUEST)
        .send(util.fail(statusCode.BAD_REQUEST, message.NOT_FOUND_BOOK));
    }
    return res
      .status(statusCode.OK)
      .send(util.success(statusCode.OK, message.GET_BOOK_SUCCESS, data));
  } catch (error) {
    console.log(error);
    return res
      .status(statusCode.INTERNAL_SERVER_ERROR)
      .send(
        util.fail(
          statusCode.INTERNAL_SERVER_ERROR,
          message.INTERNAL_SERVER_ERROR
        )
      );
  }
};


const createBookLending = async (req : Request, res : Response)=>{
  const { bookId } = req.params;
  const { userId }=req.body;

  const createdBookLending = await bookService.createBookLending(Number(userId), Number(bookId));

}


const bookController = {
  getBookById,
  createBookLending
};

export default bookController;
