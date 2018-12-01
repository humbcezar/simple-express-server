require('dotenv').config();
const assert = require('assert');
const RetrievalFactory = require("../../../../../app/Services/Users/Retrieval");
let UserModel = require("../../../../../app/Models/User");
const Retrieval = RetrievalFactory(UserModel);


describe('tests/Unit/app/Services/Users/RetrievalTest.js', function() {
    describe('retrieve(userData)', function() {

        let userData = {
            username: "TestUser",
            email: "valid@email.com",
            password: "testPassword"
        };

        before(async function(){
            let user = new UserModel(userData);
            await user.save();
        });

        after(async function(){
            await UserModel.deleteMany({});
        });

        it('should retrieve a user', async function() {

            let user = await Retrieval.retrieve(userData.username);
            assert.deepStrictEqual({
                username: userData.username,
                email: userData.email
            },{
                username: user.username,
                email: user.email
            });
        });
    });
});
