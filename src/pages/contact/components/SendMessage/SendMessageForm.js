import React from "react";
import { Field, reduxForm } from 'redux-form/immutable';
import TextField from '@material-ui/core/TextField';
// import InputLabel from '@material-ui/core/InputLabel';
// import Button from '@material-ui/core/Button';
import Button from 'components/CustomButtons/Button.jsx';

// import asyncValidate from "./asyncValidate";
// import submit from "./validate";
import validator from "./validate";
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { contact } from "../../store/actionCreators";
import withStyles from "@material-ui/core/styles/withStyles";
import classNames from "classnames";

// import DoneIcon from "@material-ui/core/Build";
// import Event from "@material-ui/icons/Event";
// import ShoppingCart from "@material-ui/icons/ShoppingCart";

const style = {
        // mateiral-ui TextField border color is changed through
    // https://stackoverflow.com/a/64914631
    // https://stackoverflow.com/a/67139934
    // https://stackoverflow.com/a/50355475
    customMUIInputStyle: {                           // - The TextField-root
        // border: 'solid 3px #0ff',     // - For demonstration: set the TextField-root border
        // padding: '3px',               // - Make the border more distinguishable

        // for vairant="outlined"
        // (Note: space or no space after `&` matters. See SASS "parent selector".)
        '& .MuiOutlinedInput-root': {  // - The Input-root, inside the TextField-root
            // '& fieldset': {            // - The <fieldset> inside the Input-root
            //     borderColor: 'pink',   // - Set the Input border
            // },
            '&:hover fieldset': {
                borderColor: '#e91e63', // - Set the Input border when parent has :hover
            },
            '&.Mui-focused fieldset': { // - Set the Input border when parent is focused 
                borderColor: '#e91e63',
            },
        },
        // for vairant="standard", not being used
        '& .MuiInput-underline': {
          '&:hover:not($disabled):after': {
            borderColor: '#e91e63',//its when its hover and input is focused 
          },
          '&:hover:not($disabled):before': {
            borderColor: '#e91e63',//its when you hover and input is not foucused 
          },
          '&:after': {
            borderColor: '#e91e63',//when input is focused, Its just for example. Its better to set this one using primary color
          },
          // '&:before': {
          //   borderColor: '#e91e63',// when input is not touched
          // },
        },
        // floating label's font color
        '& .MuiFormLabel-root': {
          color: '#3c4858',
        },
    },
    formStyle: {
        fontSize: "28px",
        textAlign: "right",
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
        marginBottom: "20px",
    },
    buttonMargin: {
        marginRight: "30px"
    },
    messageSentTextArea: {
      marginTop: "10px",
    },
    messageSentText: {
      fontSize: "20px"
    },
}


const renderTextField = ({
  input,
  label,
  meta: { touched, error },
  ...custom
}) => (
  <TextField
    // floatingLabelText={label}
    errorText={touched && error}
    // helperText={label}
    label={label}
    {...input}
    {...custom}
  />
);


// submit is validator but won't use handleMessageSubmit, which is in parent
// <form onSubmit={handleSubmit(submit)}>
// so put validator in handleMessageSubmit
const SendMessageForm = props => {
  // const { pristine, reset, submitting, classes } = props;
  const { 
    handleSubmit, 
    pristine, 
    reset, 
    submitting, 
    classes,
    messageSubmitButtonClicked,
    sentMessageSucceed,
  } = props;

  const submit = handleSubmit(contact);

  return (
    <div className={classNames(classes.formStyle)}>
      <form onSubmit={submit}>
        {/*<InputLabel className={classNames(classes.labelStyle)}>Name</InputLabel>*/}
        <div className={classNames(classes.normalTextField, classes.customMUIInputStyle)}>
          <Field 
            name="senderName"
            component={renderTextField}
            label="Name"
            variant="outlined"
            fullWidth
          />
        </div>
        {/*<InputLabel className={classNames(classes.labelStyle)}>Email Address</InputLabel>*/}
        <div className={classNames(classes.normalTextField, classes.customMUIInputStyle)}>
          <Field 
            name="senderEmail" 
            component={renderTextField} 
            label="Email Address"
            variant="outlined"
            fullWidth
          />
        </div>   
        {/*<InputLabel className={classNames(classes.labelStyle)}>Message Content</InputLabel>*/}
        <div className={classNames(classes.areaTextField, classes.customMUIInputStyle)}>
          <Field
            name="messageContent"
            component={renderTextField}
            label="Message Content"
            multiline
            rows={10}
            variant="outlined"
            fullWidth
          />
        </div>
        <div>
          <Button 
            type="submit" 
            color="rose"
            disabled={pristine || submitting}
            className={classNames(classes.buttonMargin)}
            >
            Submit
          </Button>
          <Button type="button" disabled={pristine || submitting} onClick={reset}>
            Clear
          </Button>
        </div>

        <div className={classes.messageSentTextArea}>
        {
          messageSubmitButtonClicked 
          ?
          <>
            {
              sentMessageSucceed
              ?
              <p className={classes.messageSentText}><b>Great</b>. Your message has been sent. We will contact you soon.</p>
              :
              <p className={classes.messageSentText}><b>Sorry</b>. Unable to send message now. Please use other ways to contact us.</p>
            }
          </>
          :
          <></>
        }
        </div>
          
      </form>
    </div>
  );
};

const mapStateToProps = (state) => {
    return {
        messageSubmitButtonClicked: state.getIn(['contact', 'messageSubmitButtonClicked']),
        sentMessageSucceed: state.getIn(['contact', 'sentMessageSucceed']),
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//     }
// }

export default compose(
    connect(mapStateToProps),
    reduxForm({
      form: "SendMessageForm", // a unique identifier for this form
      validator
    }),
    withStyles(style),
)(SendMessageForm)