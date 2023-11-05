import { PhoneDetail } from '../models';
import { Phone } from '../models/Phone';
import { Op } from 'sequelize';

const getAllPhones = async () =>  {
    const phones = await Phone.findAll();
    return phones;
};

const getPhone = async (id: string) => {
    const phone = await PhoneDetail.findOne({
        where: {
            id
        }
    });
    return phone;
};

const getPhonesRecommended = async (id: string) => {
    const phone = await getPhone(id);
    if (!phone) {
        return;
    }

    const { color } = phone;

    const phonesRecommended = await PhoneDetail.findAndCountAll({
        where: {
            color: {
                [Op.like]: color,
            },
        }
    });

    return phonesRecommended;
};

const getNewPhones = async () => {
    const phones = await getAllPhones();
    if (phones.length === 0) {
        return;
    }

    const phonesNew = await Phone.findAndCountAll({
        order: [
            ['year', 'DESC']
        ],
        limit: 7,

    });

    return phonesNew;
};

export const apiServices = {
    getAllPhones,
    getPhone,
    getPhonesRecommended,
    getNewPhones,
};
