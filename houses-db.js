const houses = [
    
        {
        "id": 0,
        "name": "Normal Person House",
        "description": "A normal house for normal people.",
        "price": 250000,
        "sqFt" : 1400,
        "address": "532 Plain Jane Street",
        "bedrooms": 3,
        "bathrooms": 2,
        "amenities": ["Yard", "Picket Fence", "Similar Neighbors"],
        },
        {
        "id": 1,
        "name": "The Poor Hosue",
        "description": "A place to aspire to leave.",
        "price": 60000,
        "sqFt": 800,
        "address": "13410 Human Debris Ct",
        "bedrooms": 2,
        "bathrooms": 1,
        "amenities": ["Floors", "Walls", "Ceiling", "Doorlocks"]
        
        },
        {
        "id": 2,
        "name": "Ritchie Riches Rich Place",
        "description": "A place you have to be stupid to buy.",
        "price": 2000000,
        "sqFt": 9000,
        "address": "1 Potomac Ave",
        "bedrooms": 10,
        "bathrooms": 20,
        "amenities": ["Dining Hall", "Swimming pool", "Isolation from outer society", "Rich Person Echo Chamber"]
        },
        {
        "id": 3,
        "name": "A Parking Spot for A Van",
        "description": "A place to park your van while you live your best van life.",
        "price": 5000,
        "sqFt": 200,
        "location": "101 Parking Way, Space 6",
        "bedrooms": 0,
        "bathrooms": 0,
        "amenities": ["No maintenance needed", "No Yard", "No Utility Bills", "Ample Sun Exposure"]
        }
 
];

module.exports = {
    getAll: function() {
      return houses;
    },
    getOne: function(id) {
      return houses.find((houses) => houses.id===parseInt(id));
    }
};