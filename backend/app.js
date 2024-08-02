// const express = require('express');
// const app = express();
// const port = 3000;
// const mongoose = require("mongoose");
// // const { addUser, getUsers } = require("./handlers/userHandler"); // This remains the same
// const userRoutes = require("./routes/user-route") ;
// var cors = require("cors");

// app.use(cors());
// app.use(express.json()); // Don't forget to add this to parse JSON request bodies



// app.get('/', (req, res) => {
//     res.send('running');
// });

// app.use(userRoutes);


// async function connectDb() {
//     await mongoose.connect("mongodb://localhost:27017", {
//         dbName: "usersDb",
//     });
// }

// connectDb().catch((err) => console.error(err));
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });



const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoutes = require('./routes/user-route');
const questionRoutes = require('./routes/question-route');
require('dotenv').config(); // Load environment variables

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send('running');
});

app.use(userRoutes);
app.use(questionRoutes);

async function connectDb() {
    await mongoose.connect(process.env.DB_URL, {
        dbName: "usersDb",
    });
}

connectDb().catch((err) => console.error(err));
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
