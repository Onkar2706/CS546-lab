//You will code the route in this file
//Lecture Code Refernece -> https://github.com/stevens-cs546-cs554/CS-546/tree/master/lecture_05/routes
import  express  from 'express';
import { getPeople, getPersonById } from '../data/data.js';



//You can import your getPeople() function in the /data/data.js file to return the list of people.  You can also import your getPersonById(id) function and call it in the :/id route.
const router = express.Router();

router
.route('/')
.get(async (req, res) => {
    try {
      const pList = await getPeople();
      return res.json(pList.data);
    } catch (e) {
      return res.status(500).send(e);
    }
  })
// Implement GET Request Method and send a JSON response  See lecture code!


router
.route('/:id')
.get(async (req, res) => {
    try {
      const pList = await getPersonById();
      return res.json(pList.data);
    } catch (e) {
      return res.status(500).send(e);
    }
  })
// Implement GET Request Method and send a JSON response See lecture code!

export default router;
