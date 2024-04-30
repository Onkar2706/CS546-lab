/*
You can choose to define all your middleware functions here, 
export them and then import them into your app.js and attach them that that.
add.use(myMiddleWare()). you can also just define them in the app.js if you like as seen in lecture 10's lecture code example. If you choose to write them in the app.js, you do not have to use this file. 
*/

import session from "express-session";

const middleware = {};

middleware.logRequests = (req, res, next) => {
  console.log(`[${new Date().toUTCString()}]: ${req.method} ${req.originalUrl} (${req.session.user ? 'Authenticated User' : 'Non-Authenticated User'})`);

  if (req.originalUrl === '/' && req.session.user) {
    if (req.session.user.role === 'admin') {
      return res.redirect('/admin');
    } else if (req.session.user.role === 'user') {
      return res.redirect('/user');
    }
  } else if (req.originalUrl === '/' && !req.session.user) {
    return res.redirect('/login');
  } else {
    next();
  }
};

middleware.checkLoginRoute = (req, res, next) => {
  if (req.session.user) {
    if (req.session.user.role === 'admin') {
      return res.redirect('/admin');
    } else if (req.session.user.role === 'user') {
      return res.redirect('/user');
    }
  } else {
    next();
  }
};

middleware.checkRegisterRoute = (req, res, next) => {
  if (req.session.user) {
    if (req.session.user.role === 'admin') {
      return res.redirect('/admin');
    } else if (req.session.user.role === 'user') {
      return res.redirect('/user');
    }
  } else {
    next();
  }
};

middleware.checkUserRoute = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/login');
  } else {
    next();
  }
};

middleware.checkAdminRoute = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/login');
  } else if (req.session.user.role !== 'admin') {
    return res.status(403).send('You do not have permission to view this page. <a href="/user">Go to User Page</a>');
  } else {
    next();
  }
};

middleware.checkLogoutRoute = (req, res, next) => {
  if (!req.session.user) {
    return res.redirect('/login');
  } else {
    next();
  }
};

export default middleware;
