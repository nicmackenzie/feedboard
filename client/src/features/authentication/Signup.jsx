import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import Button from '../../ui/Button';
import FormControl from '../../ui/FormControl';
import { validateSignup } from './validations';
import { useSignup } from './useSignup';

function Signup() {
  const { isSigninIn, signup } = useSignup();
  function onSubmit(values) {
    const formValues = {
      user_name: values.userName,
      password: values.password,
      email: values.email,
    };
    signup(formValues, {
      onError: error => {
        console.log(typeof error.message);
      },
    });
  }

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        userName: '',
        password: '',
        confirmPassword: '',
        email: '',
      },
      validate: validateSignup,
      onSubmit,
    });
  return (
    <>
      <form
        className="max-w-xl bg-white shadow-sm rounded-sm p-4 mx-auto mt-12 space-y-4"
        onSubmit={handleSubmit}
      >
        <h1 className="text-clr-purple text-center font-bold text-2xl">
          Create a new account
        </h1>
        <FormControl
          label="Username"
          placeholder="eg jane doe"
          id="userName"
          name="userName"
          value={values.userName}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.userName && errors.userName}
        />
        <FormControl
          label="Email"
          type="email"
          placeholder="eg jdoe@test.com"
          id="email"
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.email && errors.email}
        />
        <FormControl
          label="Password"
          type="password"
          id="password"
          name="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.password && errors.password}
        />
        <FormControl
          label="Confirm Password"
          type="password"
          id="confirmPassword"
          name="confirmPassword"
          value={values.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={touched.confirmPassword && errors.confirmPassword}
        />
        <Button type="submit" isLoading={isSigninIn}>
          Sign Up
        </Button>
        <p className="text-clr-gray-accent text-sm text-center font-semibold">
          Already Have an account?{' '}
          <span>
            <Link to="/login" className="text-clr-blue-primary">
              Log in
            </Link>
          </span>
        </p>
      </form>
    </>
  );
}

export default Signup;
