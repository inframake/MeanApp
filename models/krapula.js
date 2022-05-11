const mongoose = require('mongoose', '../config/database');
const bcrypt = require('bcryptjs');
const config = require('../config/database');



const KrapulaSchema = new mongoose.Schema({
    olo1: {
        type: String
    },
    olo2: {
        type: String
    },
    olo3: {
        type: String
    },
    olo4: {
        type: String
    },
    olo5: {
        type: String
    },
    olo6: {
        type: String
    },

});

const Krapula = module.exports = mongoose.model('krapula', KrapulaSchema);

module.exports.getKrapulaById = function(olo1, callback){
    Krapula.findById(olo1, callback);
  }

  module.exports.addKrapula = function(uusiKrapula, callback){
        uusiKrapula.save(callback);
    
    };

   
  
  