const db = require('../models');

const index = (req, res) => {
	db.Budget.find({ user: req.body.userId }, (err, allBudgets) => {
		if (err) return err;
		// Send back data as JSON object
		return res.json(allBudgets);
	});
};

const show = (req, res) => {
	db.Budget.findById(req.params.id, (err, foundBudget) => {
		if (err) return err;
		// Send back data to client as JSON object
		return res.json(foundBudget);
	});
};

const create = (req, res) => {
	db.Budget.create(req.body, (err, newBudget) => {
		if (err) return err;
		db.User.findByIdAndUpdate(
			req.body.userId,
			{
				$push: { budgets: newBudget._id },
			},
			{ new: true },
			(err, updatedUser) => {
				if (err) return err;
				return res.json(newBudget);
			}
		);
	});
};

const update = (req, res) => {
	db.Budget.findByIdAndUpdate(
		req.params.id,
		req.body,
		{ new: true },
		(err, updatedBudget) => {
			if (err) return err;
			return res.json(updatedBudget);
		}
	);
};

const destroy = (req, res) => {
	db.Budget.findByIdAndDelete(req.params.id, (err, deletedBudget) => {
		if (err) return err;
		db.User.findByIdAndUpdate(
			req.body.userId,
			{
				$pull: { budgets: deletedBudget._id },
			},
			{ new: true },
			(err, updatedUser) => {
				if (err) return err;
				return res.json(deletedBudget);
			}
		);
	});
};

module.exports = {
	index,
	show,
	create,
	update,
	destroy,
};
