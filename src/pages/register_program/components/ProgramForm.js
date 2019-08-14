// import "./helper.css";
import React from "react";
import { Formik, Field } from "formik";
import * as Yup from "yup";
import classNames from "classnames";
import axios from "axios";
import PayButton from "./PayButton";
// Input feedback
const InputFeedback = ({ error }) =>
    error ? <div className={classNames("input-feedback")}>{error}</div> : null;

// Checkbox input
const Checkbox = ({
    field: { name, value, onChange, onBlur },
    form: { errors, touched, setFieldValue },
    id,
    label,
    className,
    ...props
}) => {
    return (
        <div>
      <input
        name={name}
        id={id}
        type="checkbox"
        value={value}
        checked={value}
        onChange={onChange}
        onBlur={onBlur}
        className={classNames("radio-button")}
      />
      <label htmlFor={id}>{label}</label>
      {touched[name] && <InputFeedback error={errors[name]} />}
    </div>
    );
};

// Checkbox group
class CheckboxGroup extends React.Component {
    handleChange = event => {
        const target = event.currentTarget;
        let valueArray = [...this.props.value] || [];

        if (target.checked) {
            valueArray.push(target.id);
        } else {
            valueArray.splice(valueArray.indexOf(target.id), 1);
        }

        this.props.onChange(this.props.id, valueArray);
    };

    handleBlur = () => {
        // take care of touched
        this.props.onBlur(this.props.id, true);
    };

    render() {
        const { value, error, touched, label, className, children } = this.props;

        const classes = classNames(
            "input-field", {
                "is-success": value || (!error && touched), // handle prefilled or user-filled
                "is-error": !!error && touched
            },
            className
        );

        return (
            <div className={classes}>
        <fieldset>
          <legend>{label}</legend>
          {React.Children.map(children, child => {
            return React.cloneElement(child, {
              field: {
                value: value.includes(child.props.id),
                onChange: this.handleChange,
                onBlur: this.handleBlur
              }
            });
          })}
          {touched && <InputFeedback error={error} />}
        </fieldset>
      </div>
        );
    }
}

// Radio input
const RadioButton = ({
    field: { name, value, onChange, onBlur },
    id,
    label,
    className,
    ...props
}) => {
    return (
        <div>
      <input
        name={name}
        id={id}
        type="radio"
        value={id} // could be something else for output?
        checked={id === value}
        onChange={onChange}
        onBlur={onBlur}
        className={classNames("radio-button")}
        {...props}
      />
      <label htmlFor={id}>{label}</label>
    </div>
    );
};

