import { Column, DataType, Model, Table } from 'sequelize-typescript';

@Table({
    tableName: 'phonedetails',
    modelName:  'PhoneDetail',
    timestamps: false
})

export class PhoneDetail extends Model {
  @Column({
      type: DataType.STRING,
      primaryKey: true
  })
      id!: string;

@Column
    namespaceId!: string;

@Column
    name!: string;

@Column(DataType.ARRAY(DataType.STRING))
    capacityAvailable!: string[];

@Column
    capacity!: string;

@Column
    priceRegular!: number;

@Column
    priceDiscount!: number;

@Column(DataType.ARRAY(DataType.STRING))
    colorsAvailable!: string[];

@Column
    color!: string;

@Column(DataType.ARRAY(DataType.STRING))
    images!: string[];

@Column(DataType.JSON)
    description!: { title: string, text: string[] }[];

@Column
    screen!: string;

@Column
    resolution!: string;

@Column
    processor!: string;

@Column
    ram!: string;

@Column
    camera!: string;

@Column
    zoom!: string;

@Column(DataType.ARRAY(DataType.STRING))
    cell!: string[];
}
