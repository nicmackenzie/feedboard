import { useMutation, useQueryClient } from '@tanstack/react-query';
import { addComment as addCommentApi } from '../../services/suggestions';

export function useAddComment() {
  const queryClient = useQueryClient();
  const { isLoading: isCommenting, mutate: addComment } = useMutation({
    mutationFn: commentDetails => addCommentApi(commentDetails),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
  });

  return { isCommenting, addComment };
}
