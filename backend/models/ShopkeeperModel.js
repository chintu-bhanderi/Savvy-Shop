import mongoose from "mongoose";
import Joi from "joi";
import passwordComplexity from "joi-password-complexity";

const shopkeeperSchema = new mongoose.Schema({
	name: { type: String, required: true },
	email: { type: String, required: true },
	password: { type: String, required: true },
	address: { type: String, required: true },
});

const Shopkeeper = mongoose.model("Shopkeeper", shopkeeperSchema);

const validate = (data) => {
	const schema = Joi.object({
		firstName: Joi.string().required().label("First Name"),
		email: Joi.string().email().required().label("Email"),
		password: passwordComplexity().required().label("Password"),
		address: Joi.string().required().label("Address"),
	});
	return schema.validate(data);
};

export { Shopkeeper, validate };
