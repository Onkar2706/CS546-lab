// This data file should export all functions using the ES6 standard as shown in the lecture code

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
      discontinued: discontinued
  };

  const productsCollection = await products();
  const insertInfo = await productsCollection.insertOne(newProduct);
  
  if (!insertInfo.acknowledged || !insertInfo.insertedId) throw "product not added"

  const newId = insertInfo.insertedId.toString();

  const product = await get(newId);
  return product;
}

const getAll = async () => {};

const get = async (productId) => {};

const remove = async (productId) => {};

const update = async (
  productId,
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
) => {};
