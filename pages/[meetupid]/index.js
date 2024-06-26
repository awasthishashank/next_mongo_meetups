
import React from 'react';
import MeetupDetail from '../../components/meetups/MeetupDetail';

const DUMMY_MEETUPS = [
  {
    id: 'm1',
    title: 'A first meetup',
    image: 'https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg',
    address: '148, Awas Vikas',
    description: 'A first meet up',
  },
  {
    id: 'm2',
    title: 'A second meetup',
    image: 'https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg',
    address: '148, Civil Lines',
    description: 'A second meet up',
  },
  {
    id: 'm3',
    title: 'A third meetup',
    image: 'https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg',
    address: 'bypass, Lucknow',
    description: 'A third meetup',
  },
];




export default function MeetupDetailsPage({ meetup }) {

  return (
    <MeetupDetail
      image="https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg"
      title="A first meetup"
      address="561 PD Lucknow"
      description="A first meetup decription"
    />
  );
}
export async function getStaticPaths(){
  return{
    fallback:false,
    paths :[{
      params:{
        meetupid : "m1"
      }

    },{
      params:{
        meetupid : "m2"
      }

    }]
  }
}
export async function getStaticProps(context) {
  const meetupid= context.params.meetupid
  console.log(meetupid)
  return {
    props: {
      meetupData:{
        image : "https://addicted2success.com/wp-content/uploads/2018/06/8-Reasons-You-Should-Join-a-Meetup-Group-Today.jpg",
        id:meetupid,
        title:"the first meetup",
        address:"561 PD Lucknow",
       description:"A first meetup decription"

      }
    },
  };
}