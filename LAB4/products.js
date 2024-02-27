// TODO: Export and implement the following functions in ES6 format
import {products} from './mongoCollections.js';
import {ObjectId} from 'mongodb';

export const create = async (
  productName,
  productDescription,
  modelNumber,
  price,
  manufacturer,
  manufacturerWebsite,
  keywords,
  categories,
  dateReleased,
  discontinued
) => {
  function validateString(str) {
      return typeof str === 'string' && str.trim() !== '';
  }

  function validateArray(arr) {
      return Array.isArray(arr) && arr.length > 0 && arr.every(item => validateString(item));
  }

  function validatePrice(price) {
      if (typeof price !== 'number' || price <= 0 || !Number.isFinite(price) || (price * 100) % 1 !== 0) {
          return false;
      }
      return true;
  }

  function validateManufacturerWebsite(website) {
      return typeof website === 'string' && website.trim().startsWith("http://www.") && website.trim().endsWith(".com") && website.trim().length > 15;
  }

  function validateDate(date) {
      if (!date || typeof date !== 'string') {
          return false;
      }
      const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/\d{4}$/;
      if (!dateRegex.test(date)) return false;
      const [month, day, year] = date.split('/');
      const parsedDate = new Date(`${month}/${day}/${year}`);
      return parsedDate && parsedDate.getMonth() == parseInt(month) - 1;
  }

  if (
      !validateString(productName) ||
      !validateString(productDescription) ||
      !validateString(modelNumber) ||
      !validatePrice(price) ||
      !validateString(manufacturer) ||
      !validateManufacturerWebsite(manufacturerWebsite) ||
      !validateArray(keywords) ||
      !validateArray(categories) ||
      !validateDate(dateReleased) ||
      typeof discontinued !== 'boolean'
  ) throw "error thrown"

  
  let newProduct = {
      productName: productName.trim(),
      productDescription: productDescription.trim(),
      modelNumber: modelNumber.trim(),
      price: parseFloat(price.toFixed(2)),
      manufacturer: manufacturer.trim(),
      manufacturerWebsite: manufacturerWebsite.trim(),
      keywords: keywords.map(keyword => keyword.trim()),
      categories: categories.map(category => category.trim()),
      dateReleased: dateReleased.trim(),
      discontinued: discontinued
  };

  const productsCollection = await products();
  const insertInfo = await productsCollection.insertOne(newProduct);
  if (!insertInfo.acknowledged || !insertInfo.insertedId) throw "product not added"

  const newId = insertInfo.insertedId.toString();

  const product = await this.get(newId);
  return product;
};


const getAll = async () => {
  const productsCollection = await products();
  let productList = await productsCollection.find({}).toArray();
  if(!productList) throw " Could not get all products"
  productList = productList.map((element)=>{
    element._id = element._id.toString()
  })

  return productList
};

const get = async (id) => {};

const remove = async (id) => {};

const rename = async (id, newProductName) => {};
