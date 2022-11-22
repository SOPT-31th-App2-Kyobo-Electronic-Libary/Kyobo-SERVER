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
  const { userId, returnDate }=req.body;

  if(!bookId || !userId || !returnDate){
    return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,message.NULL_VALUE));
  }

  try{
      //일단 유저와 책은 무조건 존재할 수 밖에 없음
    const createdBookLending = await bookService.createBookLending(Number(userId), Number(bookId),returnDate);

    if(!createdBookLending){
      return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST,message.ALREADY_LENDING_BOOK));

    }
    return res.status(statusCode.OK).send(util.success(statusCode.CREATED,message.LENDING_BOOK_SUCCESS,createdBookLending));

  }
  catch(error){
    console.log(error);
    return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR,message.INTERNAL_SERVER_ERROR))
    
  }
  
}


const bookController = {
  getBookById,
  createBookLending
};

export default bookController;
