// This data file should export all functions using the ES6 standard as shown in the lecture code
import {posts} from '../config/mongoCollections.js';
import {ObjectId} from 'mongodb';
import { validateObjectId,validateArray,validateString,validatePrice,validateManufacturerWebsite,validateDate } from '../helpers.js';



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
  discontinued,
  
) => {
  function validateString(str) {
     return typeof str === 'string' && str.trim() !== '';
  }

  function validateArray(arr) {
      return Array.isArray(arr) && arr.length > 0 && arr.every(item => validateString(item));
  }

  function validatePrice(price) {
    if(typeof price !== "number" || price < 1 || price === NaN) return false;
    if (!Number.isInteger(price)){
      let parts = price.toString().split(".");
      if(parts[1].length > 2) return false;
    // return true
    }
  //   const priceString = price.toString();
  //   if (!/^\d*\.?\d{0,2}$/.test(priceString)){
  //     return false
  //   }

  //   if (priceString.includes('.')) {
  //     const [integerPart, fractionalPart] = priceString.split('.');
  //   }
  //   if (integerPart && !/^\d+$/.test(integerPart)) {
  //     return false;
  //   }
  //   if ( fractionalPart.length > 2) {
  //     return false;
  //   }
  
  // else {
    
  //   if (!/^\d+$/.test(priceString)) {
  //       return false;
  //   }
  // }
  return true
  }

  function validateManufacturerWebsite(website) {
      const websiteRegex = /^http:\/\/www\.([a-zA-Z0-9]{5,})\.com$/;
      return (typeof website === 'string' && website.trim().startsWith("http://www.") && website.trim().endsWith(".com") && website.trim().length > 19 && websiteRegex.test(website.trim()))
        
      
        
      
      
  }

  function validateDate(date) {
      if (!date || typeof date !== 'string') {
          return false;
      }
      let sDate= new Date()
      let userDate = new Date(date) 
      const dateRegex = /^(0[1-9]|1[0-2])\/(0[1-9]|[1-2][0-9]|3[0-1])\/\d{4}$/;
      if (!dateRegex.test(date)) return false;
      const [month, day, year] = date.split('/');
      if(userDate>sDate) return false
      
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
      discontinued: discontinued,
      reviews:[],
      averageRating:0
  };

  const productsCollection = await posts();
  const insertInfo = await productsCollection.insertOne(newProduct);
  
  if (!insertInfo.acknowledged || !insertInfo.insertedId) throw "product not added"

  const newId = insertInfo.insertedId.toString();

  const product = await get(newId);
  return product;
}

export const getAll = async () => {
  const productsCollection = await posts();
  let productList = await productsCollection.find({}).toArray();
  if(!productList) throw " Could not get all products"
  productList = productList.map((element)=>{

    element._id = element._id.toString()
    //console.log(element._id)
    return {
      _id:element._id.toString(),
      productName:element.productName
    };
  })
  //console.log(productList)

  return productList
}

export const get = async (id) => {
  //let x = new ObjectId();
  if (!id) throw 'You must provide an id to search for';
  if (typeof id !== 'string') throw 'Id must be a string';
  if (id.trim().length === 0) throw 'Id cannot be an empty string or just spaces';
  id = id.trim();
  if (!ObjectId.isValid(id)) throw 'invalid object ID';
  const productsCollection =await posts();
  const product = await productsCollection.findOne({_id: new ObjectId(id)})
  if (product === null) throw 'No product with that id';
  product._id = product._id.toString();
  return product;


 };

 export const remove = async (id) => {
  if (!id) throw 'You must provide an id to search for';
  if (typeof id !== 'string') throw 'Id must be a string';
  if (id.trim().length === 0) throw 'id cannot be an empty string or just spaces';
  id = id.trim();
 
  if (!ObjectId.isValid(id)) throw 'invalid object ID';
  
  const productsCollection = await posts();
  const deletionInfo = await productsCollection.findOneAndDelete({
    _id: new ObjectId(id)
  });

  if (!deletionInfo) {
    throw `Could not delete product with id of ${id}`;
  }

  return `${deletionInfo.productName} has been successfully deleted!`;
};

export const update = async (id, newProductName, productDescription,modelNumber,price,manufacturer,manufacturerWebsite,keywords,categories,dateReleased,discontinued) => {

  newProductName = newProductName.trim();
  productDescription = productDescription.trim();
  modelNumber = modelNumber.trim();
  price=price
  manufacturer = manufacturer.trim();
  keywords: keywords.map(keyword => keyword.trim());
  categories: categories.map(category => category.trim()),
  manufacturerWebsite = manufacturerWebsite.trim();
  dateReleased = dateReleased.trim();
  discontinued =discontinued


  if (!id || !newProductName || !productDescription || !modelNumber || !price || !manufacturer || !manufacturerWebsite || !keywords || !categories || !dateReleased || typeof discontinued !== 'boolean') {
    throw new Error("Enter valid values");
  }


   


  if (
    !validateObjectId(id)||
    !validateString(newProductName) ||
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

  const productsCollection = await posts();
  const updatedProduct = await productsCollection.findOneAndUpdate(
    { _id: new ObjectId(id) },
    { $set: { productName: newProductName.trim(),
        productDescription:productDescription.trim(),
        modelNumber:modelNumber.trim(),
        price:price,
        manufacturer:manufacturer.trim(),
        manufacturerWebsite:manufacturerWebsite.trim(),
        keywords:keywords.map(keyword => keyword.trim()),
        categories: categories.map(category => category.trim()),
        manufacturerWebsite : manufacturerWebsite.trim(),
        dateReleased : dateReleased.trim(),
        discontinued : discontinued
      } },
    { returnDocument: "after" }
  );
    
  return updatedProduct
};



