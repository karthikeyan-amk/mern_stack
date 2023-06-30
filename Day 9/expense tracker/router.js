const express = require("express")
const Expense = require("./models/expense")

const router = express.Router()

router.post("/expense/create",createExpense)
router.get("/expense/get")
router.patch("/expense/edit/id:")
router.delete("/expense/delete/id:")

async function createExpense(req,res) {
    console.log("Post call");
    let body = req.body
    if(typeof body.name === 'string' && typeof body.amount === 'number'){
        let newExpense = new Expense({
        
            name : body.name,
            amount : body.amount
        })
        await newExpense.save()
        let {name,amount} = req.body
        console.log("name" +" : "+name + "\nAmount : "+amount );
        return res.status(201).send("Expense created")
        
    }
    return res.status(404).send("Expense not created, Please fill the name as String and amount as number")

}
module.exports = router

