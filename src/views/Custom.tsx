import React from "react";
import { Container, Row, Col, H1 } from "@bootstrap-styled/v4";

import UserSpecForm from "../forms/UserSpecForm";

const Plan = () => {
  return (
    <Container>
      <Row>
        <Col>
          <H1>Demo</H1>
          <div className="p-2 rounded border">
            <UserSpecForm
              handleSubmit={() => {
                console.log("TODO!");
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Plan;
