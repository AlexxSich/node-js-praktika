import { Product } from '../db/models/Product.js';

export const getAllProductsFromDB = () => Product.find();

export const getProductByIdFromBD = (id) => Product.findById(id);
