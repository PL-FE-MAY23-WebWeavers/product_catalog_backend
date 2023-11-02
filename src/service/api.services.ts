import { PhoneDetail } from '../models';
import { Phone } from '../models/Phone';


export type OrderBy = 'newest' | 'ram' | 'category' | 'name' | 'price' | 'screen' | 'capacity' | 'color' | 'year';
export type SortOrder = 'ASC' | 'DESC';


const getAllPhones = async (page: number, perPage: number, orderBy?: OrderBy, sort?: SortOrder) => {
    const offset = (page - 1) * perPage;
    let order: [[OrderBy, SortOrder]] | [['id', 'ASC']];
    
    if (orderBy && isOrderBy(orderBy)) {
        if (sort !== 'DESC') {
            order = [[orderBy, 'ASC']];
        } else {
            order = [[orderBy, 'DESC']];
        }
        
    } else {
        order = [
            ['id', 'ASC']
        ];
    }
    console.log(page, perPage, order);
    const phones = await Phone.findAll({
        offset: offset || 0,
        limit: perPage || 8,
        order
    });

    return phones;
};

function isOrderBy(value: string): value is OrderBy {
    const validOrderBys: OrderBy[] = ['newest', 'ram', 'category', 'name', 'price', 'screen', 'capacity', 'color', 'year'];
    return validOrderBys.includes(value as OrderBy);
}


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
