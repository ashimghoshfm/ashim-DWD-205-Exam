const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },

    department:{
        type: String,
        required: true,
    },

    salary:{
        type: String,
        required: true,
    },

    designation:{
        type: String,
        required: false, 
    },

    employee_type:{
        type: String,
        required: false,
        // required: true,
    },

    created:{
        type: Date,
        required: true,
        default: Date.now,
    }
});

module.exports = mongoose.model('Employee', employeeSchema);

