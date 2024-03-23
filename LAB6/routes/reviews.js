// Import the express router as shown in the lecture code
// Note: please do not forget to export the router!
import  express  from 'express';
import { validateObjectId, validatePrice, validateString, validateArray, validateDate, validateManufacturerWebsite, validateRating} from '../helpers.js';

import {rm} from '../data/index.js';

const router = express.Router();

router
  .route('/:productId')
  .get(async (req, res) => {
    //code here for GET
    
    const rid = req.params.productId;
    
    try{
      // error
      if(!validateObjectId(rid)) return res.status(400).json( "error")
    }
    catch(e){
      return res.status(400).json("sfjdkjfkl");
    }
    try{
      const result = await rm.getAllReviews(rid);
      return res.status(200).json(result);
    }
    catch(e){
      return res.status(404).json(e);
    }
  })
  .post(async (req, res) => {
    //code here for POST
    const rid = req.params.productId;
    const newP=req.body;
    if(!validateObjectId(rid)) return res.status(400).json( "error")
    
    try{
      const result = await rm.createReview(rid.trim(), newP.title,
        newP.reviewerName,
        newP.review,
        newP.rating );
      return res.status(200).json(result);
    }
    catch(e){
      return res.status(404).json(e);
    }
  });

router
  .route('/review/:reviewId')
  .get(async (req, res) => {
    //code here for GET
    const rid = req.params.reviewId;
    try{
      // error
      if(!validateObjectId(rid.trim())) return res.status(400).json( "error")
    }
    catch(e){
      return res.status(400).json(e);
    }
    try{
      const result = await rm.getReview(rid.trim());
      return res.status(200).json(result);
    }
    catch(e){
      return res.status(404).json(e);
    }

  })
  .patch(async (req, res) => {
    //code for PATCH
    const rid = req.params.reviewId;
    if(!validateObjectId(rid.trim())) return res.status(400).json( "error")
    const newR = req.body;
    const ud = {...newR};
    // console.log(ud);
    try{
      const result = await rm.updateReview(rid.trim(), ud);
      return res.status(200).json(result);
    }
    catch(e){
      return res.status(404).json(e);
    }

  })
  .delete(async (req, res) => {
    //code here for DELETE
    const rid = req.params.reviewId;
    if(!validateObjectId(rid.trim())) return res.status(400).json( "error")
    
    try{
      const result = await rm.removeReview(rid.trim());
      return res.status(200).json(result);
    }
    catch(e){
      return res.status(404).json(e);
    }
  });

  export default router;