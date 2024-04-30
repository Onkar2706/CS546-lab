//Here you will import route files and export the constructor method as shown in lecture code and worked in previous labs.
// import usersData  from "../data/users.js";
import authRoutes from "./auth_routes.js"

const constructorMethod = (app) => {
  app.use('/',authRoutes)
    app.use('/register', authRoutes);
    app.use('/login',authRoutes)
    app.use('/user',authRoutes)
   
  
    app.use('*', (req, res) => {
      return res.status(404).json({error: 'Not found'});
    });
  };
  
  export default constructorMethod;
