import { lendingBook, userLendingResponseDto } from './../interface/user/userLendingResponseDto';
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const getUserLending = async (userId: number): Promise<string|userLendingResponseDto> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: userId
      }
    });
    if (!user) return 'no_user';
    const lendings = await prisma.lending.findMany({
      where: {
        user_id: userId,
      },
      include: {  
        Book: {
          select: {
            id: true,
            name: true,
            image: true
          }
       }
      },
    });
  
    const lendingBooks: lendingBook[] = [];

    for await(let lending of lendings) {
      let remainDay = (new Date(lending.return_date).getTime()-new Date().getTime())/(1000*60*60*24);
      let dDay =  (remainDay>0) ? remainDay : 0
      let book = {
        id: lending.Book.id,
        name: lending.Book.name,
        image: lending.Book.image,
        lendingDate: lending.lending_date,
        returnDate: lending.return_date,
        dDay: Math.ceil(dDay)
      }
      lendingBooks.push(book)
    }
    const data = {
      userId: user.id,
      userName: user.name,
      books: lendingBooks
    }
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const userService = {
  getUserLending,
};

export default userService;
