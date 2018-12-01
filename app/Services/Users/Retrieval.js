/**
 * Retrieval Service
 *
 * @param UserModel
 * @returns {{retrieve: (function(*=): Promise<T>)}}
 * @constructor
 */
function Retrieval(UserModel) {
	/**
     * Retrieves user
     *
     * @param userName
     * @returns {Promise<T>}
     */
	function retrieve(userName) {
		return UserModel.findOne({username: userName})
			.exec()
			.then(user => {
				return user.show();
			});
	}

	return {
		retrieve
	};
}

module.exports = Retrieval;