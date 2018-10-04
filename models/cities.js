const mongoose = require('mongoose'),
    Schema = mongoose.Schema;
    

const CitySchema = new Schema({
    photo: String,
    name: String
});

const City = mongoose.model('City', CitySchema);
module.export = City;