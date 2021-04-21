import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var medicine = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: {
    type: String,
    required: false
  },
  contact: {
    type: Number,
    required: false
  },
  fabiflu:{
      type: Boolean,
  },
  tocilizumab:{
    type: Boolean,
  },  
  remdesivir:{
    type: Boolean,
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
  collection: 'medicine'
});

mongoose.models = {};

var Medicine = mongoose.model('medicine', medicine);

export default Medicine;