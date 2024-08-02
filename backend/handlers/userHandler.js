// // const User = require('../db/user')

// // async function addUser(userModel){
// // //  todo
// // let user = new User({
// //     ...userModel
// // });
// // await user.save();
// // return user.toObject();
// // }

// // module.exports=(addUser);

// const User = require('../db/user');

// // add , create users
// async function addUser(userModel) {
//     //  todo
//     let user = new User({
//         ...userModel
//     });
//     await user.save();
//     return user.toObject();
// }

// // get, read users
// async function getUsers(){
//     const users = await User.find();
//     return users.map(x=>x.toObject());
// }

// // get only user with id
// async function getUser(id){
//     const user = await User.findById(id);
//     return user.toObject();
// }

// // update, edit user
// async function updateUser(id, userModel){
//     const  filter = { _id:id};
//     await User.findOneAndUpdate(filter, userModel);
// }

// // delete user
// async function deleteUser(id){
//     await User.findByIdAndDelete(id);
    
// }
// module.exports = { addUser, getUsers, getUser, updateUser, deleteUser};
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../db/user');

// add, create users
async function addUser(userModel) {
    let user = new User({
        ...userModel
    });
    user.password = await bcrypt.hash(user.password, 10); // Hash the password
    await user.save();
    return user.toObject();
}

// get, read users
async function getUsers(){
    const users = await User.find();
    return users.map(x => x.toObject());
}

// get only user with id
async function getUser(id){
    const user = await User.findById(id);
    return user.toObject();
}

// update, edit user
async function updateUser(id, userModel){
    const filter = { _id: id };
    await User.findOneAndUpdate(filter, userModel);
}

// delete user
async function deleteUser(id){
    await User.findByIdAndDelete(id);
}

// login user
async function loginUser(email, password) {
    const user = await User.findOne({ email });
    if (!user) throw new Error('Invalid credentials');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) throw new Error('Invalid credentials');

    const payload = { id: user.id };
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    return token;
}

module.exports = { addUser, getUsers, getUser, updateUser, deleteUser, loginUser };

