
import { OrderBy, SortOrder, apiServices } from '../service/api.services';
import { Request, Response } from 'express';

const getAllPhones = async (req: Request, res: Response) => {
    const { page, perPage, orderBy, order } = req.query;

    if (page && perPage && (isNaN(Number(page)) || isNaN(Number(perPage)))) {
        res.sendStatus(400);
        return;
    }

    console.log(page, perPage);
    const phones = await apiServices.getAllPhones(Number(page), Number(perPage), orderBy as OrderBy, order as SortOrder);
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

export const apiController = {
    getAllPhones,
    getPhone,
};