import { Request, Response } from "express";
import message from "../module/responseMessage";
import statusCode from "../module/statusCode";
import util from "../module/util";
import { userService } from "../service";

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
    const lendingBook

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
