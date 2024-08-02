// const express = require('express');
// const router = express.Router();
// const {
//     addUser, 
//     getUsers, 
//     getUser, 
//     updateUser, 
//     deleteUser
// } = require("../handlers/userHandler");

// router.post("/users", async (req, res) => {
//     // user create operation
//     let user =  await addUser(req.body);
//     res.send(user);
// });

// // get
// router.get("/users", async (req, res) => {
//   // user read operation
//   let users =  await getUsers();
//   res.send(users);
// });

// // get with id
// router.get("/users/:id", async (req, res) => {
//     // console.log("id", req.params["id"])
//     let user =  await getUser(req.params["id"]);
//     res.send(user);
//   });


//   // edit , put
// router.put("/users/:id", async (req, res) => {
//     // console.log("id", req.params["id"]);
//     await updateUser(req.params["id"], req.body);
//     res.send({});
//   });

// // delete 
// router.delete("/users/:id", async (req, res) => {
//     // console.log("id delete", req.params["id"]);
//    await deleteUser(req.params["id"]);
//     res.send({});
//   });


// module.exports = router;



const express = require('express');
const router = express.Router();
const {
    addUser, 
    getUsers, 
    getUser, 
    updateUser, 
    deleteUser,
    loginUser
} = require("../handlers/userHandler");
const auth = require('../middleware/auth');

router.post("/users", auth('admin'), async (req, res) => {
    let user = await addUser(req.body);
    res.send(user);
});

router.get("/users", auth('admin'), async (req, res) => {
    let users = await getUsers();
    res.send(users);
});

router.get("/users/:id", auth('admin'), async (req, res) => {
    let user = await getUser(req.params["id"]);
    res.send(user);
});

router.put("/users/:id", auth('admin'), async (req, res) => {
    await updateUser(req.params["id"], req.body);
    res.send({});
});

router.delete("/users/:id", auth('admin'), async (req, res) => {
    await deleteUser(req.params["id"]);
    res.send({});
});

router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const token = await loginUser(email, password);
        res.send({ token });
    } catch (err) {
        res.status(400).json({ msg: err.message });
    }
});

module.exports = router;
