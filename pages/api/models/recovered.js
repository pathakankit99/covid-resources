import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var recovered = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: false
  },
  age: {
    type: Number,
    required: false
  },
  contact: {
    type: Number,
    required: false
  },
  bloodgroup: {
    type: String,
    required: false
  },
  id: {
    type: String,
    required: false
  },
  dor: {
    type: Date,
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
  collection: 'recovered'
});

mongoose.models = {};

var Recovered = mongoose.model('recovered', recovered);

export default Recovered;