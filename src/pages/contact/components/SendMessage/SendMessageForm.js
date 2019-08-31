import React from "react";
import { Field, reduxForm } from "redux-form";
import TextField from "@material-ui/core/TextField";
import asyncValidate from "./asyncValidate";
import validate from "./validate";

const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    hintText={label}
    floatingLabelText={label}
    errorText={touched && error}
    {...input}
    {...custom}
  />
);

const SendMessageForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name="senderName"
          component={renderTextField}
          label="Your Name"
        />
      </div>
      <div>
        <Field name="senderEmail" component={renderTextField} label="Email" />
      </div>
      <div>
        <Field
          name="message"
          component={renderTextField}
          label="Message"
          multiLine={true}
          rows={3}
        />
      </div>
      <div>
        <button type="submit" disabled={pristine || submitting}>
          Submit
        </button>
        <button type="button" disabled={pristine || submitting} onClick={reset}>
          Clear Values
        </button>
      </div>
    </form>
  );
};

export default reduxForm({
  form: "SendMessageForm", // a unique identifier for this form
  validate,
  asyncValidate
})(SendMessageForm);
