//Here you will import route files and export them as used in previous labs
// const booksRoutes = require('./books');
// const reviewsRoutes = require('./reviews');

import productRoutes from './movies.js';
// import reviewsRoutes from './reviews.js';

const constructorMethod = (app) => {
  app.use('/', productRoutes);
//  app.use('/reviews', reviewsRoutes);

  app.use('*', (req, res) => {
    return res.status(404).json({error: 'Not found'});
  });
};

export default constructorMethod;