import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/auth';
import { useUser } from '../../context/user-context';

export function useSignup() {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const { isLoading: isSigninIn, mutate: signup } = useMutation({
    mutationFn: userDetails => signupApi(userDetails),
    onSuccess: data => {
      setUser(data);
      navigate('/', { replace: true });
    },
  });

  return { isSigninIn, signup };
}
