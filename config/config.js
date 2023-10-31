require('dotenv').config()

module.exports ={
  "development": {
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
      }
    }
  }
}
