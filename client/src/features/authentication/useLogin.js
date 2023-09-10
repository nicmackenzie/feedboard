import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { login as loginApi } from '../../services/auth';
import { useUser } from '../../context/user-context';

export function useLogin() {
  const navigate = useNavigate();
  const { setUser } = useUser();
  const { isLoading: isSigninIn, mutate: login } = useMutation({
    mutationFn: userDetails => loginApi(userDetails),
    onSuccess: data => {
      setUser(data);
      navigate('/', { replace: true });
    },
  });

  return { isSigninIn, login };
}