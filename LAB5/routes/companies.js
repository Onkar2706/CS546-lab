//You will code the route in this file
//Lecture Code Refernece -> https://github.com/stevens-cs546-cs554/CS-546/tree/master/lecture_05/routes

//You can import your getComapnies() function in the /data/data.js file 3 to return the list of comapnies and call it in the /companies route.  You can also import your getComapny(id) function and call it in the :/id route.

const router = express.Router();

router.route('/');
// Implement GET Request Method and send a JSON response See lecture code!

router.route('/:id');
//Implement GET Request Method and send a JSON response See lecture code!

export default router;
