//import express and express router as shown in lecture code and worked in previous labs.  Import your data functions from /data/movies.js that you will call in your routes below
import  express  from "express";
import { searchMovieById,searchMoviesByName } from "../data/movies.js";


const router = express.Router();


router.route('/')
.get(async (req, res) => {
  //code here for GET will render the home handlebars file
  res.render('home')
});

router.route('/searchmovies').post(async (req, res) => {
  //code here for POST this is where your form will be submitting searchMoviesByName and then call your data function passing in the searchMoviesByName and then rendering the search results of up to 20 Movies.
  const term = req.body.searchMoviesByName;
  // POST http://localhost:3000/search
  if (term.trim().length == 0) {
    res.status(400).render('errors', { class: "error", message: "Search term keyword must be a non-empty string." });
    return;
  }
  
    // try to either render error HTML page if not found OR return the search results 
    try {
      const movies = await searchMoviesByName(term);
      res.render('movieSearchResults', { title: "Movies Found", searchMoviesByName: term, movies })
  } catch (e) {
      res.status(500).json({ error: e });
  }
});


// GET http://localhost:3000/shows/{id}
router.route('/movie/:id').get(async (req, res) => {
  //code here for GET a single movie
  const id = req.params.id;
  if (!id) { // check if id is given
    res.status(400).render({ class: "error", message: "No valid id is given." });
    return;
}
if (isNaN(id)) { // check if id is not a number
    res.status(400).render({ class: "error", message: "No valid id is given." });
    return;
}
try { // try to look for show by id
    const { data } = await axios.get(`http://www.omdbapi.com/?apikey=CS546&s=${title}`);
    res.render('views/movieById', { title: data.name, movieInfo: data, summary: data.summary.replace(/(<([^>]+)>)/ig, '') });
    //trim HTML tags: found on GeeksforGeeks (https://www.geeksforgeeks.org/how-to-strip-out-html-tags-from-a-string-using-javascript/#:~:text=To%20strip%20out%20all%20the,innerText%20property%20from%20HTML%20DOM.)
} catch (e) { // error 404 - no show found
    res.status(404).render('pages/errors', { class: "error", message: "No show found for given id." });
}
});

export default router;


//export router
