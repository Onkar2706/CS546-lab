// This data file should export all functions using the ES6 standard as shown in the lecture code
import {posts} from '../config/mongoCollections.js';
import {ObjectId} from 'mongodb';
// import exportMethods, { get } from './products.js';
import { pm } from './index.js';
// import { avgRating } from '../helpers.js';
//import { reviews } from '../config/mongoCollections.js';

import { validateObjectId,validateArray,validateString,validatePrice,validateManufacturerWebsite,validateDate,validateRating, avgRating } from '../helpers.js';

const exportMethods ={


async createReview  (
  productId,
  title,
  reviewerName,
  review,
  rating
)  {

  if (
    !validateString(productId) ||
    !validateString(title) ||
    !validateString(reviewerName) ||
    !validateString(review) ||
    !validateRating(rating)
    ) throw "error thrown"


    const productsCollection = await posts();
    const product = await productsCollection.findOne({ _id: new ObjectId(productId) });
    if (!product) throw  'Product does not exist';


    const parsedDate =  new Date().toLocaleDateString();
    

    if (!validateDate(parsedDate)) throw 'Invalid review date';
  


    const newReview = ({
      _id: new ObjectId(),
      // productId:productId,
      title:title,
      reviewerName:reviewerName,
      review:review,
      rating:rating,
      reviewDate: new Date().toLocaleDateString()
    });
    const updatedProduct = await productsCollection.findOneAndUpdate(
      { _id: new ObjectId(productId) },
      { $push: { reviews: newReview } },
      { returnDocument: 'after' }
  );

    // let totalRating = 0;
    // console.log(updatedProduct)
    // for (const review of updatedProduct.value.reviews){
    //       totalRating += review.rating;
    // }

    // const averageRating = totalRating / updatedProduct.value.review.length;
    // const filter = { _id: new ObjectId(productId) };
    // update = { $set: { averageRating } };
    // await productsCollection.updateOne(filter, update);



    // await productsCollection.updateOne(
    //   { _id: new ObjectId(productId) },
    //   // { $set: { averageRating } }
    // );
    const arating = avgRating(updatedProduct.reviews)
    const updatedProductAvg = await productsCollection.findOneAndUpdate(
      { _id: new ObjectId(productId) },
      { $set: { averageRating: arating } },
      { returnDocument: 'after' }
  );

  return updatedProductAvg;



  
},

async getAllReviews  (productId) {
  if(!productId || !validateString(productId) || !validateObjectId(productId) || productId.trim().length === 0) throw "enter valid productId"

  const productsCollection = await posts();

  try {

    const product = await productsCollection.findOne({ _id: new ObjectId(productId) });
    
    if (!product) throw "Product not available";

    return product.reviews || [];
    

    
  } catch (error) {
    throw error;
    
    
  }




},

async getReview (reviewId) {

  if (!reviewId ||  reviewId.trim().length === 0 || !validateObjectId(reviewId)  || !validateString(reviewId)) throw "Please provide REVIEW ID";
  const productsCollection = await posts();


  try {

    const review = await productsCollection.findOne(
      { "reviews._id": new ObjectId(reviewId) },
      { projection: { "reviews.$": 1, _id: 0 } }
    );

    if (!review || !review.reviews || review.reviews.length === 0) throw "Review not avialble";
    return review.reviews[0];
    
    
  } catch (error) {
    throw error;
    
  }
  
},

async updateReview  (reviewId, updateObject)  {

  if (!reviewId ||  reviewId.trim().length === 0 || !validateObjectId(reviewId)  || !validateString(reviewId)) throw "Please provide REVIEW ID";
  if (!ObjectId.isValid(reviewId)) throw 'Invalid reviewId';

  


  if (updateObject.title && (!validateString(updateObject.title) || updateObject.title.trim() === '')) throw new Error('Title must be string');
  
  if (updateObject.reviewerName && (!validateString(updateObject.reviewerName) || updateObject.reviewerName.trim() === '')) throw new Error('ReviewerName string');
  
  if (updateObject.review && (!validateString(updateObject.review) || updateObject.review.trim() === '')) throw 'Review must be a string';
  
  if (updateObject.rating !== undefined) {
    if (!validateRating(updateObject.rating)) throw 'rating not available';
    }


    const productsCollection = await posts();
    const oldReviewID = await productsCollection.findOne({ 'reviews._id': new ObjectId(reviewId) });
    if (!oldReviewID) throw 'No product review found ';
    const productId = oldReviewID._id.toString()




    const oldReview = await this.getReview(reviewId)
    if(!oldReview) throw "Review not avaoilable"


    const updateReview ={...oldReview,...updateObject}

    const updatedReview = await productsCollection.findOneAndUpdate(
      {'reviews._id': new ObjectId(reviewId)},
      {$set:{'reviews.$.title':updateReview.title.trim(),'reviews.$.reviewDate':updateReview.reviewDate.trim(),'reviews.$.reviewerName':updateReview.reviewerName.trim(),'reviews.$.review':updateReview.review.trim(), 'reviews.$.rating': updateReview.rating}},
      {returnDocument:'after'}
    )

    if(!updatedReview) throw ("unable to update product")


    const arating = avgRating(updatedReview.reviews)
   const updatedProductAvg = await productsCollection.findOneAndUpdate(
    { _id: new ObjectId(productId) },
    { $set: { averageRating: arating } },
    { returnDocument: 'after' }

  
);




 return updatedProductAvg


    
    

},

async removeReview  (reviewId)  {

  if (!reviewId ||  reviewId.trim().length === 0 || !validateString(reviewId) || !validateObjectId(reviewId)) throw "Please provide REVIEW ID";
  const productsCollection = await posts();

  const product = await productsCollection.findOne({ 'reviews._id': new ObjectId(reviewId) });
  if (!product) throw 'No product available';
  const pid = product._id.toString();


  const deleteProd = await productsCollection.updateOne({
    _id:new ObjectId(pid)},
    {$pull: {reviews:{_id: new ObjectId(reviewId)}}});
    if(!deleteProd) throw "Error: cannot delete review";


  // reviewDate: new Date().toLocaleDateString()


  



    
  const pInfo = await pm.get(pid)
  const arating = avgRating(pInfo.reviews)
  const updatedProductAvg = await productsCollection.findOneAndUpdate(
    { _id: new ObjectId(pid) },
    { $set: { averageRating: arating } },
    { returnDocument: 'after' }
);

return updatedProductAvg;  
}
};
export default exportMethods; 



