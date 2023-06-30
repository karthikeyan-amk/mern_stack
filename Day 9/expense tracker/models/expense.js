const mongoose  = require("mongoose");

let expenseSchema = mongoose.Schema({
    "name": {type : String},
    "amount" :{type : Number},
})

module.exports = mongoose.model("   c",expenseSchema);