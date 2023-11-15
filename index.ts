import express from 'express';
import 'dotenv/config';
import cors, { CorsOptions } from 'cors';
import path from 'path';
import { connect } from './src/utils/connectDB';
import { apiRoutes } from './src/routes/api.routers';
import { stripeApp } from './src/utils/payment.server';

const PORT = Number(process.env.PORT);

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
        'https://localhost:5001',
      ];
      if (whitelist.indexOf(origin as string) !== -1) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    }
  },
};

app.use(cors(corsOptions));

app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());

app.use('/api', apiRoutes);
app.use('/', (req, res) => {
  res.send('WebWeavers - server działa!!!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

stripeApp.listen(4242, () =>
  console.log('Payment gateway running on port 4242')
);
