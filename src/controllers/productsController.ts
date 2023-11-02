import express from 'express';
import { getPaginatedProducts } from '../services/productsService';

const productsRouter = express.Router();

productsRouter.get('/products', (req, res) => {
  const page = parseInt(req.query.page as string) || 1;
  const itemsPerPage = parseInt(req.query.itemsPerPage as string) || 5;

  const result = getPaginatedProducts(page, itemsPerPage);

  res.json(result);
});

export default productsRouter;
