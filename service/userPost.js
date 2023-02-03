var query         = require('./../model/query');
async function userPost(req, res){
    console.log("req body", req.body);
    var post = await query.create("user", req.body).then(list => list );
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({message: "Success", display_message:"Create Success ", data: post}));
}

module.exports = userPost