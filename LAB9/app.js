/*
Here is where you'll set up your server as shown in lecture code and worked in previous labs.
Your server this week should not be doing any of the processing! Your server only exists to allow someone to get to the HTML Page and download the associated assets to run the text analyzer page.
*/
import express from 'express';
const staticdir = express.static('public')
const app = express();
import configRoutesFunction from './routes/index.js';


app.use('/public',staticdir)
app.use(express.json())
app.use(express.urlencoded({extended: true}))

configRoutesFunction(app);

app.listen(3000, () => {
  console.log("We've now got a server!");
  console.log('Your routes will be running on http://localhost:3000');
});