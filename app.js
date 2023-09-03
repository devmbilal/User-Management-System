require('dotenv').config();

const express = require('express');
const expressLayouts = require('express-ejs-layouts');

const app = express();
const port = process.env.PORT || 5000;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
 
 // Static Fields 
app.use(express.static('public'));

// Templating Engine   
app.use(expressLayouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

//Home
app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});