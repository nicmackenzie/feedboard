import { Link } from 'react-router-dom';
import Button from '../../ui/Button';
import FormControl from '../../ui/FormControl';

function Signup() {
  return (
    <form className="max-w-xl bg-white shadow-sm rounded-sm p-4 mx-auto mt-12 space-y-4">
      <h1 className="text-clr-purple text-center font-bold text-2xl">
        Create a new account
      </h1>
      <FormControl
        label="Full Name"
        placeholder="eg Jane Doe"
        id="fullName"
        name="fullName"
      />
      <FormControl
        label="Username"
        placeholder="eg jdoe"
        id="username"
        name="username"
      />
      <FormControl
        label="Email"
        type="email"
        placeholder="eg jdoe@test.com"
        id="email"
        name="email"
      />
      <FormControl
        label="Password"
        type="password"
        id="password"
        name="password"
      />
      <FormControl
        label="Confirm Password"
        type="password"
        id="confirmPassword"
        name="confirmPassword"
      />
      <Button>Sign Up</Button>
      <p className="text-clr-gray-accent text-sm text-center font-semibold">
        Already Have an account?{' '}
        <span>
          <Link to="/login" className="text-clr-blue-primary">
            Log in
          </Link>
        </span>
      </p>
    </form>
  );
}

export default Signup;
