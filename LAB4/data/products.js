// TODO: Export and implement the following functions in ES6 format
import {products} from '../mongoCollections.js';
import {ObjectId} from 'mongodb';

export const  create = async (
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

  const product = await get(newId);
  return product;
}




 export const getAll = async () => {
  const productsCollection = await products();
  let productList = await productsCollection.find({}).toArray();
  if(!productList) throw " Could not get all products"
  productList = productList.map((element)=>{
    element._id = element._id.toString()
  })

  return productList
}


 export const get = async (id) => {
  let x = new ObjectId();
  if (!id) throw 'You must provide an id to search for';
  if (typeof id !== 'string') throw 'Id must be a string';
  if (id.trim().length === 0) throw 'Id cannot be an empty string or just spaces';
  id = id.trim();
  if (!ObjectId.isValid(id)) throw 'invalid object ID';
  const productsCollection =await products();
  const product = await productsCollection.findOne({_id: new ObjectId(id)})
  if (product === null) throw 'No dog with that id';
  product._id = product._id.toString();
  return product;


 };

 export const remove = async (id) => {
  if (!id) throw 'You must provide an id to search for';
  if (typeof id !== 'string') throw 'Id must be a string';
  if (id.trim().length === 0) throw 'id cannot be an empty string or just spaces';
  id = id.trim();
  if (!ObjectId.isValid(id)) throw 'invalid object ID';
  const productsCollection = await products();
  const deletionInfo = await  productsCollection.findOneAndDelete({
    _id: new ObjectId(id)
  });
  if (!deletionInfo) {
    throw `Could not delete dog with id of ${id}`;
  }
  return `${deletionInfo.name} has been deleted.`;



 };

 export const rename = async (id, newProductName) => {
  if (!id) throw 'You must provide an id to search for';
  if (typeof id !== 'string') throw 'Id must be a string';
    if (id.trim().length === 0)
      throw 'Id cannot be an empty string or just spaces';
    id = id.trim();
    if (!ObjectId.isValid(id)) throw 'invalid object ID';
    if (!newProductName) throw 'You must provide a name for your dog';
    if (typeof newProductName !== 'string') throw 'Name must be a string';
    if (newProductName.trim().length === 0) throw 'Name cannot be an empty string or string with just spaces';
    const productCollection = await products();
    const product = await productCollection.findOne({ _id: new ObjectId(id.trim()) });
    if(!product) throw "product not found"
    if (product.productName === newProductName.trim()) throw "new product name is same "
    const updatedProduct = await productCollection.findOneAndUpdate(
      { _id: new ObjectId(id.trim()) },
      { $set: { productName: newProductName.trim() } },
      { returnOriginal: false }
    );
    return updatedProduct.value
    
 };




