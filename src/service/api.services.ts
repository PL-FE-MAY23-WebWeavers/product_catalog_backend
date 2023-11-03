import { PhoneDetail } from '../models';
import { Phone } from '../models/Phone';


export type OrderBy = 'newest' | 'ram' | 'category' | 'name' | 'price' | 'screen' | 'capacity' | 'color' | 'year';
export type SortOrder = 'ASC' | 'DESC';

// const getNum = async () => {
//     const num = await Phone.count();
//     return num;
// };

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
    const {count, rows} = await Phone.findAndCountAll({
        offset: offset || 0,
        limit: perPage || 8,
        order
    });

    return {count, rows};
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
    getPhone,
    // getNum
};
