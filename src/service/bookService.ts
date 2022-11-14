import { PrismaClient } from "@prisma/client";
import { bookResponseDto } from "../interface/book/bookResponseDto";
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

const bookService = {
    getBookById
}

export default bookService;