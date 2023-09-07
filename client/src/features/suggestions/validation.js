export function validateComment(values) {
  const errors = {};
  if (!values.comment) {
    errors.comment = 'Comment is required';
  } else if (values.comment.length < 20) {
    errors.password = 'Must be 20 characters or more';
  }

  return errors;
}

export function validateAddSuggestion(values) {
  const errors = {};
  if (!values.title) {
    errors.title = 'Title is required';
  }

  if (!values.category) {
    errors.category = 'Category is required';
  }

  if (!values.description) {
    errors.description = 'Description is required';
  } else if (values.description.length < 20) {
    errors.description = 'Must be 6 characters or more';
  }

  return errors;
}
