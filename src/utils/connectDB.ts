import { Sequelize } from 'sequelize-typescript';
import * as models from '../models';
export const sequelize = new Sequelize({
  database: process.env.DB_NAME,
  username: process.env.DB_USER_NAME,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT),
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

sequelize.addModels(Object.values(models));

export async function connect() {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
