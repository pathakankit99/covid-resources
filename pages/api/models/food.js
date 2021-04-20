import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var food = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: false
  },
  contact: {
    type: Number,
    required: false
  },
  state: {
    type: String,
    required: false
  },  
  city: {
    type: String,
    required: false
  },
  since: {
    type: Date,
    default: Date.now
  }
},{
  collection: 'food'
});

mongoose.models = {};

var Food = mongoose.model('food', food);

export default Food;