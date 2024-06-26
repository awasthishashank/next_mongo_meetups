import { MongoClient } from 'mongodb';
import MeetupList from '../components/meetups/MeetupList'
// import { useState, useEffect } from "react";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image: "https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg",
    address: "148, Awas Vikas",
    description: "A first meet up",
  },
  {
    id: "m2",
    title: "A second meetup",
    image: "https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg",
    address: "148, Civil Lines",
    description: "A second meet up",
  },
  {
    id: "m3",
    title: "A third  meetup",
    image: "https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg",
    address: "bypass ,Lucknow",
    description: "A third meetup",
  },
  {
    id: "m4",
    title: "A fourth meetup",
    image: "https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg",
    address: "bypass ,Lucknow",
    description: "A fourth meetup",
  },
];

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

    revalidate : 5
  }
}
export default Home;
