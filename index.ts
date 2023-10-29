import express from 'express'
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const PORT = Number(process.env.PORT);
const CLIENT_URL = process.env.CLIENT_URL;
const app = express();

app.use(
  cors({
    origin: CLIENT_URL,
  })
);

app.use('/', (req, res) => {
  res.send('WebWeavers - server działa!!!')
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
