import React from 'react';
import { Fragment } from 'react';

export default function MeetupDetail(props) {
  return (
    <Fragment>
      <img src={props.image} alt={props.title} />
      <h1>{props.title}</h1>
      <address>{props.address}</address>
      <p>{props.description}</p>
    </Fragment>
  );
}
