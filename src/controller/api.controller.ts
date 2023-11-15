import {
  OrderBy,
  ProductType,
  SortOrder,
  apiServices,
} from '../service/api.services';
import { Request, Response } from 'express';

const getAllPhones = async (req: Request, res: Response) => {
  const { page, perPage, orderBy, order, productType, searchText } = req.query;

  if (page && perPage && (isNaN(Number(page)) || isNaN(Number(perPage)))) {
    res.sendStatus(400);
    return;
  }

  if (productType !== 'phones' && productType) {
    res.sendStatus(400);
    return;
  }

  const phones = await apiServices.getAllPhones(
    Number(page),
    Number(perPage),
    orderBy as OrderBy,
    order as SortOrder,
    productType as ProductType,
    searchText as string
  );
  res.send(phones);
};

const getPhone = async (req: Request, res: Response) => {
  const { id } = req.params;
  const phone = await apiServices.getPhone(id);

  if (!phone) {
    res.sendStatus(404);
    return;
  }
  res.send(phone);
};

const getPhonesRecommended = async (req: Request, res: Response) => {
  const { id } = req.params;
  const phonesRecommended = await apiServices.getPhonesRecommended(id);

  if (!phonesRecommended) {
    res.sendStatus(404);
    return;
  }

  res.send(phonesRecommended);
};

const getNewPhones = async (req: Request, res: Response) => {
  const phones = await apiServices.getNewPhones();

  if (!phones) {
    res.sendStatus(404);
    return;
  }

  res.send(phones);
};

const getDiscount = async (req: Request, res: Response) => {
  const discounts = await apiServices.getDiscount();

  if (!discounts) {
    res.sendStatus(404);
    return;
  }

  res.send(discounts);
};

export const apiController = {
  getAllPhones,
  getPhone,
  getPhonesRecommended,
  getNewPhones,
  getDiscount,
  // getNum
};
