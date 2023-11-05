import express from 'express';
import { apiController } from '../controller/api.controller';

export const apiRoutes = express.Router();

apiRoutes.get('/products', apiController.getAllPhones);
apiRoutes.get('/products/new', apiController.getNewPhones);
apiRoutes.get('/products/:id', apiController.getPhone);
apiRoutes.get('/products/:id/recommended', apiController.getPhonesRecommended);

// apiRoutes.get('/products/count', apiController.getNum);



