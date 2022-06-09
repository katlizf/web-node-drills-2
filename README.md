# Node Drills 2
Introduction- The purpose of this exercise is to have practice building a full-stack application on your own! In this exercise, you will:

1. Build a server from scratch
2. Install and utilize the following packages: dotenv, chalk, morgan, nvm, debug, express, nodemon
3. Practice using express methods: set, use, get, post, put, delete
4. Practice using express response methods: json, send, sendStatus
5. Connect a database to your server
6. Practice debugging Node.js with Chrome DevTools

# Part 1: Front end
It is extremely important that you know what you are building prior to building it. Otherwise this exercise is pointless.

The client (or front end) has already been built by another developer. They have given you their front end code so that you can see what they have built out already. It is essential that you know what is happening on the client app (front end) so that you know what information you will be expecting on the backend.

1. Open the client folder, and run npm start to run the front end locally and see what this looks like.
2. Walk through the code to make sense of each piece and what it is doing.
3. This is an app that can display a list of user inputs. Here is a basic run down of features:

    * The user can type information into the input box. Each keystroke in the input box will trigger 2 things:

    * The input box’s value will be saved to state input

    * A GET request will be made to the server at the route /api/info the response.data will be saved to state serverInfo

    * The user can click the submit button which will trigger a POST request at the route /api/info

# Part 2: Database Setup
We have a front end. The two remaining pieces are a Database to store the information, and a server to handle the requests.

Let’s build a Postgresql database with Heroku who will spin one up for us for free.

1. Sign into Heroku.com
2. Click New > Create New App
3. Type in the name of your app and click Create app
4. Click on the Resources tab
5. Type in the Add-ons search bar Heroku Postgres
6. Click on the option that appears Heroku Postgres
7. Click on Submit Order Form
8. Click on the Heroku Postgres link below the Add-ons search bar
9. This is your database! To see how to connect to it click on the Settings tab.
10. Click on View Credentials…
11. There are 3 ways displayed here that you can connect to your database.

    * Host + Database + User + Port + Password
    * URI
    * Heroku CLI

You can use these to connect to this database from anywhere! Now we have a database all set up and ready to add data to it! …right?

Almost! This is a SQL database, and it needs to have a specific structure to it (tables with columns, and rows of data). Currently there are no tables or columns to store information. We will need to create some tables with columns!

Feel free to use any GUI or tool (such as SQL Tabs) you desire to query your database. I will be using: https://pgweb-demo.herokuapp.com/.

If you’d like to try it, follow these instructions:

However you’d like to access your database (SQL Tabs, pgweb, or something else) you should be able to run queries at this point! Run the following query to create an input table in your database.

    CREATE TABLE input(
        id SERIAL PRIMARY KEY,
        text VARCHAR(50)
    );

# Part 3: Server Setup
Create a folder in the root called server (This should be at the same exact level as client)

1. cd server
2. run npm init
3. Install some dependencies (packages) that will be useful to our server development.Make sure you are in your server folder when you install these packages! Use this command: npm i nodemon dotenv chalk morgan debug express cors.
4. You should have a node_modules folder, a package.json file, and a package-lock.json file in your server folder now.
5. Create a file in the root of the server folder called .gitignore. In this file type in the following: .env and /node_modules.
6. Create a file in the root of the server folder called .env. In this file follow this format:

        CONNECTION_STRING = postgres://somestring
        PORT = 3035
        .env

7. Make sure you copy your URI over from Heroku for your CONNECTION_STRING. And make sure you use port 3035 since that is the port the front end will be using!

# Part 4: Basic Server

1. Create a file named index.js in your server folder.
2. Add your .env values to the global process.env object using the dotenv confiuration method.
3. Grab the PORT value from the process.env object and save it to the variable port.
4. Save the express package equal to the variable express. Then invoke express and save the result to the variable app.
5. Using express’s middleware method invoke the following express.json().
6. Require the cors package and save it to the variable cors. Using express’s middleware method invoke cors.
7. Use the .listen method to listen for requests.
8. Start up your server to see if it is running with nodemon.
9. nodemon

Remember that nodemon takes the place of node, and that the file path and your location are very important. Make sure you are in your server folder when you run nodemon using:

    npx nodemon index.js OR nodemon index.js

Remember that you can create a script in your package.json to automate this script in some way if you would like to.

# Part 5: Controller

Let’s set up our endpoints and their handler functions. Feel free to use a previous lab (such as SQL in Practice as an example).

1. Create a file called controller.js in your server folder.
2. Install sequelize, pg, and pg-hstore and set up the connection to your database in your controller file.
3. In index.js, write a get endpoint that will send the user information from the database. The endpoint should be /api/info.
4. In your controller file, write the handler function that will run when that endpoint is hit.
5. Back in index.js, write a post endpoint (also at /api/info) for the user to be able to save information to the database.
6. Write the appropriate handler function in your controller file.

# Part 6: Postman Testing

Test your endpoints with postman to make sure that they work!

1. Make sure your server is running and open up Postman to test your 2 endpoints.
2. When hitting your GET endpoint you should get back an array of objects.
3. When hitting your POST endpoint you should get back an empty array. And the data should be visible in your database. (Don’t forget to send a body with an info property on it.)

# Part 7: Front End & Other Packages

1. Keep the back end running and start the front end up as well. See if your fullstack app works!
2. Take some time to implement chalk, morgan, and debug into your server.
3. Take some time to use Node.js with Chrome DevTools

When you’re done, push your code to GitHub.