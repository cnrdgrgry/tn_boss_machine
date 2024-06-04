const checkMillionDollarIdea = (req, res, next) => {
	const { weeklyRevenue, numWeeks } = req.body;
	const Revenue = weeklyRevenue * numWeeks;
	if (Revenue >= 1000000) {
		next();
	} else {
		res.status(400).json({
			error:
				"Error 400; Bad request, potential revenue is not One Million Dollar!",
		});
	}
};

// Leave this exports assignment so that the function can be used elsewhere
module.exports = checkMillionDollarIdea;
