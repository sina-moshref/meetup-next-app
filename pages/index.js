import React from "react";
import MeatupList from "../components/meetups/MeetupList";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image:
      "https://th.bing.com/th/id/R.892bb645c09c766efcc5bc4d0c93094a?rik=slmcvUaa5yToAw&riu=http%3a%2f%2fwww.wallpapers13.com%2fwp-content%2fuploads%2f2015%2f12%2fNature-Lake-Bled.-Desktop-background-image.jpg&ehk=c2raFC95S12P3OL0%2fwdM60ro3oUxsSEajkuGEN%2fsjbo%3d&risl=1&pid=ImgRaw&r=0",
    address: "some address 5, 1234 come city",
    description: "This is a first meetup!",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image:
      "https://th.bing.com/th/id/R.892bb645c09c766efcc5bc4d0c93094a?rik=slmcvUaa5yToAw&riu=http%3a%2f%2fwww.wallpapers13.com%2fwp-content%2fuploads%2f2015%2f12%2fNature-Lake-Bled.-Desktop-background-image.jpg&ehk=c2raFC95S12P3OL0%2fwdM60ro3oUxsSEajkuGEN%2fsjbo%3d&risl=1&pid=ImgRaw&r=0",
    address: "some address 3, 1634 come city",
    description: "This is a second meetup!",
  },
];

const HomePage = (props) => {
  return <MeatupList meetups={props.meetup} />;
};

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;
//   // fetch data

//   return {
//     props: {
//       meetup: DUMMY_MEETUPS,
//     },

//   };
// }

export async function getStaticProps() {
  // fetch data from an api
  return {
    props: {
      meetup: DUMMY_MEETUPS,
    },
    revalidate: 1, // second
  };
}

export default HomePage;
