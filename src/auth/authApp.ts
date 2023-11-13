import cors from 'cors';
import * as dotenv from 'dotenv';
import express from 'express';
import helmet from 'helmet';
import nocache from 'nocache';
import { messagesRouter } from './messages/messages.router';
import { errorHandler } from './middleware/error.middleware';
import { notFoundHandler } from './middleware/not-found.middleware';

dotenv.config();

if (!(process.env.PORT && process.env.CLIENT_ORIGIN_URL)) {
  throw new Error(
    'Missing required environment variables. Check docs for more info.'
  );
}

// const AUTH_PORT = parseInt(process.env.auth.PORT, 10);
const CLIENT_ORIGIN_URL = process.env.CLIENT_ORIGIN_URL;

export const authApp = express();
const apiRouter = express.Router();

authApp.use(express.json());
authApp.set('json spaces', 2);

authApp.use(
  helmet({
    hsts: {
      maxAge: 31536000,
    },
    contentSecurityPolicy: {
      useDefaults: false,
      directives: {
        'default-src': ['none'],
        'frame-ancestors': ['none'],
      },
    },
    frameguard: {
      action: 'deny',
    },
  })
);

authApp.use((req, res, next) => {
  res.contentType('application/json; charset=utf-8');
  next();
});
authApp.use(nocache());

authApp.use(
  cors({
    origin: CLIENT_ORIGIN_URL,
    methods: ['GET'],
    allowedHeaders: ['Authorization', 'Content-Type'],
    maxAge: 86400,
  })
);

authApp.use('/api', apiRouter);
apiRouter.use('/messages', messagesRouter);

authApp.use(errorHandler);
authApp.use(notFoundHandler);
