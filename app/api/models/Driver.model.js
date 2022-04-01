const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const DriverSchema = new Schema(
    {
        id: { type: Number,  required: false },
        driverId: { type: String,  required: false },
        permanentNumber: { type: Number,  required: false },
        code: { type: String,  required: false },
        url: { type: String,  required: false },
        team: { type: Schema.Types.ObjectId, required: false },
        givenName: { type: String,  required: false },
        familyName: { type: String,  required: false },
        dateOfBirth: { type:String,  required: false },
        nationality: { type: String, required: false },
        image: { type: String, required: false },
        
    },
    {
        timestamps: true
    }
);

const Driver = mongoose.model("drivers", DriverSchema);
module.exports = Driver;