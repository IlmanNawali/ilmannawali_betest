var query         = require('./../model/query');
var ObjectId      = require('mongodb').ObjectID;
async function userPost(req, res){
    console.log("body", req.body._id)
    const PutUser = await query.updateOne("user", {where: {_id:ObjectId(req.body._id)}},{ $set: {userName: req.body.userName, accountNumber: req.body.accountNumber, 
        emailAddress: req.body.emailAddress, identityNumber: req.body.identityNumber}}, { upsert: true } ).then(function (result) {
            return result
    });
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({message: "Success", display_message:"Update Success ", data: PutUser}));
}

module.exports = userPost