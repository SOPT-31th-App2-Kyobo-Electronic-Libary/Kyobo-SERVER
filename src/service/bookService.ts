import { PrismaClient } from "@prisma/client";
import { bookResponseDto } from "../interface/book/bookResponseDto";
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

const bookService = {
    getBookById
}

export default bookService;