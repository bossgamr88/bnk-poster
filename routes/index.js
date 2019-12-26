const memberJSON = require('../member')

exports.home = (req,res) => {
	var members = memberJSON.members
	// res.send(members)
	res.render('home',{
		title : 'Bnk48 bangkok forty eight',
		members : members
	})

}