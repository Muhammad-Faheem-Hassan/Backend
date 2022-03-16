const express = require("express");
const dbConnect = require("./mongodb");
const app = express ();
const mongodb = require("mongodb");

app.use(express.json());

app.get("/", async ( res, resp)=>{
  let data = await dbConnect();
  data = await data.find().toArray();
  resp.send(data)
});

app.post("/", async (req, resp)=>{
  console.log(req.body)
  let data = await dbConnect();
  let result = await data.insert(req.body)
  resp.send(result)

})

app.put("/:id", async (res, resp) =>{
  let data = await dbConnect();
  let result = data.updateOne(
    {_id: new mongodb.ObjectId(res.params.id)},
    { $set:(res.body)}
  )
  resp.send("record updated successfully")
})
app.delete("/:id", async(res, resp)=>{
  const data = await dbConnect();
  const result =data.deleteOne({_id: new mongodb.ObjectId(res.params.id)})
  resp.send(result)
})

app.listen(5000)