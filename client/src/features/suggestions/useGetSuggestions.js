import { useQuery } from '@tanstack/react-query';
import { getSuggestions } from '../../services/suggestions';

export function useGetSuggestions() {
  const { isLoading: isLoadingSuggestions, data: suggestions } = useQuery({
    queryKey: ['suggestions'],
    queryFn: getSuggestions,
  });

  return { isLoadingSuggestions, suggestions };
}
