const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const DriverSchema = new Schema(
    {
        name: { type: String, trim: true, required: true },
        nationality: { type: String, trim: true, required: true },
        birthDate: { type: String, trim: true, required: true },
        height: { type: Number, trim: true, required: true },
        weight: { type: Number, trim: true, required: true },
        team: [{ type: Schema.Types.ObjectId, required: true }],
        teamHistory: [{ type: String, trim: true, required: true }],
        championship: [{ type: String, trim: true, required: true }],
        victories: { type: Number, trim: true, required: true },
        podium: { type: Number, trim: true, required: true },
        debut: { type: String, trim: true, required: true },
        image: { type: String, trim: true, required: true },
        officialSite: [{ type: String, trim: true, required: true }]
    },
    {
        timestamps: true
    }
);

const Driver = mongoose.model("drivers", DriverSchema);
module.exports = Driver;