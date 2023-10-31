import express from 'express';
import apiController from '../controller/api.controller';

export const apiRoutes = express.Router();

apiRoutes.get('/products.json', apiController.getPhones);
