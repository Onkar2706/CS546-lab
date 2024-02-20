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

       

        const author = authors.find(function(author){
            return author.id === id;
        })

        if(!author) throw  "couldn't find author"

        return author


        
    } catch (error) {
        throw "author not found"
    }
        
    
        

};



export const searchAuthorsByAge = async (age) => {
    if(!Number.isInteger(age)) throw "enter age in number"
    if(age === 'integer') throw "enter a integer"
    if(age>100 || age < 1) throw "not a valid number"
    if(age === undefined || age === null) throw "age not defined"

    try{
        const fetch = await axios.get('https://gist.githubusercontent.com/graffixnyc/a086a55e04f25e538b5d52a095fe4467/raw/e9f835e9a5439a647a24fa272fcb8f5a2b94dece/authors.json')
        const authors = fetch.data

    const extractAuthor = authors.filter(function(author){
        const aAge = new Date().getFullYear() - new Date(author.date_of_birth).getFullYear();
        return aAge>= age

    })

    const aNames = extractAuthor.map(author =>{
        return `${author.first_name} ${author.last_name}`
    })

    if(aNames.length === 0) throw "author not present"

    return aNames

    
}
catch(error){
    throw "Data coundnt find"

}



};

const getBooksByState = async (state) => {

    if(state === undefined) throw "Please enter valid state"
    if(state !== 'string') throw "Please give valid string"
    if(state.length !== 2)  throw "Please enter only State shortforms"

};

const searchAuthorsByHometown = async (town, state) => {};

const getAuthorBooks = async (authorid) => {};
