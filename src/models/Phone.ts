import { Column, Model, Table } from 'sequelize-typescript';

@Table({
  tableName: 'phones',
  modelName: 'Phone',
  timestamps: false
})

export class Phone extends Model {
  @Column({
    primaryKey: true
  })
    id!: string;

    @Column
    category!: string; // "phones"
    
    @Column
    phoneId!: string; // "apple-iphone-11-128gb-black"

    @Column
    itemId!: string; // "apple-iphone-11-128gb-black"
    
    @Column
    name!: string; // "Apple iPhone 11 128GB Black"
    
    @Column
    fullPrice!: number; // 1100
    
    @Column
    price!: number; // 1050
    
    @Column
    screen!: string; // "6.1' IPS"
    
    @Column
    capacity!: string; // "128GB"
    
    @Column
    color!: string; // "black"
    
    @Column
    ram!: string; //"4GB"
    
    @Column
    year!: number; // 2019
    
    @Column
    image!: string; // img/phones
}
