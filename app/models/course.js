var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CourseSchema = Schema({

  name: { type: String, required: true, unique: true },
  description: { type: String, required: true, unique: false },
  instructor: { type: String, required: false, unique: false },
  isEnable: { type: Boolean, required: false, unique: false, default:false },
  
});

module.exports = mongoose.model('Course', CourseSchema);
