var query         = require('../model/query');
var authorization  = require('./../library/authorization');
async function login(req, res){
    const getUser = await query.findOne("user", {emailAddress: req.query.gmail}).then(function (result) {
        return result
    });
    if(getUser != null){
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify({message: "Success", display_message: getUser, data: authorization.generateJWT(req.query.gmail)}));
    }else{
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify({message: "Failed", display_message:"Login Failed ", data: ""}));
    }
}

module.exports = login