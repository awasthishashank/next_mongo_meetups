import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList'
// import { useState, useEffect } from "react";



function Home(props) {
  // const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect(() => {
  //   setLoadedMeetups(DUMMY_MEETUPS);
  // }, []);

  return <MeetupList meetups={props.meetups} />;
}
export async function getStaticProps(){
  const client = await MongoClient.connect('mongodb+srv://shashankawasthi1221:developer@cluster0.guxonvm.mongodb.net/?retryWrites=true&w=majority&appName=meetups')
    const db = client.db()
    const meetupsCollection = db.collection('meetups')
    const meetups = await meetupsCollection.find().toArray()
    client.close()
  return {
    props:{
      meetups : meetups.map(meetup=>({
        title:meetup.title,
        address:meetup.address,
        image:meetup.image,
        id:meetup._id.toString(),
      }))
    },

    revalidate : 1
  }
}
export default Home;
