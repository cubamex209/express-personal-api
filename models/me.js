var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

var MeSchema = new Schema({
  description: String
});

var Me = mongoose.model('Me', MeSchema);

module.exports = Me;
