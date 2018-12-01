/**
 * Users Controller
 *
 * @param CreatorService
 * @param RetrievalService
 * @returns {{store: store, show: show}}
 * @constructor
 */
function UsersController(
	CreatorService,
	RetrievalService
) {

	/**
     * Store user
     *
     * @param req
     * @param res
     */
	async function store(req, res) {
		try {
			let user = await CreatorService.create(req.body);
			res.send(user);
		} catch(err) {
			res.status(400).send(err);
		}
	}

	/**
     * Show user
     *
     * @param req
     * @param res
     */
	async function show(req, res) {
		try{
			let user = await RetrievalService.retrieve(req.params.userName);
			res.send(user);
		}catch(err){
			res.status(400).send(err);
		}
	}

	return {
		store,
		show
	};
}

module.exports = UsersController;