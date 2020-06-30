import React from "react";
import { Field, reduxForm } from "redux-form";

import {
  Row,
  Col,
  Form,
  FormGroup,
  FormText,
  Button,
} from "@bootstrap-styled/v4";

import Input from "../fields/input";
import Select from "../fields/select";

import { DISTANCES } from "../../constants";
import { required, maxWeeks52, minWeeks6 } from "../validators";

const FormColumnGroup = ({ children }) => (
  <Col xs="12" sm="12" md="6" lg="3">
    <FormGroup>{children}</FormGroup>
  </Col>
);

const UserSpecForm = (props) => {
  const {
    handleSubmit,
    valid,
    error,
    // reset,
    submitting,
    synchronousError,
  } = props;

  return (
    <Row>
      <Col>
        <Form className="bg-light p-2">
          <Row>
            <FormColumnGroup>
              <Field
                name="planLength"
                component={Input}
                type="number"
                placeholder="Plan Length"
                className="form-control"
                validate={[required, minWeeks6, maxWeeks52]}
                label={"label"}
              />
              <FormText className="text-muted">
                The number of weeks the plan is running for
              </FormText>
            </FormColumnGroup>

            <FormColumnGroup>
              <Field
                name="startDistance"
                component={Select}
                options={DISTANCES}
                validate={[required]}
                label="label"
                helper="helper"
              />
            </FormColumnGroup>
            <FormColumnGroup>
              <Field
                name="endDistance"
                component={Select}
                options={DISTANCES}
                validate={[required]}
                label="label"
                helper="helper"
              />
            </FormColumnGroup>
          </Row>
          <hr />

          <Row>
            <FormColumnGroup>
              <Field
                name="taperLength"
                component={Select}
                options={[
                  { display: "1 Week", value: 1 },
                  { display: "2 Weeks", value: 2 },
                  { display: "3 Weeks", value: 3 },
                ]}
                validate={[required]}
                label="label"
                helper="helper"
              />
            </FormColumnGroup>

            <FormColumnGroup>
              <Field
                name="recoveryPeriod"
                component={Select}
                options={[
                  { display: "4 Weeks", value: 4 },
                  { display: "6 Weeks", value: 6 },
                  { display: "8 Weeks", value: 8 },
                ]}
                validate={[required]}
                label="label"
                helper="helper"
              />
            </FormColumnGroup>
          </Row>
          <hr />

          <Row>
            <FormColumnGroup>
              <Field
                name="maxHR"
                component={Input}
                type="number"
                placeholder="placeholder"
                className="form-control"
                validate={[required]}
                label="label"
                helper="helper"
              />
              <small className="form-text text-muted">extra info</small>
            </FormColumnGroup>
          </Row>

          <hr />

          {synchronousError && <strong>{synchronousError}</strong>}
          {error && <strong>{error}</strong>}

          <Button
            color="primary"
            className="text-light text-uppercase font-weight-bold"
            type="submit"
            disabled={!valid || error || submitting}
            onClick={(e) => {
              e.preventDefault();
              handleSubmit();
            }}
          >
            Create plan
          </Button>
        </Form>
      </Col>
    </Row>
  );
};

const UserSpecReduxForm = reduxForm({
  // a unique name for the form
  form: "userSpec",
  enableReinitialize: true,
  initialValues: {
    startDistance: DISTANCES[3].value, // 5km
    endDistance: DISTANCES[5].value, // HM
    planLength: 12,
    taperLength: 1,
    recoveryPeriod: 4,
    maxHR: 175,
  },
})(UserSpecForm);

export default UserSpecReduxForm;
