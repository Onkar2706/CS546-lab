/*

Create a product of your choice.
Log the newly created product. (Just that product, not all products)
Create another product of your choice.
Query all products, and log them all
Create the 3rd product of your choice.
Log the newly created 3rd product. (Just that product, not all product)
Rename the first product
Log the first product with the updated name. 
Remove the second product you created.
Query all products, and log them all
Try to create a product with bad input parameters to make sure it throws errors.
Try to remove a product that does not exist to make sure it throws errors.
Try to rename a product that does not exist to make sure it throws errors.
Try to rename a product passing in invalid data for the newProductName parameter to make sure it throws errors.
Try getting a product by ID that does not exist to make sure it throws errors.

*/
import { create, getAll,remove, rename,get} from './data/products.js';
import { dbConnection, closeConnection } from './config/mongoConnection.js';

const db = await dbConnection();
await db.dropDatabase();

// (async () => {
//     // const db = await dbConnection();
//     // await db.dropDatabase();

//     console.log("Let's add some products");

//     try {
//         let TV = await create(
//             "83 inch LG C3 OLED TV",
//             "The advanced LG OLED evo C-Series is better than ever. The LG OLED evo C3 is powered by the next-gen a9 AI Processor Gen6—exclusively made for LG OLED—for ultra-realistic picture and sound. And the Brightness Booster improves brightness so you get luminous picture and high contrast, even in well-lit rooms.* AI-assisted deep learning analyzes what you're watching to choose the best picture and sound setting for your content. The LG OLED evo C3 not only performs great, but looks great as well. With an almost invisible bezel, it will blend into the background for a seamless look. When you're finished watching, display paintings, photos and other content to blend the LG OLED evo C3 into your space even more. But that's not all. Experience less searching and more streaming, thanks to the next generation of AI technology from LG webOS 23. Every LG OLED comes loaded with Dolby Vision for extraordinary color, contrast and brightness, plus Dolby Atmos** for wrap-around sound. And LG's FILMMAKER MODE allows you to see films just as the director intended. Packed with gaming features, the LG OLED evo C-Series comes with everything you need to win like a 0.1ms response time, native 120Hz refresh rate and four HDMI 2.1 inputs. *Based on LG internal testing: 55/65/77/83 LG OLED evo C3 models are brighter than non-OLED evo B3 models and excludes the 42 and 48 LG OLED evo C3. **Dolby, Dolby Atmos and the double-D symbol are registered trademarks of Dolby Laboratories.",
//             "OLED83C3PUA",
//             4757.29,
//             "LG",
//             "http://www.lgelectronics.com",
//             ["TV", "Smart TV", "OLED", "LG", "Big Screen", "83 Inch"],
//             ["Electronics", "Television & Video", "Televisions", "OLED TVs"],
//             "02/27/2023",
//             false
//         );
        
//         console.log('TV product has been added');
//         console.log(TV);
//     } catch (e) {
//         console.log(e);
//     }


