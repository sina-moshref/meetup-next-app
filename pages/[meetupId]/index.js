import React from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = (props) => {
  return (
    <>
      <MeetupDetail
        description={props.meetup?.description}
        title={props.meetup?.title}
        address={props.meetup?.address}
        image={props.meetup?.image}
      />
    </>
  );
};

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // fetch data from an api

  const meetupId = context.params.meetupId;
  return {
    props: {
      meetup: {
        description: "The meetup description",
        title: "A first Metup",
        id: meetupId,
        address: "Some Street 3, Some City",
        image:
          "https://th.bing.com/th/id/R.892bb645c09c766efcc5bc4d0c93094a?rik=slmcvUaa5yToAw&riu=http%3a%2f%2fwww.wallpapers13.com%2fwp-content%2fuploads%2f2015%2f12%2fNature-Lake-Bled.-Desktop-background-image.jpg&ehk=c2raFC95S12P3OL0%2fwdM60ro3oUxsSEajkuGEN%2fsjbo%3d&risl=1&pid=ImgRaw&r=0",
      },
    },
    revalidate: 1, // second
  };
}

export default MeetupDetails;
