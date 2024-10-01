// //PART1
// // import our dependencies
// const express = require("express")
// const app = express()
// const mysql = require('mysql2');
// const dotenv = require('dotenv')


// // configure environment variables
// dotenv.config();

// // create a connection object
// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// })


// // test the connection
// db.connect((err) => {
//     // connection is not successful
//     if(err) {
//         return console.log("Error connecting to the database: ", err)
//     }

//     // connection is successful
//     console.log("Successfully connected to MySQL: ", db.threadId)
// })


// // this is not important for the assignment
// app.set('view engine', 'ejs');
// app.set('views', __dirname + '/views');



// // retrieve all patients
// app.get('/get-patients', (req, res) => {
//     const getPatients = "SELECT first_name, last_name FROM patients"
//     db.query(getPatients, (err, data) => {
//         // if I have an error 
//         if(err) {
//             return res.status(400).send("Failed to get patients", err)
//         }

//         // res.status(200).render('data', { data })
//         res.status(200).send(data)
//     })
// })


// // start and listen to the server
// app.listen(3300, () => {
//     console.log(`server is running on port 3300...`)
// })

//PART 2
// import our dependencies
// const express = require("express");
// const app = express();
// const mysql = require('mysql2');
// const dotenv = require('dotenv');

// // configure environment variables
// dotenv.config();

// // create a connection object
// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

// // test the connection
// db.connect((err) => {
//     if (err) {
//         return console.log("Error connecting to the database: ", err);
//     }
//     console.log("Successfully connected to MySQL: ", db.threadId);
// });

// // retrieve all providers
// app.get('/get-providers', (req, res) => {
//     const getProviders = "SELECT first_name, last_name, provider_specialty FROM providers";
//     db.query(getProviders, (err, data) => {
//         if (err) {
//             return res.status(400).send("Failed to get providers", err);
//         }
//         res.status(200).send(data);
//     });
// });

// // start and listen to the server
// app.listen(3300, () => {
//     console.log(`Server is running on port 3300...`);
// });

//PART3

// import our dependencies
// const express = require("express");
// const app = express();
// const mysql = require('mysql2');
// const dotenv = require('dotenv');

// // configure environment variables
// dotenv.config();

// // create a connection object
// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

// // test the connection
// db.connect((err) => {
//     if (err) {
//         return console.log("Error connecting to the database: ", err);
//     }
//     console.log("Successfully connected to MySQL: ", db.threadId);
// });

// // retrieve patients by first name
// app.get('/get-patients/:first_name', (req, res) => {
//     const firstName = req.params.first_name;
//     const getPatientsByFirstName = "SELECT first_name, last_name FROM patients WHERE first_name = ?";
//     db.query(getPatientsByFirstName, [firstName], (err, data) => {
//         if (err) {
//             return res.status(400).send("Failed to get patients", err);
//         }
//         res.status(200).send(data);
//     });
// });

// // start and listen to the server
// app.listen(3300, () => {
//     console.log(`Server is running on port 3300...`);
// });

//PART4
// // import our dependencies
// const express = require("express");
// const app = express();
// const mysql = require('mysql2');
// const dotenv = require('dotenv');

// // configure environment variables
// dotenv.config();

// // create a connection object
// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
// });

// // test the connection
// db.connect((err) => {
//     if (err) {
//         return console.log("Error connecting to the database: ", err);
//     }
//     console.log("Successfully connected to MySQL: ", db.threadId);
// });

// // retrieve providers by specialty
// app.get('/get-providers/:specialty', (req, res) => {
//     const specialty = req.params.specialty;
//     const getProvidersBySpecialty = "SELECT first_name, last_name, provider_specialty FROM providers WHERE provider_specialty = ?";
//     db.query(getProvidersBySpecialty, [specialty], (err, data) => {
//         if (err) {
//             return res.status(400).send("Failed to get providers", err);
//         }
//         res.status(200).send(data);
//     });
// });

// // start and listen to the server
// app.listen(3300, () => {
//     console.log(`Server is running on port 3300...`);
// });


