import { create, getAll,remove, rename,get} from './data/products.js';
import { dbConnection, closeConnection } from './config/mongoConnection.js';


const db = await dbConnection();
await db.dropDatabase();

try {
            let TV = await create(
                "83 inch LG C3 OLED TV",
                "The advanced LG OLED evo C-Series is better than ever. The LG OLED evo C3 is powered by the next-gen a9 AI Processor Gen6—exclusively made for LG OLED—for ultra-realistic picture and sound. And the Brightness Booster improves brightness so you get luminous picture and high contrast, even in well-lit rooms.* AI-assisted deep learning analyzes what you're watching to choose the best picture and sound setting for your content. The LG OLED evo C3 not only performs great, but looks great as well. With an almost invisible bezel, it will blend into the background for a seamless look. When you're finished watching, display paintings, photos and other content to blend the LG OLED evo C3 into your space even more. But that's not all. Experience less searching and more streaming, thanks to the next generation of AI technology from LG webOS 23. Every LG OLED comes loaded with Dolby Vision for extraordinary color, contrast and brightness, plus Dolby Atmos** for wrap-around sound. And LG's FILMMAKER MODE allows you to see films just as the director intended. Packed with gaming features, the LG OLED evo C-Series comes with everything you need to win like a 0.1ms response time, native 120Hz refresh rate and four HDMI 2.1 inputs. *Based on LG internal testing: 55/65/77/83 LG OLED evo C3 models are brighter than non-OLED evo B3 models and excludes the 42 and 48 LG OLED evo C3. **Dolby, Dolby Atmos and the double-D symbol are registered trademarks of Dolby Laboratories.",
                "OLED83C3PUA",
                4757.29,
                "LG",
                "http://www.philips.com",
                ['TV', 'Smart TV', 'OLED', 'LG', 'Big Screen', '83 Inch'],
                ["   Electronics  ", "Television & Video", "Televisions", "OLED TVs"],
                "02/27/2024",
                false
            );
            
            console.log('TV product has been added');
            console.log(TV);
        } catch (e) {
            console.log(e);
        }

 await closeConnection()