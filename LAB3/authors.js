//TODO EXPORT AND IMPLEMENT THE FOLLOWING FUNCTIONS IN ES6 FORMAT
//Authors data link: https://gist.githubusercontent.com/graffixnyc/a086a55e04f25e538b5d52a095fe4467/raw/e9f835e9a5439a647a24fa272fcb8f5a2b94dece/authors.json

//you must use axios to get the data
import axios from "axios";
const fetchAuthor = await axios.get('https://gist.githubusercontent.com/graffixnyc/a086a55e04f25e538b5d52a095fe4467/raw/e9f835e9a5439a647a24fa272fcb8f5a2b94dece/authors.json')
const authors = fetchAuthor.data

const fetchBook = await axios.get('https://gist.githubusercontent.com/graffixnyc/3381b3ba73c249bfcab1e44d836acb48/raw/e14678cd750a4c4a93614a33a840607dd83fdacc/books.json')
const books = fetchBook.data

const States = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];



export const getAuthorById = async (id) => {
    //if (id.trim === '') throw "Enter ID"
    if (id === 'string' || id.trim === '') throw "please enter valid id"
    try {


        // const fetch = await axios.get('https://gist.githubusercontent.com/graffixnyc/a086a55e04f25e538b5d52a095fe4467/raw/e9f835e9a5439a647a24fa272fcb8f5a2b94dece/authors.json')
        // const authors = fetch.data

       

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

export const getBooksByState = async (state) => {

    if(state === undefined) throw "Please enter valid state"
    if(typeof state !== 'string') throw "Please give valid string"
    if(state.length !== 2)  throw "Please enter only State shortforms"
    if(state.trim === '') throw "do not enter blank space"


    // const States = ["AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"];
    if(!States.includes(state.toUpperCase())) throw "State is not valid"

    const bookIdArray = [];
    for (let index = 0; index < authors.length; index++) {
        const element = authors[index];
        if (element.HometownState.toUpperCase() === state.toUpperCase()) {
            
            bookIdArray.push(...element.books);
        
    }
}
    const bookNames=[]
    for (let index = 0; index < books.length; index++) {
        const element1 = books[index];
        if (bookIdArray.includes(element1.id)) {
            bookNames.push(element1.title);
        
    }

}
return bookNames

};

export const searchAuthorsByHometown = async (town, state) => {

    if(typeof town !== 'string' || typeof state !== 'string') throw "Please give name of state and town"
    if(!town || !state) throw "Please give valid inputs"
    if(state.length !== 2) throw "Please give shortform of State"
    if(!States.includes(state.toUpperCase())) throw "State does not exist"

    const authorPair = []
    for (let index = 0; index < authors.length; index++) {
        const element2 = authors[index];
        if (element2.HometownCity.toLowerCase() === town.toLowerCase() && element2.HometownState.toUpperCase() === state.toUpperCase()) {
            authorPair.push(element2);
        }
    }
        
         


    const filteredNames =[]
    for (let index = 0; index < authorPair.length; index++) {
        const element3 = authorPair[index];
        filteredNames.push(element3.first_name + ' ' + element3.last_name);

        
    }
    filteredNames.sort()

    return filteredNames


}

export const getAuthorBooks = async (authorid) => {
    const author = await getAuthorById(authorid)
    console.log(author )
    const aBooks = []

    for (let index = 0; index < author.books.length; index++) {
        const element4 = author.books[index];
        
        const book = books.find(function(book) {
            return book.id === element4;
        });

        if(book) {
            aBooks.push(book.title)
        }

    }

    return aBooks
        
};
