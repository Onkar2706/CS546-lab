//TODO EXPORT AND IMPLEMENT THE FOLLOWING FUNCTIONS IN ES6 FORMAT
//Authors data link: https://gist.githubusercontent.com/graffixnyc/a086a55e04f25e538b5d52a095fe4467/raw/e9f835e9a5439a647a24fa272fcb8f5a2b94dece/authors.json

//you must use axios to get the data
import axios from "axios";

export const getAuthorById = async (id) => {
    //if (id.trim === '') throw "Enter ID"
    if (id === 'string' || id.trim === '') throw "please enter valid id"
    try {

        const fetch = await axios.get('https://gist.githubusercontent.com/graffixnyc/a086a55e04f25e538b5d52a095fe4467/raw/e9f835e9a5439a647a24fa272fcb8f5a2b94dece/authors.json')
        const authors = fetch.data

        let author = authors.find(function(author){
            return author.id === id;
        })

        if(!author) throw  "couldn't find author"

        return author


        
    } catch (error) {
        throw "author not found"
    }
        
    
        

};



const searchAuthorsByAge = async (age) => {};

const getBooksByState = async (state) => {};

const searchAuthorsByHometown = async (town, state) => {};

const getAuthorBooks = async (authorid) => {};
