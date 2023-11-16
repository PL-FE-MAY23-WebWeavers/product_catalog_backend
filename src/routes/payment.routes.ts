/* eslint-disable @typescript-eslint/no-var-requires */
import express from 'express';
import { paymentController, stripeApp } from '../controller/payment.controller';

export const paymentRoutes = express.Router();
const bodyParser = require('body-parser');

stripeApp.use(express.urlencoded({ extended: true }));
stripeApp.post('/create-checkout-session', paymentController.createSession);
stripeApp.post(
  '/webhook',
  bodyParser.raw({ type: 'application/json' }),
  paymentController.createWebhook
);
