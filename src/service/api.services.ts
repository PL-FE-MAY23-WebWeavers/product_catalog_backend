import { Phone } from "../models/Phone";


const getAllPhones = async () =>  {
  const phones = await Phone.findAll()
  return phones
};

const getPhone = async (phoneId: string) => {
  const phone = await Phone.findOne({
    where: {
      phoneId
    }
  })
  return phone
}

export const apiServices = {
  getAllPhones,
  getPhone
};
