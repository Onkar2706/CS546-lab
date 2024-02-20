/*
This file is where you will import your functions from the two other files and run test cases on your functions by calling them with various inputs.  We will not use this file for grading and is only for your testing purposes to make sure:

1. Your functions in your 2 files are exporting correctly.

2. They are returning the correct output based on the input supplied (throwing errors when you're supposed to, returning the right results etc..).

Note: 
1. You will need that calls your functions like the example below. 
2. Do not create any other files beside the 'package.json' - meaning your zip should only have the files and folder in this stub and a 'package.json' file.
3. Submit all files (including package.json) in a zip with your name in the following format: LastName_FirstName.zip.
4. DO NOT submit a zip containing your node_modules folder.
*/

import { getAuthorById, searchAuthorsByAge, getBooksByState, searchAuthorsByHometown,getAuthorBooks } from "./authors.js"; 
import{getBookById,booksByPageCount,sameYear,minMaxPrice,searchBooksByPublisher} from"./books.js";

    // try{
    //     const author=await getAuthorById("1871e6d7-551f-41cb-9a07-08240b86c95c");
    //     console.log (author);
    // }catch(e){
    //     console.log (e);
    // }

    // try{
    //     const author=await getAuthorById("-1");
    //     console.log (author);
    // }catch(e){
    //     console.log (e);
    // }



    // (async () => {
    //     try {
    //         const authors = await searchAuthorsByAge(40);
    //         console.log(authors);
    //     } catch (error) {
    //         console.error(error.message);
    //     }
    // })();



    // (async () => {
    //     try {
    //       const result1 = await getBooksByState('NJ');
    //       console.log(result1); // ["Summertime", "Crime and Punishment"]
      
    //       // Test cases for error conditions
    //       // await getBooksByState(123); // Throws Error
    //       // await getBooksByState(" "); // Throws Error
    //       // await getBooksByState("Patrick"); // Throws Error
    //       // await getBooksByState(); // Throws Error
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   })();


    // try {
    //     const authors = searchAuthorsByHometown("New York City", "NY");
    //     console.log(authors);
    // } catch (error) {
    //     console.error(error.message);
    // }

    // try {
    //     const books = await getAuthorBooks("69b3f32f-5690-49d1-b9a6-9d2dd7d6e6cd");
    //     console.log(books);
    // } catch (error) {
    //     console.error(error.message);
    // }

    // try {
    //     const book = getBookById("99875ad8-a1d3-42ea-8d7b-5ac4cd4edb9e");
    //     console.log(book);
    // } catch (error) {
    //     console.error(error.message);
    // }


    // try {
    //     const result = booksByPageCount(300, 500);
    //     console.log(result);
    // } catch (error) {
    //     console.error(error.message);
    // }


    // try {
    //     const booksPublishedIn2000 =  await sameYear(2000);
    //     console.log(booksPublishedIn2000);
    // } catch (error) {
    //     console.error(error.message);
    // }



    // const booksPublishedIn2000 =  await minMaxPrice();
    // console.log(booksPublishedIn2000)


    try{
       const test = await searchBooksByPublisher("Podcat");  
       console.log(test);
   }catch(e){
       console.log (e);
   }

// try{
//        const test = await minMaxPrice();  
//        console.log(test);
//    }catch(e){
//        console.log (e);
//    }