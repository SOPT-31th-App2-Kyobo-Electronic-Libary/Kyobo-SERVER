import { newBook, categoryBook } from './../interface/user/userMainPageResponseDto';
import { lendingBook } from './../interface/user/userLendingResponseDto';
import { userLendingResponseDto } from './../interface/user/userLendingResponseDto';
import { userMainPageResponseDto } from '../interface/user/userMainPageResponseDto';
import { Request, Response } from "express";
import message from "../module/responseMessage";
import statusCode from "../module/statusCode";
import util from "../module/util";
import { bookService, userService } from "../service";

const getUserLending = async(req: Request,res: Response) => {
    const { userId } = req.params;
    try {
        const data = await userService.getUserLending(Number(userId));
        if (data=='no_user') return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.NO_USER));
        return res.status(statusCode.OK).send(util.success(statusCode.OK, message.GET_LENDING_SUCCESS , data)); 
    }catch(error){
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
}

const getMainPageData = async(req : Request, res : Response)=>{
  const { userId } = req.params;

  try{
    const lendingData = await userService.getUserLending(Number(userId));
    const bestData = await bookService.getBestBook();
    const newData = await bookService.getNewBook();
    const categoryData = await bookService.getCategoryBook("경영");
    
    if (lendingData=='no_user') return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.NO_USER));
    if (!bestData || !newData || categoryData==message.NOT_FOUND) return res.status(statusCode.BAD_REQUEST).send(util.fail(statusCode.BAD_REQUEST, message.NOT_FOUND));

    
    const lendingBook : lendingBook[] = (lendingData as userLendingResponseDto).books;

    const mainPageData : userMainPageResponseDto = {
      lendingBook : lendingBook,
      bestBook : bestData,
      newBook : newData,
      categoryBook : (categoryData as categoryBook[])
    }

    return res.status(statusCode.OK).send(util.success(statusCode.OK,message.GET_MAIN_PAGE_DATA_SUCCESS,mainPageData));
  }
  catch(error){
    console.log(error);
    return res.status(statusCode.INTERNAL_SERVER_ERROR).send(util.fail(statusCode.INTERNAL_SERVER_ERROR,message.INTERNAL_SERVER_ERROR));
    
    
  }

}

const userController = {
  getUserLending,
  getMainPageData
};

export default userController;
