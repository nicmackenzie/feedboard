import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { logout as logoutApi } from '../../services/auth';
import { useUser } from '../../context/user-context';
import toast from 'react-hot-toast';

export function useLogout() {
  const navigate = useNavigate();
  const { logout: removeUser } = useUser();

  const { isLoading: isLoggingOut, mutate: logout } = useMutation({
    mutationFn: logoutApi,
    onSuccess: () => {
      removeUser();
      navigate('/', { replace: true });
    },
    onError: () => {
      toast.error('Could not complete the request at this time');
    },
  });

  return { isLoggingOut, logout };
}
