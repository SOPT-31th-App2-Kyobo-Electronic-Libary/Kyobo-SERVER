import { PrismaClient } from "@prisma/client";
import { bookResponseDto } from "../interface/book/bookResponseDto";
import { util } from "../module/util";

const prisma = new PrismaClient();


const getBookById = async(bookId: Number): Promise<bookResponseDto|null> => {
    try {
        const book = await prisma.book.findUnique({
            where: {
                id: bookId
            }
        });
        if (!book) return null;
        const bookInfo = {
            id: book.id,
            name: book.name,
            author: book.author,
            image: book.image,
            publisher: book.publisher,
            description: book.description,
            pubDate: book.pubDate,
            returnDate: book.pubDate
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

const createBookLending = async ( userId : number, bookId : number) : Promise<util> => {
    //promise 자체에서 .catche로 잡을 수도 있지만 아예 겉을 try-catch 문으로 에러처리가능
    const data = await prisma.lending.create({
        data : {
            user_id : userId,
            book_id : bookId,
        },
    })
    .catch(e){
        console.log(e);
        throw e;
    }

}


const bookService = {
    getBookById,
    createBookLending
}

export default bookService;