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

 function validateString(str){
  return typeof str ==='string' && str.trim() !==''

 function validateArray(arr){
  return Array.isArray(arr) && arr.length > 0 && arr.every(item => validateString(item));

 }

 function validatePrice(){
  if (typeof price !== 'number' || price <= 0 || !Number.isFinite(price) || (price * 100) % 1 !== 0){
    return false

  }
  return true
 }


 
  

 }

//error handle


//create object to insert in collection

let newProduct = {
 
  productName: productName,
  productDescription: productDescription,
  modelNumber: modelNumber,
  price: price, //(9.99, 199.99, 59.00, 100, 5 etc),
  manufacturer: manufacturer, 
  manufacturerWebsite: manufacturerWebsite, //(must contain full url http://www.phillips.com),
  keywords: keywords,
  categories: categories,
  dateReleased: dateReleased,
  discontinued: discontinued
  
}

const productsCollection = await products();
const insertInfo = await productsCollection.insertOne(newProduct)
if (!insertInfo.acknowledged || !insertInfo.insertedId)
      throw 'Could not add product';

    const newId = insertInfo.insertedId.toString();

    const product = await this.get(newId);
    return product;



}
;

const getAll = async () => {
  const productsCollection = await products();
};

const get = async (id) => {};

const remove = async (id) => {};

const rename = async (id, newProductName) => {};
