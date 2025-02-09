import React from "react";
import { Video } from "./Video";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";


export const Cards = (props) => {

  
  return (
    <Container>
      <Row>
        {props.videos.length && props.videos.map((val) => {
          return <Video url={val.url} title={val.title} key={val.id} />;
        })}
      </Row>
    </Container>
  );
};