//     try {
//       let TV = await create(
//           "Philips",
//           "The advanced LG OLED evo C-Series is better than ever. The LG OLED evo C3 is powered by the next-gen a9 AI Processor Gen6—exclusively made for LG OLED—for ultra-realistic picture and sound. And the Brightness Booster improves brightness so you get luminous picture and high contrast, even in well-lit rooms.* AI-assisted deep learning analyzes what you're watching to choose the best picture and sound setting for your content. The LG OLED evo C3 not only performs great, but looks great as well. With an almost invisible bezel, it will blend into the background for a seamless look. When you're finished watching, display paintings, photos and other content to blend the LG OLED evo C3 into your space even more. But that's not all. Experience less searching and more streaming, thanks to the next generation of AI technology from LG webOS 23. Every LG OLED comes loaded with Dolby Vision for extraordinary color, contrast and brightness, plus Dolby Atmos** for wrap-around sound. And LG's FILMMAKER MODE allows you to see films just as the director intended. Packed with gaming features, the LG OLED evo C-Series comes with everything you need to win like a 0.1ms response time, native 120Hz refresh rate and four HDMI 2.1 inputs. *Based on LG internal testing: 55/65/77/83 LG OLED evo C3 models are brighter than non-OLED evo B3 models and excludes the 42 and 48 LG OLED evo C3. **Dolby, Dolby Atmos and the double-D symbol are registered trademarks of Dolby Laboratories.",
//           "OLED83C3PUA",
//           4787.29,
//           "Philips",
//           "http://www.philips.com",
//           ["TV", "Smart TV", "OLED", "LG", "Big Screen", "83 Inch"],
//           ["Electronics", "Television & Video", "Televisions", "OLED TVs"],
//           "02/27/2023",
//           false
//       );
//       console.log('TV product has been added');
//       console.log(TV);
//   } catch (e) {
//       console.log(e);
//   }

//     // await closeConnection();
//     console.log('Done!');

//     console.log('Lets now get all products from the DB');

//     try {
//       const productList = await getAll();
//       console.log(productList);
//     } catch (e) {
//         console.log(e);
//     }
//     await closeConnection();
//     console.log('All products fetched!');
// })();


// console.log('\n','\n','\n','\n','\n','\n','\n')

// async function main() {
//   try {
//       // Create the first product
//       const product1 = await create(
//           "Apple iPhone 14 Pro",
//           "The all-new iPhone 14 Pro comes with an advanced A16 chip, stunning OLED display, and upgraded camera system.",
//           "IP14P-256GB",
//           1299.99,
//           "Apple",
//           "http://www.apple.com",
//           ["iPhone", "Smartphone", "Apple"],
//           ["Electronics", "Mobile Phones"],
//           "2023-09-15",
//           false
//       );
//       console.log("First product created:");
//       console.log(product1);

//       // Create the second product
//       const product2 = await create(
//           "Samsung Galaxy S23",
//           "Experience the next generation of mobile technology with the Samsung Galaxy S23. Featuring a revolutionary foldable design and powerful performance.",
//           "SGS23-128GB",
//           1399.99,
//           "Samsung",
//           "http://www.samsung.com",
//           ["Galaxy", "Smartphone", "Samsung"],
//           ["Electronics", "Mobile Phones"],
//           "2023-10-01",
//           false
//       );
//       console.log("Second product created:");
//       console.log(product2);

//       // Query all products and log them
//       const allProducts = await getAll();
//       console.log("All products:");
//       console.log(allProducts);

//       // Create the third product
//       const product3 = await create(
//           "Sony PlayStation 6",
//           "Immerse yourself in the world of gaming with the Sony PlayStation 6. Featuring stunning graphics, lightning-fast SSD storage, and innovative new controllers.",
//           "PS6-1TB",
//           499.99,
//           "Sony",
//           "http://www.playstation.com",
//           ["PlayStation", "Gaming", "Sony"],
//           ["Electronics", "Gaming Consoles"],
//           "2023-11-20",
//           false
//       );
//       console.log("Third product created:");
//       console.log(product3);

//       // Rename the first product
//       const renamedProduct1 = await rename(product1._id, "Apple iPhone 14 Pro Max");
//       console.log("First product after renaming:");
//       console.log(renamedProduct1);

//       // Remove the second product
//       await remove(product2._id);
//       console.log("Second product removed.");

//       // Query all products again and log them
//       const updatedProductsList = await getAll();
//       console.log("Updated products list after removal:");
//       console.log(updatedProductsList);

//       // Try to create a product with bad input parameters
//       await create("", "", "", -100, "", "", [], [], "", true);

//       // Try to remove a product that does not exist
//       await remove("invalidId");

//       // Try to rename a product that does not exist
//       await rename("invalidId", "New Name");

