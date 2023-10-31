import { Column, Model, Table } from 'sequelize-typescript';

@Table({
    tableName: 'phones',
    modelName: 'Phone',
})

export class Phone extends Model {
    @Column
    category!: string; // "phones"
    phoneId!: string; // "apple-iphone-11-128gb-black",
    itemId!: string; // "apple-iphone-11-128gb-black",
    name!: string; // "Apple iPhone 11 128GB Black",
    fullPrice!: number; // 1100,
    price!: number; // 1050,
    screen!: string; // "6.1' IPS",
    capacity!: string; // "128GB",
    color!: string; // "black",
    ram!: string; //"4GB",
    year!: number; // 2019,
    image!: string; // img/phones
}




