import { useMutation, useQueryClient } from '@tanstack/react-query';
import { deleteSuggestion as deleteSuggestionApi } from '../../services/suggestions';
import { useNavigate } from 'react-router-dom';

export function useDeleteSuggestion() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const { isLoading: isDeleting, mutate: deleteSuggestion } = useMutation({
    mutationFn: id => deleteSuggestionApi(id),
    onSuccess: () => {
      navigate('/', { replace: true });
      queryClient.invalidateQueries();
    },
  });

  return { isDeleting, deleteSuggestion };
}
