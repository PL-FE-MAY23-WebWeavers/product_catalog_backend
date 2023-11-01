import express from 'express';
import { apiController } from '../controller/api.controller';

export const apiRoutes = express.Router();

apiRoutes.get('/phones', apiController.getAllPhones);
apiRoutes.get('/phones/:phoneId', apiController.getPhone);
