const apartments = [
    
        {
        "id": 0,
        "name": "Cozy Studio Apartment",
        "description": "A small and comfortable studio apartment with modern amenities.",
        "price": 1000,
        "sqFt" : 800,
        "address": "123 Whatever Street",
        "bedrooms": 1,
        "bathrooms": 1,
        "amenities": ["Wi-Fi", "Air Conditioning", "Kitchen"],
        },
        {
        "id": 1,
        "name": "Spacious 2-Bedroom Apartment",
        "description": "A large and well-furnished apartment with beautiful views.",
        "price": 2000,
        "sqFt": 1300,
        "address": "567 Monument Street",
        "bedrooms": 2,
        "bathrooms": 2,
        "amenities": ["Wi-Fi", "Air Conditioning", "Parking", "Swimming Pool"]
        
        },
        {
        "id": 2,
        "name": "Terrible POS Apartmen",
        "description": "A place you don't want to live but may have to.",
        "price": 400,
        "sqFt": 200,
        "address": "9016 Hell Ave",
        "bedrooms": 0,
        "bathrooms": 0.5,
        "amenities": ["Car Parts", "Meth Lab", "Well rated local trauma ward", "Diesel Exhaust"]
        },
        {
        "id": 3,
        "name": "Pure Hell Apartments",
        "description": "A place to lose your soul.",
        "price": 666,
        "sqFt": 666,
        "location": "1 Natas Place",
        "bedrooms": 1,
        "bathrooms": 3,
        "amenities": ["5G Towers", "Intense Radiation", "Baseboard Heat", "No Central Air"]
        }
 
];

module.exports = {
    getAll: function() {
      return apartments;
    },
    getOne: function(id) {
      return apartments.find((apartments) => apartments.id===parseInt(id));
    }
};