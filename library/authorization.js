const jwt   = require('jsonwebtoken');
function generateJWT(gmail) {
    const today = new Date();
    const exp   = new Date(today);
    exp.setDate(today.getDate() + 600);
    console.log("time", Math.floor(exp.getTime() / 1000));
    return jwt.sign({
      gmail:gmail,
      exp: Math.floor(exp.getTime() / 1000)
    }, 'ilmannawali');
}
function verifyJWT(token) {
    return jwt.verify(token, process.env.JWT_SECRET || "ilmannawali", (err, data) => {
      if(err){
        return err;
      }else{
        return data;
      }
    });
}
exports.generateJWT     = generateJWT;
exports.verifyJWT       = verifyJWT;
