import Art from "../models/Art.js";

export default {
    readAll : async function (req,res,next){
        try{
            const arts = await Art.readAll();
            res.json(arts);
        }catch(err){
            next(err);
        }
    },
    createArt : async function(req,res,next){
        try{
            const newArt = await Art.createArt(
                req.body.title,
                req.body.description,
                req.body.opinion,
                req.body.url,
                req.body.comments,
            );
            res.json(newArt)
        }catch(err){
            next(err)
        }
    }
}