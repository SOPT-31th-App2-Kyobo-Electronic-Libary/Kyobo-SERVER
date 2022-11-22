export interface userLendingResponseDto{
    userId: number,
    userName: string,
    books: lendingBook[]
}

export interface lendingBook {
    id: number,
    name: string,
    image: string,
    lendingDate: string,
    returnDate: string,
    dDay: number
}