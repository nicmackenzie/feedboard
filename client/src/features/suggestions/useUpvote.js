import { useMutation, useQueryClient } from '@tanstack/react-query';
import { upvote as upvoteApi } from '../../services/suggestions';
import toast from 'react-hot-toast';

export function useUpvote() {
  const queryClient = useQueryClient();
  const { isLoading: isVoting, mutate: upvote } = useMutation({
    mutationFn: details => upvoteApi(details),
    onSuccess: () => {
      queryClient.invalidateQueries();
    },
    onError: () => {
      toast.error(
        '🤔 Oops! Looks like you have already upvoted on this matter!'
      );
    },
  });

  return { isVoting, upvote };
}
