import { IsString, IsArray, IsNumber } from "class-validator";
export class BooksDto {

    @IsString()
    title: string

    @IsString()
    overview: string

    @IsString()
    author: string

    @IsArray()
    genres: string[]

    @IsNumber()
    rating: number

    @IsNumber()
    price: number
}
