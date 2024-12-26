const mongoose = require("mongoose")

const TestSchema = new mongoose.Schema(
    {
        User_id: { type: String ,require:true },
        Posts_id: { type: String ,require:true },
        
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Tests", TestSchema);