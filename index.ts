import express from 'express';
import 'dotenv/config';
import cors, { CorsOptions } from 'cors';
import path from 'path';
import { connect } from './src/utils/connectDB';
import { apiRoutes } from './src/routes/api.routers';

const PORT = Number(process.env.PORT);
const CLIENT_URL = process.env.CLIENT_URL;
const app = express();

connect();

// CORS configuration

const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (process.env.NODE_ENV === 'development') {
      // Allow all origins in development
      callback(null, true);
    } else {
      // Restrict origins in production
      const whitelist = [
        'https://pl-fe-may23-webweavers.github.io/product_catalog/',
      ];
      if (whitelist.indexOf(origin as string) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  },
};

// Enable CORS with the above options
app.use(cors(corsOptions));

// ...rest of your app setup

// app.use(
//   cors({
//     origin: CLIENT_URL,
//   })
// );

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', (req, res) => {
  res.send('WebWeavers - server działa!!!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
