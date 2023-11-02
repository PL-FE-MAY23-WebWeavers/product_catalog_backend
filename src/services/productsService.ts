import { sequelize } from '../utils/connectDB';
import { DataTypes, Model } from 'sequelize';

class Products extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
}

Products.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    price: {
      type: DataTypes.DOUBLE,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'products',
  }
);
sequelize.sync();

export const getPaginatedProducts = async (page: number, itemsPerPage: number) => {
  try {
    const startIndex = (page - 1) * itemsPerPage;

    const products = await Products.findAll({
      limit: itemsPerPage,
      offset: startIndex,
    });

    return {
      products,
      currentPage: page,
      totalPages: Math.ceil(products.length / itemsPerPage),
    };
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};
