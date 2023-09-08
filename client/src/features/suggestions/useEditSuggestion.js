import { useMutation, useQueryClient } from '@tanstack/react-query';
import { editSuggestion as editSuggestionApi } from '../../services/suggestions';
// import { useParams } from 'react-router-dom';

export function useEditSuggestion() {
  //   const { id } = useParams();
  const queryClient = useQueryClient();
  const { isLoading: isEditing, mutate: editSuggestion } = useMutation({
    mutationFn: ({ id, suggestionDetails }) =>
      editSuggestionApi(id, suggestionDetails),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  return { isEditing, editSuggestion };
}
