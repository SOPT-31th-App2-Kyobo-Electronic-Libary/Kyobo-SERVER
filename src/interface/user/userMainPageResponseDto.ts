import { lendingBook } from "./userLendingResponseDto";


export interface userMainPageResponseDto{
    lendingBook : lendingBook[],
    bestBook : bestBook[],
    newBook: newBook[],
    categoryBook : categoryBook[]
}


export interface bestBook{
    id: number,
    name: string,
    image: string,
    author : string,
    description : string
}

export interface newBook{
    id: number,
    name: string,
    image: string,
    author : string
}

export interface categoryBook{
    id: number,
    name: string,
    image: string,
    author : string,
    category : string
}

