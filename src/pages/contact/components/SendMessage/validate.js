// import { SubmissionError } from 'redux-form'

// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

// export default function submit(values) {
//   return sleep(500).then(() => {
//     console.log('enter submit')
//     // simulate server latency
//     // if (!['john', 'paul', 'george', 'ringo'].includes(values.username)) {
//     //   throw new SubmissionError({
//     //     username: 'User does not exist',
//     //     _error: 'Login failed!'
//     //   })
//     // } else if (values.password !== 'redux-form') {
//     //   throw new SubmissionError({
//     //     password: 'Wrong password',
//     //     _error: 'Login failed!'
//     //   })
//     // } else {
//     //   window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`)
//     // }
//   })
// }


// not working
export default function(values) {
  const errors = {};
  const requiredFields = ["senderName", "senderEmail", "messageContent"];
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
