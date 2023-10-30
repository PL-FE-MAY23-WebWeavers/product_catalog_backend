import { Column, Model, Table } from 'sequelize-typescript';

@Table({
    tableName: 'details',
    modelName:  'Details',
})

export class Detail extends Model {
    @Column
    file!: JSON;
}