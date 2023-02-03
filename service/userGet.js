var query   = require('./../model/query');
async function userGet(req, res){
    const getUser = await query.find("user", {},{},0,10).then(function (result) {
        return result
    });
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);
    res.end(JSON.stringify({status: 204, message: "Success", display_message:"List Success", data: getUser}));
}

module.exports = userGet