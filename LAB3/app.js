// This file is where you will import your functions from the two other files and run test cases on your functions by calling them with various inputs.  We will not use this file for grading and is only for your testing purposes to make sure:
// 1. Your functions in your 2 files are exporting correctly.
// 2. They are returning the correct output based on the input supplied (throwing errors when you're supposed to, returning the right results etc..).
// Note: 
// 1. You will need that calls your functions like the example below. 
// 2. Do not create any other files beside the 'package.json' - meaning your zip should only have the files and folder in this stub and a 'package.json' file.
// 3. Submit all files (including package.json) in a zip with your name in the following format: LastName_FirstName.zip.
// 4. DO NOT submit a zip containing your node_modules folder.
import * as authors from "./authors.js";
import * as books from "./books.js";
    try{
        const authorData = await authors.getAuthorById("1871e6d7-551f-41cb-9a07-08240b86c95c");
        console.log (await authorData);
    }catch(e){
        console.log (e);
    }
    try{
        const agebooks = await authors.searchAuthorsByAge(40);
        console.log (agebooks);
    }catch(e){
        console.log (e);
    }
    try{
        const test = await authors.getBooksByState("NJ");
        console.log(test);
    }catch(e){
        console.log (e);
    }
    try{
        const test = await authors.searchAuthorsByHometown("  helloworld   ", "zz");   // If no such town in author.js, throw error or retun empty array.
        console.log(test);
    }catch(e){
        console.log (e);
    }
    try{
        const test = await authors.getAuthorBooks("69b3f32f-5690-49d1-b9a6-9d2dd7d6e6cd");   
        console.log(test);
    }catch(e){
        console.log (e);
    }
    try{
       const test = await books.getBookById("99875ad8-a1d3-42ea-8d7b-5ac4cd4edb9e");  
       console.log(test);
       
    }catch(e){
        console.log (e);
    }
   try{
       const test = await books.booksByPageCount(100000,150000); // If no book, error or empty array? 
       console.log(test);
       
   }catch(e){
        console.log (e);
   }
   try{
       const test = await books.sameYear(2000);   
       console.log(test);
       
   }catch(e){
       console.log (e);
   }
   try{
       const test = await books.minMaxPrice();  
       console.log(test);
       
   }catch(e){
       console.log (e);
   }
   try{
       const test = await books.searchBooksByPublisher("mynte");  
       console.log(test);
       
   }catch(e){
       console.log (e);
    }