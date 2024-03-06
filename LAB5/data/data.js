/*Here, you can export the data functions
to get the comapnies, people, getCompanyByID, getPersonById.  You will import these functions into your routing files and call the relevant function depending on the route. 
*/

import axios from "axios";



// const {people} = await axios.get('https://gist.githubusercontent.com/graffixnyc/448017f5cb43e0d590adb744e676f4b5/raw/495e09557914db5d2f40141aaef60113eb19bb41/people.json');
// const pData = people.data


 



export const getCompanies = async () => {
    
        const response = await axios.get('https://gist.githubusercontent.com/graffixnyc/90b56a2abf10cfd88b2310b4a0ae3381/raw/f43962e103672e15f8ec2d5e19106e9d134e33c6/companies.json');
        return response.data
    
};

// const companyData= await getCompanies()
const cData= await getCompanies()
// const cDataLen = await cData.length();



export const getPeople = async () => {
    
    const people = await axios.get('https://gist.githubusercontent.com/graffixnyc/448017f5cb43e0d590adb744e676f4b5/raw/495e09557914db5d2f40141aaef60113eb19bb41/people.json');
    return people.data
};

const pData= await getPeople()

export const getCompanyById = async (id) => {
    // id =id.trim()
    if(!id) throw "you must provide valid id"
    if(typeof id !== 'string' || id.trim ==='') throw " not valid"
    for (let i = 0; i < cData.length; i++) {
        if (cData[i].id === id) {
            return cData[i];
        } 
    }
   
    
        
        
     
     throw "Error: Not found"
 }


export const getPersonById = async (id) => {
    if(!id) throw "you must provide valid id"
    if(typeof id !== 'string' || id.trim ==='') throw " not valid"
    for (let i = 0; i < pData.length; i++) {
        if (pData[i].id === id) {
            return pData[i];
        } 
    }throw "Error: Not found" 
}


// console.log(getPersonById("12b7c9b7-c803-4d68-add1-20eb98d2c488"))