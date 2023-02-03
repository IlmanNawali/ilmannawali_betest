var query         = require('./../model/query');
var ObjectId      = require('mongodb').ObjectID;
async function userDetail(req, res){
    //var find = await query.findOne("user", {_id: ObjectId(req.params.id)}).then(list => list );
    const getUser = await query.findOne("user", {_id: ObjectId(req.params.id)}).then(function (result) {
        return result
    });
    console.log("findDetail", getUser);
    if (getUser != null){
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify({status: 204, message: "Success", display_message:"List Success", data: getUser}));
    }else{
        res.setHeader("Content-Type", "application/json");
        res.writeHead(200);
        res.end(JSON.stringify({status: 404, message: "Failed", display_message:"Not Found", data: getUser}));
    }
}

module.exports = userDetail