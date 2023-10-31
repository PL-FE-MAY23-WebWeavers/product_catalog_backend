import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import path from 'path';
import { connect } from './src/utils/connectDB';
import { apiRoutes } from './src/routes/api.routers';


const PORT = Number(process.env.PORT);
const CLIENT_URL = process.env.CLIENT_URL;
const app = express();

connect();

app.use(
    cors({
        origin: CLIENT_URL,
    })
);

app.use(express.static(path.join(__dirname, 'public')));



app.use('/api', apiRoutes);
app.use('/', (req, res) => {
    res.send('WebWeavers - server działa!!!');
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
