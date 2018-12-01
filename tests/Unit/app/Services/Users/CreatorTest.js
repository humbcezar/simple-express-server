require('dotenv').config();
const assert = require('assert');
const CreatorFactory = require("../../../../../app/Services/Users/Creator");
let UserModel = require("../../../../../app/Models/User");
const Creator = CreatorFactory(UserModel);

describe('tests/Unit/app/Services/Users/CreatorTest.js', function() {

    describe('create(userData)', function() {

        after(async function(){
            await UserModel.deleteMany({});
        });

        it('should create a user', async function() {
            let userData = {
                username: "TestUser",
                email: "valid@email.com",
                password: "testPassword"
            };
            let user = await Creator.create(userData);
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
