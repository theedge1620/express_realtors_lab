const Houses = require('./houses-db.js');

// return all houses:
const getHouses = (req, res) => {
  const houseData = Houses.getAll();
  
  res.send({houseData});
};


// return a single House:
const getHouse = (req, res) => {
  const houseData = Houses.getOne(req.params.id);

  res.send({houseData});
};

module.exports = {
  getHouses,
  getHouse
};


