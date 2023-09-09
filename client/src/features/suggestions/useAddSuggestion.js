import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addSuggestion as addSuggestionApi } from '../../services/suggestions';

export function useAddSuggestion() {
  const queryClient = useQueryClient();
  const { isLoading: isAdding, mutate: addSuggestion } = useMutation({
    mutationFn: suggestionDetails => addSuggestionApi(suggestionDetails),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  return { isAdding, addSuggestion };
}
