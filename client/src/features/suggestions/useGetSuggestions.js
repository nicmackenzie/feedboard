import { useQuery } from '@tanstack/react-query';
import { getSuggestions } from '../../services/suggestions';
import { useSearchParams } from 'react-router-dom';

export function useGetSuggestions() {
  const [searchParams] = useSearchParams();
  const selectedCategory = searchParams.get('category') || null;

  const { isLoading: isLoadingSuggestions, data: suggestions } = useQuery({
    queryKey: ['suggestions', selectedCategory],
    queryFn: () => getSuggestions(selectedCategory),
  });

  return { isLoadingSuggestions, suggestions };
}
