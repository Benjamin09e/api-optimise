const test = require("../models/Test");
const router = require('express').Router();

//creer 
router.post("/", async (req, res)=>{
    const newTest = new test(req.body)
    try {
        const saveTest = await newTest.save()
        res.status(200).json(saveTest)
    } catch (error) {
        res.status(500).json(error)
    }
})

//get all
router.get("/", async (req, res) => {
    try {
        const Nexttest = await test.find()
        res.status(200).json(Nexttest)
    } catch (error) {
        res.status(500).json(error)
    }
});

module.exports = router;