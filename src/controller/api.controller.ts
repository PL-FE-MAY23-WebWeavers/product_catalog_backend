
import { OrderBy, SortOrder, apiServices } from '../service/api.services';
import { Request, Response } from 'express';

// const getNum = async (req: Request, res: Response) => {
//     const num = await apiServices.getNum();
//     console.log('getNum');
//     res.send(num.toString());
// };

const getAllPhones = async (req: Request, res: Response) => {
    const { page, perPage, orderBy, order } = req.query;

    if (page && perPage && (isNaN(Number(page)) || isNaN(Number(perPage)))) {
        res.sendStatus(400);
        return;
    }

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

export const apiController = {
    getAllPhones,
    getPhone,
    getPhonesRecommended,
    getNewPhones,


    // getNum

};