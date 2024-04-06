//import express and express router as shown in lecture code and worked in previous labs.  Import your data functions from /data/movies.js that you will call in your routes below
import  express  from "express";
import { searchMovieById,searchMoviesByName } from "../data/movies.js";


const router = express.Router();


router.route('/')
.get(async (req, res) => {
  //code here for GET will render the home handlebars file
  res.render('home',{title:"Movie Finder"})
});

router.route('/searchmovies').post(async (req, res) => {
  //code here for POST this is where your form will be submitting searchMoviesByName and then call your data function passing in the searchMoviesByName and then rendering the search results of up to 20 Movies.
  const term = req.body.searchMoviesByName;
  // POST http://localhost:3000/search
  if (term.trim().length === 0) {
    res.status(400).render('error', { class: "error", message: "Search term keyword must be a non-empty string." });
    return;
  }
  
    // try to either render error HTML page if not found OR return the search results 
    try {
      const movies = await searchMoviesByName(term);
      
      res.render('movieSearchResults', { title: "Movies Found", searchMoviesByName: term, movies })
  } catch (e) {
      res.status(404).render('error', { class: "error", message: "Movie not Found" });;
  }
});


// GET http://localhost:3000/shows/{id}
router.route('/movie/:id').get(async (req, res) => {
  //code here for GET a single movie
  let id = req.params.id;
  id = id.trim()
  if (!id) { // check if id is given
    res.status(400).render({ class: "error", message: "No valid id is given." });
    return;
}

try { // try to look for show by id
  id = id.trim()
  const movies = await searchMovieById(id);
    res.render('movieById', { title: `${movies.Title}`, movies })
    
} catch (e) { // error 404 - no show found
    res.status(404).render('error', { class: "error", message: "No show found for given id." });
}
});

export default router;


//export router
