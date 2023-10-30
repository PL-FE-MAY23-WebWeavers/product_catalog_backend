import { Column, Model, Table, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { Capacity } from './Capacity';
import { Color } from './Color';
import { Detail } from './Detail';

@Table({
    tableName: 'phones',
    modelName:  'Phone',
})

export class Phone extends Model {
    @Column
    category!: string; // "phones"
    phoneId!: string; // "apple-iphone-11-128gb-black",
    itemId!: string; // "apple-iphone-11-128gb-black",
    name!: string; // "Apple iPhone 11 128GB Black",
    fullPrice!: number; // 1100,
    price!: number; // 1050,
    screen!:string; // "6.1' IPS",
    ram!: string; //"4GB",
    year!: number; // 2019,
    image!: string; // klucz obcy//"img/phones

    @ForeignKey(() => Capacity)
    @Column
    capacityId!: number; // klucz obcy// "128GB",

    @BelongsTo(() => Capacity)
    capacity!: Capacity;

    @ForeignKey(() => Color)
    @Column
    colorId!: number;

    @BelongsTo(() => Color)
    color!: Color; // klucz obcy// "black",

    @ForeignKey(() => Detail)
    @Column
    detailID!: number;

    @BelongsTo(() => Detail)
    detail!: Detail;
}




