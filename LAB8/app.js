//Here is where you'll set up your server as shown in lecture code

// import * as  movies from "../data/movies"
import { searchMoviesByName } from "./data/movies";
try{
    const authorData = await searchMoviesByName('Reign of Judges: Title of Liberty - Concept Short"')
    console.log ( authorData);
}catch(e){
    console.log (e);
}