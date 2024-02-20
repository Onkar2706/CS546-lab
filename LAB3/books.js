//TODO EXPORT AND IMPLEMENT THE FOLLOWING FUNCTIONS IN ES6 FORMAT
//Books data link: https://gist.githubusercontent.com/graffixnyc/3381b3ba73c249bfcab1e44d836acb48/raw/e14678cd750a4c4a93614a33a840607dd83fdacc/books.json
import axios from "axios";
const fetchAuthor = await axios.get('https://gist.githubusercontent.com/graffixnyc/a086a55e04f25e538b5d52a095fe4467/raw/e9f835e9a5439a647a24fa272fcb8f5a2b94dece/authors.json')
const authors = fetchAuthor.data

const fetchBook = await axios.get('https://gist.githubusercontent.com/graffixnyc/3381b3ba73c249bfcab1e44d836acb48/raw/e14678cd750a4c4a93614a33a840607dd83fdacc/books.json')
const books = fetchBook.data

export const getBookById = async (id) => {
    id =id.trim();
    if(!id  || typeof id !== 'string') throw "ID is not available"
    if(id.trim()==='' ) throw "You passed empty value"

    const book = books.find(book => book.id === id)
    if(!book) throw "Book is not available"

    return book

};

export const booksByPageCount = async (min, max) => {
    if(min === undefined || max === undefined) throw "value is not vanish"
    if(typeof min !== 'number' || typeof max !== 'number') throw "Please enter only number"
    if(max<=min) throw "Max number should be bigger"
    if(!Number.isInteger(min) || !Number.isInteger(max)) throw "please enter whole number"
    if(min<0 || max<0) throw "number should be bigger than 0"

    const vBooks = []
    for (let index = 0; index < books.length; index++) {
        const element5 = books[index];
        if (element5.pageCount >= min && element5.pageCount <= max) {
            vBooks.push(element5);
        
    }
}

    const booksiDs=[]
    for (let index = 0; index < vBooks.length; index++) {
        const element6 = vBooks[index];
        booksiDs.push(element6.id)
        
    }

    return booksiDs
 

};

export const sameYear = async (year) => {

    if(year==undefined) throw "not valid parameter"
    if(year<=0) throw "Enter valid year"
    if(!Number.isInteger(year)) throw "Year must be valid parameter"

    const bookYear =[]

    for (let index = 0; index < books.length; index++) {
        //const element7 = books[index];
        const publicationYear = new Date(books[index].publicationDate).getFullYear();
        if (publicationYear === year) {
        bookYear.push(books[index]);
    }
}
     return bookYear
        
    

    f

};

export const minMaxPrice = async () => {
    let lowPrice = 100000
    let highPrice = 0
    let lowBooks =[]
    let highPriceBook=[]

    for(const book of books){
        const value = book.price;
        if(value<lowPrice){
            lowPrice = value
            lowBooks =[book.id]

        }else if(value === lowPrice){
            lowBooks.push(book.id)

        }

        if(value>highPrice){
            highPrice = value
            highPriceBook =[book.id]
        }else if (value === highPrice){
            highPriceBook.push(book.id)

        }
    }
    return{cheapest: lowBooks,mostExpensive:highPriceBook}
};

export const searchBooksByPublisher = async (publisher) => {
    if(!publisher ) throw "Enter a value"
    if (typeof publisher !== 'string') throw "Please enter valid name"


    const sameBooks = books.filter(book => book.publisher === publisher);
    if(sameBooks.length === 0) throw "no books"


    const resultBooks = sameBooks.map(book=>book.id)

    return resultBooks
};
