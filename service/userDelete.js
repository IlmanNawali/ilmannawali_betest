var query         = require('./../model/query');
var ObjectId      = require('mongodb').ObjectID;
async function userPost(req, res){
    console.log("req", req.params);
    var deleteData = await query.delete("user", {_id: ObjectId(req.params.id)}).then(list => list );
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({message: "Success", display_message:"Delete Success ", data: deleteData}));
}

module.exports = userPost