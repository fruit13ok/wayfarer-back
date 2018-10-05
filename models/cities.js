var mongoose = require('../db/connection'),
    Schema = mongoose.Schema;
    

var CitySchema = new Schema({
    photo: String,
    name: String
});

var City = mongoose.model('City', CitySchema);
module.exports = City;