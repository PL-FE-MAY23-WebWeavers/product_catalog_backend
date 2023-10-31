import { Column, Model, Table } from 'sequelize-typescript';

@Table({
    tableName: 'phone_details',
    modelName:  'PhoneDetail',
})

export class PhoneDetail extends Model {
    @Column
    filename!: JSON;
}