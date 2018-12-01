const mongoose = require("mongoose");
require("mongoose-type-email");

var userSchema = new mongoose.Schema({
	username: {
		type: String,
		required: true,
		index: {
			unique: true
		}
	},
	email: {
		type: mongoose.SchemaTypes.Email,
		required: true
	},
	password: {
		type: String,
		required: true,
		bcrypt: true
	}
});

/**
 * Show user information hiding password
 *
 * @returns {{_id: *, username: *, email: *}}
 */
userSchema.methods.show = function() {
	return {
		_id: this.id,
		username: this.username,
		email: this.email
	};
};

userSchema.plugin(require("mongoose-bcrypt"));

module.exports = mongoose.model("user", userSchema);