import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var oxygen = new Schema({
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
  collection: 'oxygen'
});

mongoose.models = {};

var Oxygen = mongoose.model('oxygen', oxygen);

export default Oxygen;