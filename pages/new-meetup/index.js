import React from "react";
import NewMeetupFrom from "../../components/meetups/NewMeetupForm";
import Header from "../../components/layout/Head";

const NewMeetupPage = () => {
  const adddMeetupHandler = (data) => {
    console.log(data);
  };
  return (
    <>
      <Header
        title="Add a New Meetup"
        description="Add your own meetups and create networking opportunities"
      />
      <NewMeetupFrom onAddMeetup={adddMeetupHandler} />
    </>
  );
};

export default NewMeetupPage;
