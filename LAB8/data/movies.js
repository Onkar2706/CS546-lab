import axios from 'axios'

const fetchMovies = await axios.get('http://www.omdbapi.com/?apikey=CS546&s={title}')
const movies = fetchMovies.data

export const searchMoviesByName = async (title) => {
  /*Function to make an axios call to search the api and return up to 20 movies matching the title param
  API endpoint: http://www.omdbapi.com/?apikey=CS546&s={title}
  */

  if(title === undefined) throw "Please enter valid state"
  if(typeof title !== 'string') throw "Please give valid string"
  if(title.trim === '') throw "do not enter blank space"

  const titles = []

  for (let index = 0; index < movies.length; index++) {
    const element4 = movies.title[index];
    
    const book = movies.find(function(book) {
        return book.id === element4;
    });

    if(book) {
        titles.push(book.title)
    }

}

return titles


};

export const searchMovieById = async (id) => {
  /*Function to make an axios call to the the api matching the id
 API endpoint: http://www.omdbapi.com/?apikey=CS546&i={id}
  */
};
