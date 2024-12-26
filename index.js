require('dotenv').config();
const express = require('express');
const compression = require('compression');
const mongoose = require("mongoose");
const Redis = require('ioredis')



// Appelle des routes 
const testRoute = require("./routes/test");
const testredisRoute = require("./routes/testredis");

//const routes = require('./routes');

const app = express();

app.use(compression());
app.use(express.json());

// connexion a mongodb
mongoose.connect(process.env.MONGODB_URI).then(() => {
    console.log("connected to Mongodb with succes!")
  }).catch(error => {
    console.log(error)
  })

// connexion a redis
const redis = new Redis(process.env.REDIS_URL);

redis.on('error', (err) => {
  console.error('Redis Error:', err);
});

redis.on('connect', () => {
  console.log('Connected to Redis with succes!');
});

//app.use('/api', routes);

// routes d'acces à la base de données
app.use("/api-optimise/test", testRoute);
app.use("/api-optimise/testredis", testredisRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
