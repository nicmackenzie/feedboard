export function validateComment(values) {
  const errors = {};
  if (!values.comment) {
    errors.comment = 'Comment is required';
  } else if (values.comment.length < 20) {
    errors.password = 'Must be 20 characters or more';
  }

  return errors;
}
