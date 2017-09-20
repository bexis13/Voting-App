const express = require("express"),
      router  = express.Router();

//index route   
router.get('/', (req, res)=>{
    const _         = require("underscore");
	
	res.render("index", { 
		// Underscore.js lib
		_     : _, 
		
		// Template data
		title : "Voting App"
	});

})

//register route
router.get('/register', (req, res)=>{
    const _         = require("underscore");
	
	res.render("register", { 
		// Underscore.js lib
		_     : _, 
		
		// Template data
		title : "Voting App"
	});

})

//login route
router.get('/login', (req, res)=>{
    const _         = require("underscore");
	
	res.render("login", { 
		// Underscore.js lib
		_     : _, 
		
		// Template data
		title : "Voting App"
	});

})
//new poll route
router.get('/new-poll', (req, res)=>{
    const _         = require("underscore");
	
	res.render("new-poll", { 
		// Underscore.js lib
		_     : _, 
		
		// Template data
		title : "Voting App"
	});

})



module.exports = router;