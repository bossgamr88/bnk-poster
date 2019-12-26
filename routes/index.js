const memberJSON = require('../member')

exports.home = (req,res) => {
	var members = memberJSON.members
	res.send(members)
}