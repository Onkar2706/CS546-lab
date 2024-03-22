// This file should set up the express server as shown in the lecture code
import { create,get,getAll, remove, update} from './data/products.js';
import { createReview,getAllReviews,getReview ,removeReview} from './data/reviews.js';
import { dbConnection, closeConnection } from './config/mongoConnection.js';
import { ObjectId } from 'mongodb';




// import express from 'express';
// const app = express();
// import configRoutesFunction from './routes/index.js';

// configRoutesFunction(app);

// app.listen(3000, () => {
//   console.log("We've now got a server!");
//   console.log('Your routes will be running on http://localhost:3000');
// });

const db = await dbConnection();
await db.dropDatabase();

let PiD= null
let riD=null

try {
            let TV = await create(
                "83 inch LG C3 OLED TV",
                "The advanced LG OLED evo C-Series is better than ever. The LG OLED evo C3 is powered by the next-gen a9 AI Processor Gen6—exclusively made for LG OLED—for ultra-realistic picture and sound. And the Brightness Booster improves brightness so you get luminous picture and high contrast, even in well-lit rooms.* AI-assisted deep learning analyzes what you're watching to choose the best picture and sound setting for your content. The LG OLED evo C3 not only performs great, but looks great as well. With an almost invisible bezel, it will blend into the background for a seamless look. When you're finished watching, display paintings, photos and other content to blend the LG OLED evo C3 into your space even more. But that's not all. Experience less searching and more streaming, thanks to the next generation of AI technology from LG webOS 23. Every LG OLED comes loaded with Dolby Vision for extraordinary color, contrast and brightness, plus Dolby Atmos** for wrap-around sound. And LG's FILMMAKER MODE allows you to see films just as the director intended. Packed with gaming features, the LG OLED evo C-Series comes with everything you need to win like a 0.1ms response time, native 120Hz refresh rate and four HDMI 2.1 inputs. *Based on LG internal testing: 55/65/77/83 LG OLED evo C3 models are brighter than non-OLED evo B3 models and excludes the 42 and 48 LG OLED evo C3. **Dolby, Dolby Atmos and the double-D symbol are registered trademarks of Dolby Laboratories.",
                "OLED83C3PUA",
                4757,
                "LG",
                "http://www.philips.com",
                ['TV', 'Smart TV', 'OLED', 'LG', 'Big Screen', '83 Inch'],
                ["   Electronics  ", "Television & Video", "Televisions", "OLED TVs"],
                "01/27/2024",
                false
            );
            
            // console.log('TV product has been added');
            // console.log(TV);
            PiD=TV._id
        } catch (e) {
            // console.log(e);
        }



try {
  // console.log(await getAll())
  // console.log("getallproduct.js")
  
} catch (error) {
  console.log(error)
  
}


try {
        let TV = await create(
            "Philips",
            "The advanced LG OLED evo C-Series is better than ever. The LG OLED evo C3 is powered by the next-gen a9 AI Processor Gen6—exclusively made for LG OLED—for ultra-realistic picture and sound. And the Brightness Booster improves brightness so you get luminous picture and high contrast, even in well-lit rooms.* AI-assisted deep learning analyzes what you're watching to choose the best picture and sound setting for your content. The LG OLED evo C3 not only performs great, but looks great as well. With an almost invisible bezel, it will blend into the background for a seamless look. When you're finished watching, display paintings, photos and other content to blend the LG OLED evo C3 into your space even more. But that's not all. Experience less searching and more streaming, thanks to the next generation of AI technology from LG webOS 23. Every LG OLED comes loaded with Dolby Vision for extraordinary color, contrast and brightness, plus Dolby Atmos** for wrap-around sound. And LG's FILMMAKER MODE allows you to see films just as the director intended. Packed with gaming features, the LG OLED evo C-Series comes with everything you need to win like a 0.1ms response time, native 120Hz refresh rate and four HDMI 2.1 inputs. *Based on LG internal testing: 55/65/77/83 LG OLED evo C3 models are brighter than non-OLED evo B3 models and excludes the 42 and 48 LG OLED evo C3. **Dolby, Dolby Atmos and the double-D symbol are registered trademarks of Dolby Laboratories.",
            "OLED83C3PUA",
            4787.29,
            "Philips",
            "http://www.philips.com",
            ["TV", "Smart TV", "OLED", "LG", "Big Screen", "83 Inch"],
            ["Electronics", "Television & Video", "Televisions", "OLED TVs"],
            "02/27/2023",
            false
        );
        // console.log('TV product has been added');
        // console.log(TV);
    } catch (e) {
        console.log(e);
    }


const allProductsStep4 = await getAll();
// console.log('Step 4: All Products:', allProductsStep4);


try {
  console.log("In Get ")

  console.log(await get(PiD))
  
} catch (error) {
  console.log(error)
  
}

console.log("product beofre update")
console.log(await get(PiD))
const renamedProduct1 = await update(PiD, 'New Product','New description for the product','123ABC',99.99,'New Manufacturer','http://www.newmanufacturer.com',['keyword1', 'keyword2'],['category1', 'category2'],'03/21/2024',false);
      // console.log("First product after renaming:");
      // console.log(renamedProduct1);






      try {
        // Define a sample product ID

        console.log("in create review")

        

        // Call the createReview function with sample data
        const newReview = await createReview(
            PiD,
            'Great product',
            'John Doe',
            'This is a great product!',
            4
        );

        // Log the newly created review
        console.log('##############################')
        // console.log(newReview);
        riD= newReview.reviews[0]["_id"]
        riD = riD.toString()
        console.log(riD)

        // You can add additional assertions here to verify the outcome
    } catch (error) {
        console.error('Error occurred:', error);
    }



    try {
      // Define a sample product ID

      

      // Call the createReview function with sample data
      const newReview = await createReview(
          PiD,
          'Great product',
          'John Doe1',
          'This is a great product1!',
          3.3
      );

      // Log the newly created review
      console.log('New review:', newReview);

      // You can add additional assertions here to verify the outcome
  } catch (error) {
      console.error('Error occurred:', error);
  }


  // try {

  //   const allreview = await getAllReviews(riD)
  //   console.log("All reviews",allreview)
    
  // } catch (error) {
  //   throw error
    
  // }


  try {
    const getreview =await getReview(riD)
    console.log("get review",getreview)
    

  } catch (error) {
    throw error
    
  }




  try {

    console.log("!!!!!!!!!!!!!!!")
    console.log(await get(PiD))
    console.log("************************")

    const removereview =await removeReview(riD)
    console.log("removed review",removereview)
    

  } catch (error) {
    throw error
    
  }



 await closeConnection()




 