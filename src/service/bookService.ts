import { convertDateForm } from './../module/convertDateForm';
import { PrismaClient } from "@prisma/client";
import { bookResponseDto } from "../interface/book/bookResponseDto";
import { util } from "../module/util";
import { convertDateForm } from "../module/convertDateForm";
import { enVariable } from "../module/enVariable";
import { hasUncaughtExceptionCaptureCallback } from 'process';

import { convertDateForm } from "../module/convertDateForm";
const prisma = new PrismaClient();


const getBookById = async(bookId: number): Promise<bookResponseDto|null> => {
    try {
        const book = await prisma.book.findUnique({
            where: {
                id: bookId
            },
        });

        if (!book) return null;
        
        const pubDate = new Date(book.pub_date)
        const now = new Date();
        const returnDate = new Date(now.setDate(now.getDate() + 14));
    
        const bookInfo = {
            id: book.id,
            name: book.name,
            author: book.author,
            image: book.image,
            publisher: book.publisher,
            description: book.description,
            pubDate: convertDateForm(pubDate),
            returnDate: convertDateForm(returnDate)
        };
        const data: bookResponseDto = {
            book: bookInfo,
            userId: 1
        }
        return data

    } catch(error) {
        console.log(error);
        throw error;
    }
}

const createBookLending = async ( userId : number, bookId : number, returnDate : String) : Promise<util> => {
    //promise 자체에서 .catche로 잡을 수도 있지만 아예 겉을 try-catch 문으로 에러처리가능
    const now : Date = new Date();

    const leadingData : string = convertDateForm(now); //빌린날짜 : 현재 날짜
    
    now.setDate(now.getDate()+enVariable.LENDINGPERIOD); 

    const returnData : string = convertDateForm(now); //반환날짜 : 현재 날짜 + 대출기간

    try{
        const lending = await prisma.lending.create({
            data : {
                user_id : userId,
                book_id : bookId,
                lending_date : leadingData,
                return_date : returnData
            },
        });
        if(!lending) return null
        return 


    }
    catch(error){
        console.log(error);
        throw error;
    }

    

}


const bookService = {
    getBookById,
    createBookLending
}

export default bookService;