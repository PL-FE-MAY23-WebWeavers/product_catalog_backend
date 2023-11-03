import express from 'express';
import { apiController } from '../controller/api.controller';

export const apiRoutes = express.Router();

apiRoutes.get('/products', apiController.getAllPhones);
// apiRoutes.get('/products/count', apiController.getNum);
apiRoutes.get('/products/:id', apiController.getPhone);

