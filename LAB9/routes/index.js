//Here you will require route files and export them as used in previous labs.

import peopleRoutes from './textdecoder.js';//
const constructorMethod = (app) => {
    app.use('/',peopleRoutes)
    app.use('*',(req,res)=>{
      res.redirect('/')
    })
  };
  
  
  
  
export default constructorMethod;