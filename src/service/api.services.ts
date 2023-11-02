import { PhoneDetail } from '../models';
import { Phone } from '../models/Phone';


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

export const apiServices = {
    getAllPhones,
    getPhone
};
