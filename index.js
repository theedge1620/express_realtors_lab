const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(cors());
app.use(express.json());

const aptController = require('./apartments.js');

const houseController = require('./houses.js');


app.listen(PORT, () => console.log(`Serving up delicious fruits on port ${PORT} 🍒`));


app.get('/', (req, res) => {
  res.send("welcome!")
});


app.get('/apartments/', aptController.getApartments);


app.get('/apartments/:id', aptController.getApartment);

app.get('/houses/', houseController.getHouses);


app.get('/houses/:id', houseController.getHouse);