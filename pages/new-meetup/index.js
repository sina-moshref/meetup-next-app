import React from "react";
import NewMeetupFrom from "../../components/meetups/NewMeetupForm";

const NewMeetupPage = () => {
  const adddMeetupHandler = (data) => {
    console.log(data);
  };
  return <NewMeetupFrom onAddMeetup={adddMeetupHandler} />;
};

export default NewMeetupPage;
