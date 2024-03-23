// Import the express router as shown in the lecture code
// Note: please do not forget to export the router!

import  express  from 'express';
//import {productsData} from '../data/index.js';
// import { create,get,getAll,update} from '../data/products.js';
import {pm} from '../data/index.js';
import { validateObjectId, validatePrice, validateString, validateArray, validateDate, validateManufacturerWebsite, validateRating} from '../helpers.js';

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    //code here for GET
    try {
      const result = await pm.getAll();
      return res.status(200).json(result);
    } catch (e) {
      return res.status(400).send(e);
    }
    
  })
  .post(async (req, res) => {
    //code here for POST
    const newP = req.body;
    // console.log(newP)
      //error checks
      if (
        
        !validateString(newP.productName) ||
        !validateString(newP.productDescription) ||
        !validateString (newP.modelNumber) ||
        !validatePrice(newP.price) ||
        !validateString(newP.manufacturer) ||
        !validateManufacturerWebsite(newP.manufacturerWebsite) ||
        !validateArray(newP.keywords) ||
        !validateArray(newP.categories) ||
        !validateDate(newP.dateReleased) ||
        typeof newP.discontinued !== 'boolean'
      ) return res.status(400).json( "error ")

    try{
      const result = await pm.create(newP.productName,
        newP.productDescription,
        newP.modelNumber,
        newP.price,
        newP.manufacturer,
        newP.manufacturerWebsite,
        newP.keywords,
        newP.categories,
        newP.dateReleased,
        newP.discontinued)


        return res.status(200).json(result)
    }
    catch(e){
      return res.status(404).json(e)

    }
  });

router
  .route('/:productId')
  .get(async (req, res) => {
    //code here for GET
    const pid = req.params.productId;
    try{if(!validateObjectId(pid.trim())) throw "error"}catch(e){return res.status(400).json(e)}
    
    try{
      const result = await pm.get(pid.trim());
      return res.status(200).json(result)
    }
    catch(e){
      return res.status(404).json(e) 
    }
  })
  .delete(async (req, res) => {
    //code here for DELETE
    const pid = req.params.productId;
    try{if(!validateObjectId(pid.trim())) throw "error"}catch(e){return res.status(400).json(e)}
    
    try{
      const result = await pm.remove(pid.trim());
      return res.status(200).json(result)
    }
    catch(e){
      return res.status(404).json(e) 
    }
  })
  .put(async (req, res) => {
    //code here for PUT
    const pid = req.params.productId;
    
    try{if(!validateObjectId(pid.trim())) throw "error"}catch(e){return res.status(400).json(e)}
    const newP = req.body;
    
      if (
        
        !validateString(newP.productName) ||
        !validateString(newP.productDescription) ||
        !validateString(newP.modelNumber) ||
        !validatePrice(newP.price) ||
        !validateString(newP.manufacturer) ||
        !validateManufacturerWebsite(newP.manufacturerWebsite) ||
        !validateArray(newP.keywords) ||
        !validateArray(newP.categories) ||
        !validateDate(newP.dateReleased) ||
        typeof newP.discontinued !== 'boolean'
      ) return res.status(400).json( "error")
      // else console.log("dskjfhsdkj")

    try{
      const result = await pm.update(pid.trim(),newP.productName,
      newP.productDescription,
      newP.modelNumber,
      newP.price,
      newP.manufacturer,
      newP.manufacturerWebsite,
      newP.keywords,
      newP.categories,
      newP.dateReleased,
      newP.discontinued);
      return res.status(200).json(result)
    }
    catch(e){
      return res.status(404).json(e) 
    }
  });



  export default router;
