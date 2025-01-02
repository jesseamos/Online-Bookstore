import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BooksDto } from './dtos/books.dto';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) { }
    @Get()
    getBooks() {
        return this.booksService.findAll()
    }

    @Get('/:id')
    getOneBook(@Param('id') id: string) {
        return this.booksService.findOne(id)
    }

    @Post()
    createBook(@Body() body: BooksDto) {
        return this.booksService.create(body)
    }

    @Put('/:id')
    updateBook(@Param('id') id: string, @Body() body: BooksDto) {
        return this.booksService.update(id, body)
    }

    @Delete('/:id')
    deleteBooks(@Param("id") id: string) {
        return this.booksService.delete(id)
    }


}

