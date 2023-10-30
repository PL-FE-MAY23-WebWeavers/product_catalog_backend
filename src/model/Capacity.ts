import { Column, Model, Table } from 'sequelize-typescript';

@Table({
    tableName: 'capacities',
    modelName:  'Capacity',
})

export class Capacity extends Model {
    @Column
    capacity!: string;
}