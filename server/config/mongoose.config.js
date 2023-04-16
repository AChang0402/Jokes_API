// const mongoose = require('mongoose');

// const dbName = process.env.DB;
// const username = process.env.ATLAS_USERNAME;
// const pw = process.env.ATLAS_PASSWORD;

// const uri = `mongodb+srv://${username}:${pw}@cluster0.g2xkpa3.mongodb.net/${dbName}?retryWrites=true&w=majority`;


// mongoose.connect(uri, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
//     .then(() => console.log("Established a connection to the database"))
//     .catch(err => console.log("Something went wrong when connecting to the database", err));




const mongoose = require('mongoose');
const uri = process.env.MONGO_DB_URI;

mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log('Database connected'))
    .catch((err) => console.log('Database connection error:', err));