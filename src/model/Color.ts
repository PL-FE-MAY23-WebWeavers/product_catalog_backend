import { Column, Model, Table } from 'sequelize-typescript';

@Table({
    tableName: 'colors',
    modelName:  'Color',
})

export class Color extends Model {
    @Column
    name!: string;
}