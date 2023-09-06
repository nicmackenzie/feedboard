import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import FormControl from '../../ui/FormControl';

function Login() {
  return (
    <form className="max-w-xl bg-white shadow-sm rounded-sm p-4 mx-auto mt-12 space-y-4">
    <h1 className="text-clr-purple text-center font-bold text-2xl">
      Enter your information to Log in
    </h1>
    <FormControl
      label="Email"
      type="email"
      placeholder="eg jdoe@email.com"
      id="email"
      name="email"
    />
    <FormControl
      label="Password"
      type="password"
      id="password"
      name="password"
    />
    <Button>Log In</Button>
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
