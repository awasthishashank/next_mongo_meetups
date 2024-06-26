// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { MongoClient } from "mongodb";

async function handler (req,res){
  if(req.method ===  'POST'){
    const data = req.body;

    // const {image ,id , description , address } = data
    const client = await MongoClient.connect('mongodb+srv://shashankawasthi1221:developer@cluster0.guxonvm.mongodb.net/?retryWrites=true&w=majority&appName=meetups')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const result = await meetupsCollection.insertOne(data)
    console.log(result )
    client .close()
    res.status(201).json({message : "Meetup Inserted"})
  }
}
export default handler