// Radio group
const RadioButtonGroup = ({
    value,
    error,
    touched,
    id,
    label,
    className,
    children
}) => {
    const classes = classNames(
        "input-field", {
            "is-success": value || (!error && touched), // handle prefilled or user-filled
            "is-error": !!error && touched
        },
        className
    );

    return (
        <div className={classes}>
      <fieldset>
        <legend>{label}</legend>
        {children}
        {touched && <InputFeedback error={error} />}
      </fieldset>
    </div>
    );
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;
const SUMMERCAMPTUTOR_GOOGLE_SHEET_URL =
    "https://script.google.com/macros/s/AKfycbzYWJPeXCphiwLFiL2ChTmCp53O20nPzJ5qLdHE/exec";
const sendResponse = values => {
    values.keys = Object.keys(values).join(",");
    values.weekWillHelpCheckBoxGroup = Object.values(
        values.weekWillHelpCheckBoxGroup
    ).join(", ");
    axios({
            method: "get",
            contentType: "application/json",
            url: SUMMERCAMPTUTOR_GOOGLE_SHEET_URL,
            params: values
        })
        .then(res => console.log(res.data))
        .catch(res => console.log("error: " + res.data));
};

// @def
const ProgramForm = () => (
    <Formik
      initialValues={{
        email: "ylin@trinity.edu",
        tutorFirstName: "Stanley",
        tutorLastName: "Lin",
        tutorPhoneNumber: "2109950940",
        schoolName: "Trinity University",
        mathTeacherName: "ABC",
        mathTeacherEmail: "ylin@trinity.edu",
        gradeRadioGroup: "9",
        parentOrLegalGuardianName: "Sophia Lai",
        parentOrLegalGuardianEmail: "ylin@trinity.edu",
        parentOrLegalGuardianPhoneNumber: "2109950940",
        weekWillHelpCheckBoxGroup: ["July 22-July 26", "August 5-August 9"],
        sessionWillHelpRadioGroup: "9-12 AM Session and 1-4 PM Session",
        qualifyForFreeLunchProgramRadioGroup: "Yes",
        mediaReleaseConsentRadioGroup:
          "No. My child's photograph/video may not be reproduced/released for use in the media.",
        comment: "test commment"
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          console.log("test submit");
          sendResponse(values);
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={Yup.object().shape({
        email: Yup.string()
          .email()
          .required("Required"),
        tutorFirstName: Yup.string().required("Required"),
        tutorLastName: Yup.string().required("Required"),
        tutorPhoneNumber: Yup.string().matches(
          phoneRegExp,
          "Phone number is not valid"
        ),
        schoolName: Yup.string().required("Required"),
        mathTeacherName: Yup.string().required("Required"),
        mathTeacherEmail: Yup.string().email(),
        gradeRadioGroup: Yup.string().required("Option is required"),
        parentOrLegalGuardianName: Yup.string().required("Required"),
        parentOrLegalGuardianEmail: Yup.string()
          .email()
          .required("Required"),
        parentOrLegalGuardianPhoneNumber: Yup.string()
          .matches(phoneRegExp, "Phone number is not valid")
          .required("Required"),
        weekWillHelpCheckBoxGroup: Yup.array().required(
          "At least one checkbox is required"
        ),
        sessionWillHelpRadioGroup: Yup.string().required("Option is required"),
        qualifyForFreeLunchProgramRadioGroup: Yup.string().required(
          "Option is required"
        ),
        mediaReleaseConsentRadioGroup: Yup.string().required(
          "Option is required"
        ),
        comment: Yup.string()
      })}
    >
      {props => {
        const {
          setFieldValue,
          setFieldTouched,
          values,
          touched,
          errors,
          dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          handleReset
        } = props;
        return (
          <form onSubmit={handleSubmit}>
            <label htmlFor="email" style={{ display: "block" }}>
              Email Address
            </label>
            <input
              id="email"
              placeholder="Enter your email"
              type="text"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.email && touched.email
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.email && touched.email && (
              <div className="input-feedback">{errors.email}</div>
            )}

            <label htmlFor="tutorFirstName" style={{ display: "block" }}>
              Tutor's First Name
            </label>
            <input
              id="tutorFirstName"
              placeholder="Enter Tutor's First Name"
              type="text"
              value={values.tutorFirstName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.tutorFirstName && touched.tutorFirstName
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.tutorFirstName && touched.tutorFirstName && (
              <div className="input-feedback">{errors.tutorFirstName}</div>
            )}

            <label htmlFor="tutorLastName" style={{ display: "block" }}>
              Tutor's Last Name
            </label>
            <input
              id="tutorLastName"
              placeholder="Enter Tutor's Last Name"
              type="text"
              value={values.tutorLastName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.tutorLastName && touched.tutorLastName
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.tutorLastName && touched.tutorLastName && (
              <div className="input-feedback">{errors.tutorLastName}</div>
            )}

            <label htmlFor="tutorPhoneNumber" style={{ display: "block" }}>
              Tutor Phone Number (if has)
            </label>
            <input
              id="tutorPhoneNumber"
              placeholder="Enter Tutor's Phone Number"
              type="text"
              value={values.tutorPhoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.tutorPhoneNumber && touched.tutorPhoneNumber
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.tutorPhoneNumber && touched.tutorPhoneNumber && (
              <div className="input-feedback">{errors.tutorPhoneNumber}</div>
            )}

            <label htmlFor="schoolName" style={{ display: "block" }}>
              School Name
            </label>
            <input
              id="schoolName"
              placeholder="Enter Tutor's School Name"
              type="text"
              value={values.schoolName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.schoolName && touched.schoolName
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.schoolName && touched.schoolName && (
              <div className="input-feedback">{errors.schoolName}</div>
            )}

            <label htmlFor="mathTeacherName" style={{ display: "block" }}>
              Math Teacher Name
            </label>
            <input
              id="mathTeacherName"
              placeholder="Enter Math Teacher's Name"
              type="text"
              value={values.mathTeacherName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.mathTeacherName && touched.mathTeacherName
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.mathTeacherName && touched.mathTeacherName && (
              <div className="input-feedback">{errors.mathTeacherName}</div>
            )}

            <label htmlFor="mathTeacherEmail" style={{ display: "block" }}>
              Math Teacher Email Address
            </label>
            <input
              id="mathTeacherEmail"
              placeholder="Enter Math Teacher Email Address"
              type="text"
              value={values.mathTeacherEmail}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.mathTeacherEmail && touched.mathTeacherEmail
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.mathTeacherEmail && touched.mathTeacherEmail && (
              <div className="input-feedback">{errors.mathTeacherEmail}</div>
            )}

            <label htmlFor="gradeRadioGroup" style={{ display: "block" }}>
              Grade in next school year (2019-2020)
            </label>
            <RadioButtonGroup
              id="gradeRadioGroup"
              label="One of these please"
              value={values.gradeRadioGroup}
              error={errors.gradeRadioGroup}
              touched={touched.gradeRadioGroup}
            >
              <Field
                component={RadioButton}
                name="gradeRadioGroup"
                id="9"
                label="9"
              />
              <Field
                component={RadioButton}
                name="gradeRadioGroup"
                id="10"
                label="10"
              />
              <Field
                component={RadioButton}
                name="gradeRadioGroup"
                id="11"
                label="11"
              />
              <Field
                component={RadioButton}
                name="gradeRadioGroup"
                id="12"
                label="12"
              />
            </RadioButtonGroup>

            <label
              htmlFor="parentOrLegalGuardianName"
              style={{ display: "block" }}
            >
              Parent or Legal Guardian's Name
            </label>
            <input
              id="parentOrLegalGuardianName"
              placeholder="Enter Parent or Legal Guardian's Name"
              type="text"
              value={values.parentOrLegalGuardianName}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.parentOrLegalGuardianName &&
                touched.parentOrLegalGuardianName
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.parentOrLegalGuardianName &&
              touched.parentOrLegalGuardianName && (
                <div className="input-feedback">
                  {errors.parentOrLegalGuardianName}
                </div>
              )}

            <label
              htmlFor="parentOrLegalGuardianEmail"
              style={{ display: "block" }}
            >
              Parent or Legal Guardian's Email Address
            </label>
            <input
              id="parentOrLegalGuardianEmail"
              placeholder="Enter Parent or Legal Guardian's Email Address"
              type="text"
              value={values.parentOrLegalGuardianEmail}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.parentOrLegalGuardianEmail &&
                touched.parentOrLegalGuardianEmail
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.parentOrLegalGuardianEmail &&
              touched.parentOrLegalGuardianEmail && (
                <div className="input-feedback">
                  {errors.parentOrLegalGuardianEmail}
                </div>
              )}

            <label
              htmlFor="parentOrLegalGuardianPhoneNumber"
              style={{ display: "block" }}
            >
              Parent or Legal Guardian's Phone Number
            </label>
            <input
              id="parentOrLegalGuardianPhoneNumber"
              placeholder="Enter Parent or Legal Guardian's Phone Number"
              type="text"
              value={values.parentOrLegalGuardianPhoneNumber}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.parentOrLegalGuardianPhoneNumber &&
                touched.parentOrLegalGuardianPhoneNumber
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.parentOrLegalGuardianPhoneNumber &&
              touched.parentOrLegalGuardianPhoneNumber && (
                <div className="input-feedback">
                  {errors.parentOrLegalGuardianPhoneNumber}
                </div>
              )}

            <label
              htmlFor="weekWillHelpCheckBoxGroup"
              style={{ display: "block" }}
            >
              Week you will help (you may help with multiple weeks)
            </label>
            <CheckboxGroup
              id="weekWillHelpCheckBoxGroup"
              label="Which of these?"
              value={values.weekWillHelpCheckBoxGroup}
              error={errors.weekWillHelpCheckBoxGroup}
              touched={touched.weekWillHelpCheckBoxGroup}
              onChange={setFieldValue}
              onBlur={setFieldTouched}
            >
              <Field
                component={Checkbox}
                name="weekWillHelpCheckBoxGroup"
                id="July 22-July 26"
                label="July 22-July 26"
              />
              <Field
                component={Checkbox}
                name="weekWillHelpCheckBoxGroup"
                id="July 29-August 2"
                label="July 29-August 2"
              />
              <Field
                component={Checkbox}
                name="weekWillHelpCheckBoxGroup"
                id="August 5-August 9"
                label="August 5-August 9"
              />
            </CheckboxGroup>

            <label
              htmlFor="sessionWillHelpRadioGroup"
              style={{ display: "block" }}
            >
              Session you will help
            </label>
            <RadioButtonGroup
              id="sessionWillHelpRadioGroup"
              label="One of these please"
              value={values.sessionWillHelpRadioGroup}
              error={errors.sessionWillHelpRadioGroup}
              touched={touched.sessionWillHelpRadioGroup}
            >
              <Field
                component={RadioButton}
                name="sessionWillHelpRadioGroup"
                id="9-12 AM Session ONLY"
                label="9-12 AM Session ONLY"
              />
              <Field
                component={RadioButton}
                name="sessionWillHelpRadioGroup"
                id="1-4 PM Session ONLY"
                label="1-4 PM Session ONLY"
              />
              <Field
                component={RadioButton}
                name="sessionWillHelpRadioGroup"
                id="9-12 AM Session and 1-4 PM Session"
                label="9-12 AM Session and 1-4 PM Session"
              />
            </RadioButtonGroup>

            <label
              htmlFor="qualifyForFreeLunchProgramRadioGroup"
              style={{ display: "block" }}
            >
              Do you qualify for your school's free lunch program?
            </label>
            <RadioButtonGroup
              id="qualifyForFreeLunchProgramRadioGroup"
              label="Yes or No?"
              value={values.qualifyForFreeLunchProgramRadioGroup}
              error={errors.qualifyForFreeLunchProgramRadioGroup}
              touched={touched.qualifyForFreeLunchProgramRadioGroup}
            >
              <Field
                component={RadioButton}
                name="qualifyForFreeLunchProgramRadioGroup"
                id="Yes"
                label="Yes"
              />
              <Field
                component={RadioButton}
                name="qualifyForFreeLunchProgramRadioGroup"
                id="No"
                label="No"
              />
            </RadioButtonGroup>

            <label
              htmlFor="qualifyForFreeLunchProgramRadioGroup"
              style={{ display: "block" }}
            >
              Media Release Consent
            </label>
            <RadioButtonGroup
              id="mediaReleaseConsentRadioGroup"
              label="Yes or No?"
              value={values.mediaReleaseConsentRadioGroup}
              error={errors.mediaReleaseConsentRadioGroup}
              touched={touched.mediaReleaseConsentRadioGroup}
            >
              <Field
                component={RadioButton}
                name="mediaReleaseConsentRadioGroup"
                id="Yes. My child's photograph/video may be reproduced/released for use in the media."
                label="Yes. My child's photograph/video may be reproduced/released for use in the media."
              />
              <Field
                component={RadioButton}
                name="mediaReleaseConsentRadioGroup"
                id="No. My child's photograph/video may not be reproduced/released for use in the media."
                label="No. My child's photograph/video may not be reproduced/released for use in the media."
              />
            </RadioButtonGroup>

            <label htmlFor="comment" style={{ display: "block" }}>
              Comment
            </label>
            <input
              id="comment"
              placeholder="Leave your comment if you want"
              type="text"
              value={values.comment}
              onChange={handleChange}
              onBlur={handleBlur}
              className={
                errors.comment && touched.comment
                  ? "text-input error"
                  : "text-input"
              }
            />
            {errors.comment && touched.comment && (
              <div className="input-feedback">{errors.comment}</div>
            )}

            <PayButton />

            <button
              type="button"
              className="outline"
              onClick={handleReset}
              disabled={!dirty || isSubmitting}
            >
              Reset
            </button>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>

          </form>
        );
      }}
    </Formik>
);

export default ProgramForm;
