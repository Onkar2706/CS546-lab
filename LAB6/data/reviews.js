// This data file should export all functions using the ES6 standard as shown in the lecture code
import {posts} from '../config/mongoCollections.js';
import {ObjectId} from 'mongodb';
import { get } from './products.js';
//import { reviews } from '../config/mongoCollections.js';

import { validateObjectId,validateArray,validateString,validatePrice,validateManufacturerWebsite,validateDate,validateRating } from '../helpers.js';


export const createReview = async (
  productId,
  title,
  reviewerName,
  review,
  rating
) => {

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
      productId:productId,
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

  return updatedProduct;



  
};

export const getAllReviews = async (productId) => {
  if(!productId || !validateString(productId) || !validateObjectId(productId) || productId.trim().length) throw "enter valid productId"

  const productsCollection = await posts();

  try {

    const product = await productsCollection.findOne({ _id: new ObjectId(productId) });
    
    if (!product) throw "Product not available";

    return product.reviews || [];
    

    
  } catch (error) {
    throw error;
    
    
  }




};

export const getReview = async (reviewId) => {

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
  
};

const updateReview = async (reviewId, updateObject) => {};

export const removeReview = async (reviewId) => {

  if (!reviewId ||  reviewId.trim().length === 0 || !validateObjectId(reviewId)  || !validateString(reviewId)) throw "Please provide REVIEW ID";
  const productsCollection = await posts();

  const product = await productsCollection.findOne({ 'reviews._id': new ObjectId(reviewId) });
  if (!product) throw 'No product available';

  const returnedProduct = await productsCollection.findOne({'reviews._id':new ObjectId(reviewId)});
  const pid = returnedProduct._id.toString();


  const updatedProduct = await productsCollection.updateOne(
    { 'reviews._id': new ObjectId(reviewId) },
    { $pull: { reviews: { _id: new ObjectId(reviewId) } } },
    { returnDocument: 'after' }
  );
  // const returnedProduct = await productsCollection.findOne(review)



    
  return await get(pid)
  


  



};



