import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Books } from './entity/books.entity';
import { Repository } from 'typeorm';
import { BooksDto } from './dtos/books.dto';

@Injectable()
export class BooksService {
    constructor(@InjectRepository(Books) private repo: Repository<Books>) { }

    findAll() {
        return this.repo.find()
    }
    create(body: BooksDto) {
        const books = this.repo.create(body)
        this.repo.save(books)
        return books
    }
    update(id: string, body: BooksDto) {
        const book = this.repo.findBy({ id: parseInt(id) })
        if (!book) {
            throw new NotFoundException("Can't find book with id:" + id)
        }

        return this.repo.update(id, body)
    }
    delete(id: string) {
        const book = this.repo.findBy({ id: parseInt(id) })
        if (!book) {
            throw new NotFoundException("Can't find book with id:" + id)
        }
        this.repo.delete(id)
    }

}
