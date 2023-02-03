var query         = require('../model/query');
var authorization  = require('./../library/authorization');
module.exports =async function checkUser(req, res, next) {
    let auth    = req.headers["authorization"];
    if(auth){
        try{
            // console.log("auth", auth);
            let token   = auth.slice(7)
            var tokenVerif = authorization.verifyJWT(token);
            console.log("Gmail:", tokenVerif.gmail);
            console.log("Token Verif:", tokenVerif);
            const getUser = await query.findOne("user",{emailAddress: tokenVerif.gmail}).then(function(result){
                return result
            });
            if(getUser != null){
                next();
            }else{
                res.setHeader("Content-Type", "application/json");
                res.writeHead(200);
                res.end(JSON.stringify({status: "204", message: "Failed", display_message:"Gmail Not Found ", data: ""}));
            }
        }catch(err){
            res.setHeader("Content-Type", "application/json");
            res.writeHead(200);
            res.end(JSON.stringify({status: "204", message: "Failed", display_message:err, data: ""}));
        }

    }else{
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify({status: "204", message: "Failed", display_message:"Token Required ", data: ""}));
    }
  };