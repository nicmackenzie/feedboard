export function validateSignup(values) {
  const errors = {};
  if (!values.userName) {
    errors.userName = 'User name is required';
  }

  if (!values.email) {
    errors.email = 'Email name is required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 6) {
    errors.password = 'Must be 6 characters or more';
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = 'Confirm password';
  } else if (values.confirmPassword.length < 6) {
    errors.confirmPassword = 'Must be 6 characters or more';
  } else if (values.confirmPassword !== values.password) {
    errors.confirmPassword = "Passwords don't match";
  }

  return errors;
}
