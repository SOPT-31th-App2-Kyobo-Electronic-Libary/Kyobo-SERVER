export interface bookResponseDto {
    book: bookeInfo,
    userId: number
}

interface bookeInfo {
    id: number,
    name: string,
    author: string,
    image: string,
    publisher: string,
    description: string,
    pubDate: string,
    returnDate: string
}