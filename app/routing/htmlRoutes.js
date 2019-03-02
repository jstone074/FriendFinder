// ===============================================================================
// DEPENDENCIES
// We need to include the path package to get the correct file path for our html
// ===============================================================================
var path = require("path");

// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = (app) => {

    app.get("/survey", (req,res) => {
        res.sendFile(path.join(__dirname,"../public/survey.html"));
    });

    //Default Home Page
    app.get("*", (reg,res) => {
        res.sendFile(path.join(__dirname, "../public/home.html"));
    });
}