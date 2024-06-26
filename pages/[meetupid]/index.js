import { MongoClient ,ObjectId, deserialize} from "mongodb";
import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first meetup",
    image:
      "https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg",
    address: "148, Awas Vikas",
    description: "A first meet up",
  },
  {
    id: "m2",
    title: "A second meetup",
    image:
      "https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg",
    address: "148, Civil Lines",
    description: "A second meet up",
  },
  {
    id: "m3",
    title: "A third meetup",
    image:
      "https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg",
    address: "bypass, Lucknow",
    description: "A third meetup",
  },
];

export async function MeetupDetails(props) {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      description={props.meetupData.description}
    />
  );
}
export async function getStaticPaths() {
  const client = await MongoClient.connect(
    "mongodb+srv://shashankawasthi1221:developer@cluster0.guxonvm.mongodb.net/?retryWrites=true&w=majority&appName=meetups"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const meetups = await meetupsCollection
    .find(
      {},
      {
        _id: 1,
      }
    )
    .toArray();
  client.close();
  return {
    fallback: false,
    paths: meetups.map((meetup) => ({
      params: { meetupid: meetup._id.toString() },
    })),
  };
}
export async function getStaticProps(context) {
  const meetupid = context.params.meetupid;
  const client = await MongoClient.connect(
    "mongodb+srv://shashankawasthi1221:developer@cluster0.guxonvm.mongodb.net/?retryWrites=true&w=majority&appName=meetups"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");

  const selectedMeetups = await meetupsCollection.findOne({_id:ObjectId(meetupid)}).toArray();
  client.close();
  console.log(meetupid);
  return {
    props: {
      meetupData:{
        id:selectedMeetups._id.toString(),
        title:selectedMeetups.title,
        address:selectedMeetups.address,
        image:selectedMeetups.image,
        description:selectedMeetups.description
      }
    },
  };
}
