const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()

const MovieModel = require("./models/Movie");
const ActorModel = require("./models/Actor");

app.use(express.json());
app.use(cors());    

mongoose.connect("mongodb+srv://adrian6899:password08@mern.peefh.mongodb.net/MERNFlix?retryWrites=true&w=majority",{
    useNewUrlParser: true
});

app.post("/insert",async(req,res)=>{
    const ActorName = req.body.ActorName;
    const ActorNote = req.body.ActorNote;
    const ActorImage = req.body.ActorImage;

    const actor = new ActorModel({Name:ActorName,Notes:ActorNote,Poster:ActorImage});
    try {
        await actor.save();
        res.send("Actor Created Succesfuly");  
    } catch (err) {
        console.log(err);
    }

});

app.get("/read",async(req,res)=>{
ActorModel.find({},(err,result) => {
    if (err){
        res.send(err)
    }

    res.send(result);
})
});

app.put("/update",async(req, res)=>{
    const NewActorName = req.body.newActorName;
    const NewActorNote = req.body.newActorNotes;
    const NewActorImage = req.body.newActorImage;
    const id = req.body.id;

    try {
        await ActorModel.findById(id, (err,updatedActor)=>{
            updatedActor.Name = NewActorName;
            updatedActor.Notes = NewActorNote;
            updatedActor.Image = NewActorImage;
            updatedActor.save();
            res.send("update");
        });
        await actor.save();
        res.send("Actor Created Succesfuly");  
    } catch (err) {
        console.log(err);
    }
});

app.listen(3001,()=>{
    console.log('server is running');
})