
export interface userMainPageResponseDto{
    lendingBook : MainPagelendingBook[],
    bestBook : bestBook[],
    newBook: newBook[],
    categoryBook : categoryBook[]
}

export interface MainPagelendingBook{
    id: number,
    name: string,
    image: string,
    dDay: number
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

