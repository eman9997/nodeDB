const db = require('./../models/data.User.Model.js');
const client = require('./../models/user.Model.js');


const emanuel = new client("emanuel", "fonseca", 100);

console.log(emanuel);
createUser(emanuel)
.then(result => {
    console.log("Created User");
})
.catch(error => {
    console.log("Create User Failed");
    console.log(error);
})



async function createUser(user) {
    const db_user = db.build(user);

    try {
        await db_user.save();
        console.log("worked");
    }
    catch {
        console.log("oops");
    }
}

// const db_user = db.build({ 
//     firstName: user.firstName,
//     lastName: user.lastName,
//     balance: user.balance
// });