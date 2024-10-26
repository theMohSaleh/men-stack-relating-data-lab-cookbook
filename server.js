const express = require("express");
const morgan = require("morgan");
const methodOverride = require("method-override");
const session = require('express-session');
const MongoStore = require("connect-mongo");
const AddUserToViews = require('./middleware/addUserToViews.js');
const isSignedIn = require("./middleware/is-signed-in.js");
const path = require('path');
require("dotenv").config();
require('./config/database')

// Controllers 

const authController = require("./controllers/auth.js");
const recipesController = require("./controllers/recipes.js");
const ingredientsController = require("./controllers/ingredients.js");

const app = express();

// Set the port from environment variable or default to 3000
const port = process.env.PORT ? process.env.PORT : "3000";

app.listen(port, () => {
    console.log(`The express app is ready on port ${port}!`);
});

// Middleware

// Middleware to parse URL-encoded data from forms
app.use(express.urlencoded({ extended: false }));
// Middleware for using HTTP verbs such as PUT or DELETE
app.use(methodOverride("_method"));
// Morgan for logging HTTP requests
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'public')));
app.use(
    session({
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: true,
        store: MongoStore.create({
            mongoUrl: process.env.MONGODB_URI,
        }),
    })
);

app.use("/auth", authController);

app.use(AddUserToViews);


// Public Routes

// GET /
app.get("/", async (req, res) => {
    res.render("index.ejs");
});

app.use('/recipes', isSignedIn, recipesController)
app.use('/ingredients', isSignedIn, ingredientsController)