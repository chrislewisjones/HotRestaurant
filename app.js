// Dependencies
// =============================================================
var express = require("express");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Star Wars Characters (DATA)
// =============================================================
var reservations = [
    {
        name: "Mike",
        phone_number: 773 - 423 - 3333,
        email: "mike@mike.com",
        uniqueID: 2000
    },
    {
        name: "john",
        phone_number: 773 - 423 - 3333,
        email: "john@john.com",
        uniqueID: 2000
    },
    {
        name: "Lee",
        phone_number: 773 - 423 - 3333,
        email: "lee@lee.com",
        uniqueID: 2000
    }
];
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/reserve", function (req, res) {
    res.sendFile(path.join(__dirname, "reservations.html"));
});

// Displays all characters
app.get("/api/reservations", function (req, res) {
    return res.json(characters);
});

// Displays a single character, or returns false
// app.get("/api/characters/:character", function (req, res) {
//     var chosen = req.params.character;

//     console.log(chosen);

//     for (var i = 0; i < characters.length; i++) {
//         if (chosen === characters[i].routeName) {
//             return res.json(characters[i]);
//         }
//     }

//     return res.json(false);
// });

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function () {
    console.log("App listening on PORT " + PORT);
});
