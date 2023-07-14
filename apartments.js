const Apartments = require('./apts-db.js');

// return all apartments:
const getApartments = (req, res) => {
  const apartmentData = Apartments.getAll();
  
  res.send({apartmentData});
};


// return a single apartment:
const getApartment = (req, res) => {
  const apartmentData = Apartments.getOne(req.params.id);

  res.send({apartmentData});
};

module.exports = {
  getApartments,
  getApartment
};


