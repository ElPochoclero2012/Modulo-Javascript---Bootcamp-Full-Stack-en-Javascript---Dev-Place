function isRoot(req,res,next){
    if(req.body.isRoot){
        next();
    }
    else{
        res.status(403).send('Error no eres ROOT');
    }
}
module.exports={isRoot}