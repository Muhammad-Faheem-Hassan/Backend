
// const mongoose =  require("mongoose");

// mongoose.connect("mongodb://localhost:27017/myDb")
// .then( () => console.log("connection is successful") )
// .catch( (err) => console.log(err));

// const playlistSchema = new mongoose.Schema({
//   name : {
//     type: String,
//     required : true
//   },
//   ctype : String,
//   videos: Number,
//   author : String,
//   active: Boolean,
//   date : {
//     type: Date,
//     default: Date.now
//   }
// })
// const Playlist = new mongoose.model("Playlist", playlistSchema);

// const createDocument = async () => {
//   try{
//   const reactPlaylist = new Playlist({
//     name : "Node Js",
//     ctype : "Back End",
//     videos:50,
//     author : "Faheem",
//     active: true
    
//   })
   
//   const result = await reactPlaylist.save();
// } catch(err){
//   console.log(err)
// }
// }
// createDocument(); 

