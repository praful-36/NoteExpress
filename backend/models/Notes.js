const mongoose = require('mongoose');
const { Schema } = mongoose;

const NotesSchema = new Schema({

    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title:{
        type:String,
        require:true
    },
    
    description:{
        type:String
    },
    
    tag:{
        type:String,
        default:"General"
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
      });
    
      const Notes = mongoose.model('notes', NotesSchema);

      module.exports = Notes;
