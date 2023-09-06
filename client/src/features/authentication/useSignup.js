import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { signup as signupApi } from '../../services/auth';

export function useSignup() {
  const navigate = useNavigate();
  const { isLoading: isSigninIn, mutate: signup } = useMutation({
    mutationFn: userDetails => signupApi(userDetails),
    onSuccess: data => {
      navigate('/', { replace: true });
    },
  });

  return { isSigninIn, signup };
}
