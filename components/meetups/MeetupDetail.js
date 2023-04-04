import React from "react";
import classes from "./MeetupDetail.module.css";
import { useRouter } from "next/router";

const MeetupDetail = (props) => {
  const router = useRouter();
  return (
    <section className={classes.detail}>
      <img src={props.image} alt={props.title} />
      <h1>
        {props.title} - {router.query.meetupId}
      </h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </section>
  );
};

export default MeetupDetail;
