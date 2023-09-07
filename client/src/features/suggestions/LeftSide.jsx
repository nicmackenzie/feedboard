import { FaSpinner } from 'react-icons/fa';
import { useGetCategories } from './useGetCategories';
function LeftSide() {
  const { isLoadingCategories, categories } = useGetCategories();
  return (
    <div className="space-y-6">
      <div className="w-full bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-lg h-28 flex items-center justify-center">
        <h1 className="text-xl font-bold text-white tracking-wider">
          FeedBoard
        </h1>
      </div>
      <div className="bg-clr-white-accent shadow-md rounded-lg p-4 flex gap-2 flex-wrap">
        {isLoadingCategories ? (
          <Loading />
        ) : (
          [{ id: 'all', category: 'All' }, ...categories].map(category => (
            <Category key={category.id} category={category.category} />
          ))
        )}
      </div>
    </div>
  );
}

function Loading() {
  return (
    <div className="animate-spin mx-auto text-clr-purple">
      <FaSpinner size={24} />
    </div>
  );
}

export function Category({ category }) {
  return (
    <span className="inline-block px-4 py-2 bg-violet-100 transition-colors hover:bg-violet-200 text-clr-blue-primary font-semibold cursor-pointer rounded-md text-sm ">
      {category}
    </span>
  );
}

export default LeftSide;
