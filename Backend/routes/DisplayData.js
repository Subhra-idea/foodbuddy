const express = require("express");
const router = express.Router();

router.post('/foodData', (req, res)=>{
    
    try {
        res.send([global.fooditems, global.foodcat])
    } catch (error) {
        console.error(error.message);
        res.send("Internal Server Error")
    }
})

module.exports = router;