import axios from 'axios'

// const fetchMovies = await axios.get('http://www.omdbapi.com/?apikey=CS546&s={title}')
// const movies = fetchMovies.data

export const searchMoviesByName = async (title) => {
  /*Function to make an axios call to search the api and return up to 20 movies matching the title param
  API endpoint: http://www.omdbapi.com/?apikey=CS546&s={title}
  */

  if(title === undefined) throw "Please enter valid state"
  if(typeof title !== 'string') throw "Please give valid string"
  if(title.trim === '') throw "do not enter blank space"

 const fetchMovies = await axios.get(`http://www.omdbapi.com/?apikey=CS546&s=${title}`)
//  console.log(fetchMovies.Search)
  if (!fetchMovies) throw "Error no movie found"

  

  const result= fetchMovies.data;

  return result.Search;



};

// console.log(await searchMoviesByName('Batman'))

export const searchMovieById = async (id) => {
  /*Function to make an axios call to the the api matching the id
 API endpoint: http://www.omdbapi.com/?apikey=CS546&i={id}
  */

 if(id === undefined) throw "Please enter valid state"
  if(typeof id !== 'string') throw "Please give valid string"
  if(id.trim === '') throw "do not enter blank space"

  




};
