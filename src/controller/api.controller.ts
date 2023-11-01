import { apiServices } from '../service/api.services';

const getAllPhones = async (req: any, res: any) => {
    const phones = await apiServices.getAllPhones()
    res.send(phones)
}

const getPhone = async (req: any, res: any) => {
    const { phoneId } = req.params
    const phone = await apiServices.getPhone(phoneId)

    if (!phone) {
        res.sendStatus(404)
        return
    }
    res.send(phone)
}

export const apiController = {
    getAllPhones,
    getPhone,
}