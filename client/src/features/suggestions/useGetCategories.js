import { useQuery } from '@tanstack/react-query';
import { getCategories } from '../../services/suggestions';

export function useGetCategories() {
  const { isLoading: isLoadingCategories, data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  return { isLoadingCategories, categories };
}
