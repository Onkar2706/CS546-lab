// Import the express router as shown in the lecture code
// Note: please do not forget to export the router!

import  express  from 'express';
//import {productsData} from '../data/index.js';
import { create,get,getAll,update} from '../data/products.js';

const router = express.Router();

router
  .route('/')
  .get(async (req, res) => {
    //code here for GET
    try {
      const cList = await getAll();
      return res.json(cList);;
    } catch (e) {
      return res.status(500).send(e);
    }
    
  })
  .post(async (req, res) => {
    //code here for POST
  });

router
  .route('/:productId')
  .get(async (req, res) => {
    //code here for GET
  })
  .delete(async (req, res) => {
    //code here for DELETE
  })
  .put(async (req, res) => {
    //code here for PUT
  });



  export default router;
