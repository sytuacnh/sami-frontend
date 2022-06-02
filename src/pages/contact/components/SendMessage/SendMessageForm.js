import React from "react";
import { Field, reduxForm } from 'redux-form/immutable';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
// import Button from '@material-ui/core/Button';
import Button from 'components/CustomButtons/Button.jsx';

// import asyncValidate from "./asyncValidate";
// import submit from "./validate";
import validator from "./validate";
// import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { contact } from "../../store/actionCreators";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";

const style = {
    formStyle: {
        fontSize: "28px",
        textAlign: "left",
    },
    labelStyle: {
        fontWeight: "500",
        color: "#3c4858",
        marginBottom: "5px"
    },
    normalTextField: {
        marginBottom: "20px"
    },
    areaTextField: {
        marginBottom: "20px"
    },
    buttonMargin: {
        marginRight: "30px"
    }
}


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
  const { handleSubmit, pristine, reset, submitting, classes } = props;
  const submit = handleSubmit(contact);
  return (
    <div className={classNames(classes.formStyle)}>
      <form onSubmit={submit}>
        <InputLabel className={classNames(classes.labelStyle)}>Name</InputLabel>
        <div className={classNames(classes.normalTextField)}>
          <Field 
            name="senderName"
            component={renderTextField}
            label="Name"
            color="secondary"
            variant="outlined"
          />
        </div>
        <InputLabel className={classNames(classes.labelStyle)}>Email Address</InputLabel>
        <div className={classNames(classes.normalTextField)}>
          <Field name="senderEmail" 
            component={renderTextField} 
            label="Email Address"
            variant="outlined"
          />
        </div>   
        <InputLabel className={classNames(classes.labelStyle)}>Message Content</InputLabel>
        <div className={classNames(classes.areaTextField)}>
          <Field
            name="messageContent"
            component={renderTextField}
            label="Message Content"
            multiLine={true}
            rows={3}
            variant="outlined"
          />
        </div>
        <div>
          <Button 
            type="submit" 
            color="primary"
            disabled={pristine || submitting}
            className={classNames(classes.buttonMargin)}
            >
            Submit
          </Button>
          <Button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear
          </Button>
        </div>
      </form>
    </div>
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

// without compose
// export default reduxForm({
//   form: "SendMessageForm", // a unique identifier for this form
//   validator   // not working
// })(SendMessageForm);

export default compose(
    reduxForm({
      form: "SendMessageForm", // a unique identifier for this form
      validator
    }),
    withStyles(style),
    // connect(mapStateToProps, mapDispatchToProps),
)(SendMessageForm)
