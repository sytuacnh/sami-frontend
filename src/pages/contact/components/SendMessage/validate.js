export default function(values) {
  const errors = {};
  const requiredFields = ["senderName", "senderEmail", "message"];
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = "Required Entry";
    }
  });
  if (
    values.senderEmail &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.senderEmail)
  ) {
    errors.senderEmail = "Opps, invalid email address?";
  }
  return errors;
}
