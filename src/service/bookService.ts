import { categoryBook, bestBook, newBook } from './../interface/user/userMainPageResponseDto';
import { PrismaClient } from "@prisma/client";
import { bookResponseDto } from "../interface/book/bookResponseDto";
import { LENDING_PERIOD, LENDING_LIMIT_FOR_A_BOOK } from "../module/enVariable";
import { convertDateForm } from "../module/convertDateForm";
import util from "../module/util";
import statusCode from "../module/statusCode";
import message from '../module/responseMessage';


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
        const returnDate = new Date(now.setDate(now.getDate() + LENDING_PERIOD));
    
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

const createBookLending = async ( userId : number, bookId : number, returnDate : string) => {
    //promise 자체에서 .catche로 잡을 수도 있지만 아예 겉을 try-catch 문으로 에러처리가능
    const now : Date = new Date();
    const leadingDate : string = convertDateForm(now); //빌린날짜 : 현재 날짜

    try{
        const nowLendingCount = await prisma.lending.findMany({
            where:{
                book_id : bookId
            } 
        });

        if( nowLendingCount.length < LENDING_LIMIT_FOR_A_BOOK ){
            const lending = await prisma.lending.create({
                data : {
                    user_id : userId,
                    book_id : bookId,
                    lending_date : leadingDate,
                    return_date : returnDate
                },
            });

            return lending;


        }
        else{
            return null;
         
            
        }

    }catch(error){
        console.log(error);
        throw error;
    }

    

}

const getBestBook=async() : Promise<bestBook[]|null> =>{
    try{

        //시간관계상 일단 랜덤으로 주는것으로 할께요....
        const data=await prisma.book.findMany();

        if (!data){
            return null
        }

        const bestBooks : bestBook[] = [];

        for await(let bestB of data){
            let book : bestBook ={
                id : bestB.id,
                name : bestB.name,
                image : bestB.image,
                author : bestB.author,
                description : bestB.description
            }

            bestBooks.push(book);
        }

        return bestBooks.sort(() => Math.random() - 0.5)
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

const getNewBook=async() : Promise<newBook[]|null>=>{
    try{
        const data = await prisma.book.findMany({
            orderBy: {
                pub_date : 'desc'
            }
        });

        if (!data){
            return null
        }
        
        const newBooks : newBook[] = [];

        for await(let newB of data){
            let book : newBook = {
                id : newB.id,
                name : newB.name,
                image : newB.image,
                author : newB.author
            }
            newBooks.push(book);
        }

        return newBooks;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

const getCategoryBook=async( category : string ) : Promise<categoryBook[]|string>=>{
    try{
        const data = await prisma.book.findMany({
            where : {
                category : category
            }
        });
        if(!data){
            return message.NOT_FOUND;
        }

        const categoryBooks : categoryBook[] = [];

        for await(let categoryB of data){
            let book : categoryBook= {
                id : categoryB.id,
                name : categoryB.name,
                image : categoryB.image,
                author : categoryB.author,
                category : categoryB.category
            }

            categoryBooks.push(book)
        }

        return categoryBooks;
    }
    catch(error){
        console.log(error);
        throw error;
    }
}

const bookService = {
    getBookById,
    createBookLending,
    getBestBook,
    getNewBook,
    getCategoryBook
}

export default bookService;