import React from "react";
import { Field, reduxForm } from 'redux-form/immutable'
import TextField from "@material-ui/core/TextField";
import asyncValidate from "./asyncValidate";
// import submit from "./validate";
import validator from "./validate";
// import { connect } from 'react-redux';
// import compose from 'recompose/compose';
import { contact } from "../../store/actionCreators";

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


// submit is validator but won't use handleMessageSubmit, which is in parent
// <form onSubmit={handleSubmit(submit)}>
// so put validator in handleMessageSubmit
const SendMessageForm = props => {
  const { handleSubmit, pristine, reset, submitting } = props;
  const submit = handleSubmit(contact);
  return (
    <form onSubmit={submit}>
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
          name="messageContent"
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

// const mapStateToProps = (state) => {
//     return {

//     }
// }

// const mapDispatchToProps = (dispatch) => {
//     return {
//         handleMessageSubmit(e) {
//             const action = actionCreators.submitMessage();
//             alert("submit")
//             dispatch(action);
//         }
//     }
// }

export default reduxForm({
  form: "SendMessageForm", // a unique identifier for this form
  validator   // not working
})(SendMessageForm);

// export default compose(
//     reduxForm({
//       form: "SendMessageForm", // a unique identifier for this form
//       validate
//     }),
//     // withStyles(style),
//     // connect(mapStateToProps, mapDispatchToProps),
// )(SendMessageForm)
