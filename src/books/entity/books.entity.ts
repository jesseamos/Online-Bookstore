import { Column, PrimaryGeneratedColumn, Entity } from "typeorm";
@Entity()
export class Books {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    title: string

    @Column()
    overview: string

    @Column()
    author: string

    @Column('simple-array')
    genres: string[]

    @Column()
    rating: number

    @Column()
    price: number

}