import React from "react";
import { Field } from "redux-form";

import { FormGroup, Label, FormText } from "@bootstrap-styled/v4";

const Select = ({
  options,
  helper,
  input,
  label,
  meta: { touched, error },
}) => {
  return (
    <FormGroup>
      <Label htmlFor={input.name}>Label</Label>
      <Field name={input.name} component="select" className="form-control">
        {options.map((d) => {
          return (
            <option key={d.value} value={d.value}>
              {d.display}
            </option>
          );
        })}
      </Field>
      <FormText color="muted">helper</FormText>
    </FormGroup>
  );
};

export default Select;