//       // Try to rename a product passing in invalid data for the newProductName parameter
//       await rename(product3._id, 123);

//       // Try getting a product by ID that does not exist
//       await get("invalidId");
//   } catch (error) {
//       console.error("Error:", error);
//   }
// }

// main();




(async () => {
  
    // Step 1: Create a product of your choice
    const product1 = await create(
      'Product 1',
      'Description for Product 1',
      'P123',
      49.99,
      'Manufacturer 1',
      'http://www.manufacturer1.com',
      ['keyword1', 'keyword2'],
      ['category1', 'category2'],
      '01/01/2023',
      false
    );
    
    console.log('Step 1: Newly created product:', product1);
    const PId = product1._id

    // Step 2: Query all products and log them all
    const allProductsStep2 = await getAll();
    console.log('Step 2: All Products:', allProductsStep2);

    // Step 3: Create another product of your choice
    const product2 = await create(
      'Product 2',
      'Description for Product 2',
      'P456',
      29.99,
      'Manufacturer 2',
      'http://www.manufacturer2.com',
      ['keyword3', 'keyword4'],
      ['category3', 'category4'],
      '02/01/2023',
      false
    );
    console.log('Step 3: Newly created product:', product2);

    // Step 4: Query all products and log them all
    const allProductsStep4 = await getAll();
    console.log('Step 4: All Products:', allProductsStep4);

    // Step 5: Create the 3rd product of your choice
    const product3 = await create(
      'Product 3',
      'Description for Product 3',
      'P789',
      99.99,
      'Manufacturer 3',
      'http://www.manufacturer3.com',
      ['keyword5', 'keyword6'],
      ['category5', 'category6'],
      '03/01/2023',
      false
    );
    console.log('Step 5: Newly created product:', product3);

    // Step 6: Rename the first product
    console.log("Step 6: Renaming the first product...");
    const renamedProduct = await rename(product1._id, 'New Product Name');
    console.log('Step 6: First product with updated name:', renamedProduct);

    // Step 7: Remove the second product you created
    console.log("Step 7: Removing the second product...");
    const removedProduct = await remove(PId);
    console.log('Step 7: Product removed:', removedProduct);

    // Step 8: Query all products and log them all
    const allProductsStep8 = await getAll();
    console.log('Step 8: All Products:', allProductsStep8);

    // Step 9: Try to create a product with bad input parameters
    console.log('Step 9: Attempting to create a product with bad input parameters...');
    try {
      await create(
        '',
        'Description for Bad Product',
        'P999',
        -10, // Invalid price
        'Bad Manufacturer',
        'badwebsite.com', // Invalid website
        [],
        ['Bad Category'],
        '2024-02-27', // Invalid date format
        true
      );
      
    } catch (error) {
      console.log(error)
      
    }
    

    // Step 10: Try to remove a product that does not exist
    try{
    console.log('Step 10: Attempting to remove a product that does not exist...');
    await remove('nonexistentID');
    }
    catch(error){
      console.log(error)
    }

    // Step 11: Try to rename a product that does not exist
    try{
    console.log('Step 11: Attempting to rename a product that does not exist...');
    await rename('nonexistentID', 'New Name');
    }
    catch(error){
      console.log(error)
    }

    // Step 12: Try to rename a product passing in invalid data for the newProductName parameter
    try{
    console.log('Step 12: Attempting to rename a product with invalid new product name...');
    await rename(product3._id, ''); // Empty name
    }
    catch(error){
      console.log(error)
    }

    // Step 13: Try getting a product by ID that does not exist
    try{
    console.log('Step 13: Attempting to get a product by ID that does not exist...');
    await get('nonexistentID');
    } catch(error){
      console.log(error)
    }


    try{
      console.log('Step 13: Attempting to get a product by ID that does not exist...');
      await get(PId);
      } catch(error){
        console.log(error)
      }


    
  
  
  
  


})();

//  closeConnection()

