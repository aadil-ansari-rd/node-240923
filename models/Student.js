const mongoose = require('mongoose');
const timestamps = require('mongoose-timestamps')//for time stamping//for install on cmd : npm i mongoose-timestamps
const Schema = mongoose.Schema;
const StudentSchema = new Schema({
    rollNo: { type: String },
    firstName: { type: String },
    lastName: { type: String },
    fatherName: { type: String },
    adharCardNo: { type: String },
    mobileNo: { type: String },
    createdAt: Date,//for time stamping
    updatedAt: Date //for time stamping
})
StudentSchema.plugin(timestamps,{index:true}); // for time stamping
module.exports= mongoose.model('Student', StudentSchema);