
import express from 'express';
import dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import { connect } from './src/utils/connectDB';



const PORT = Number(process.env.PORT);
const CLIENT_URL = process.env.CLIENT_URL;
const app = express();

connect();

app.use(
  cors({
    origin: CLIENT_URL,
  })
);

app.use('/', (req, res) => {
  res.send('WebWeavers - server działa!!!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
