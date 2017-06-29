const express = require("express"),
      router  = express.Router();
      
router.get('/voting', (request, response)=>{
    response.send("the voting route");
})


module.exports = router;