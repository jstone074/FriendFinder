var friendsArray = require("../data/friend");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = (app) => {

    app.get("/api/friends", (req,res) => {

        res.json(friendsArray);

    });

    app.post("/api/friends", (req,res) => {

        friendsArray.push(req.body);
        res.json(true);
    });


};