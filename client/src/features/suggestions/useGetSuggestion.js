import { useQuery } from '@tanstack/react-query';
import { getSuggestion } from '../../services/suggestions';
import { useParams } from 'react-router-dom';

export function useGetSuggestion() {
  const { id } = useParams();
  const { isLoading: isLoadingSuggestion, data: suggestion } = useQuery({
    queryKey: ['suggestion', id],
    queryFn: () => getSuggestion(id),
  });

  return { isLoadingSuggestion, suggestion };
}
