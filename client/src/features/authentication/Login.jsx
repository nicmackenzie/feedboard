import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import Button from '../../ui/Button';
import FormControl from '../../ui/FormControl';
import { validateLogin } from './validations';
import { useLogin } from './useLogin';

const uid = function () {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
};

function Login() {
  const { isSigninIn, login } = useLogin();
  function onSubmit(values) {
    const formValues = {
      email: values.email,
      password: values.password,
      avatar_url: `https://i.pravatar.cc/48?u=${uid()}`,
    };
    login(formValues, {
      onError: error => {
        console.log(typeof error.message);
      },
    });
  }

  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },
      validate: validateLogin,
      onSubmit,
    });
  return (
    <form 
      className="max-w-md bg-white shadow-sm rounded-sm p-4 mx-auto mt-12 space-y-4"
      onSubmit={handleSubmit}
    >
    <h1 className="text-clr-purple text-center font-bold text-2xl">
      Enter your information to Log in
    </h1>
    <FormControl
      label="Email"
      type="email"
      placeholder="eg jdoe@email.com"
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
    <Button type="submit" isLoading={isSigninIn}>
      Log In
    </Button>
    <p className="text-clr-gray-accent text-sm text-center font-semibold">
      Need an account?{' '}
      <span>
        <Link to="/sign-up" className="text-clr-blue-primary">
          Create an account
        </Link>
      </span>
    </p>
  </form>
  );
}

export default Login;
