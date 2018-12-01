/**
 * User Creator Service
 * @param UserModel
 * @returns {{create: (function(*): *)}}
 * @constructor
 */
function Creator(UserModel) {

	/**
     * Create user
     *
     * @param userData
     * @returns {*}
     */
	function create(userData) {
		let user = new UserModel({
			username: userData.username,
			email: userData.email,
			password: userData.password
		});

		return user
			.save()
			.then(user => {
				return user.show();
			});
	}

	return {
		create
	};
}

module.exports = Creator;