const express = require("express"),
      router  = express.Router();
      
router.get('/', (req, res)=>{
    const _         = require("underscore");
	
	res.render("index", { 
		// Underscore.js lib
		_     : _, 
		
		// Template data
		title : "Voting App"
	});

})


module.exports = router;