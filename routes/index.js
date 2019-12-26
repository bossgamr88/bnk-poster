const memberJSON = require('../member')

exports.home = (req,res) => {
	var members = memberJSON.members
	// res.send(members)
	res.render('home',{
		title : 'Bnk48 bangkok forty eight',
		members : members
	})
}

exports.member_single = (req,res) => {
	var member_id = req.params.member_id
	var members = memberJSON.members
	if(member_id >= 1 && member_id <= 6){
		var member = members[member_id - 1] 
		console.log(member)
		var title = member.title
		var main_characters = member.main_characters
		res.render('member-single',{
			members : members,
			title : title,
			member : member,
			main_characters : main_characters
		})
	}
}