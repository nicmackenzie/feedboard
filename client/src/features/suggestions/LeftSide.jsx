import { FaSpinner } from 'react-icons/fa';
import { useGetCategories } from './useGetCategories';
import { useUser } from '../../context/user-context';
import { Link, useSearchParams } from 'react-router-dom';
function LeftSide() {
  const { loggedInUser, setUser } = useUser();
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
            <Category
              key={category.id}
              category={category.category}
              clickable={true}
            />
          ))
        )}
      </div>
      {!loggedInUser && <Login onFakeLogin={setUser} />}
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

export function Category({ category, clickable }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const selected = searchParams.get('category') || 'all';

  function handleClick() {
    if (!clickable) return;
    searchParams.set('category', String(category).toLowerCase());
    setSearchParams(searchParams);
  }

  return (
    <span
      onClick={handleClick}
      className={`inline-block px-4 py-2 transition-colors ${
        selected === String(category).toLowerCase() && clickable
          ? 'bg-clr-blue-primary text-clr-white-primary hover:bg-clr-blue-secondary'
          : 'bg-violet-100 hover:bg-violet-200 text-clr-blue-primary'
      } font-semibold cursor-pointer rounded-md text-sm`}
    >
      {category}
    </span>
  );
}

function Login({ onFakeLogin }) {
  const fakeUser = {
    id: 1,
    user_name: 'Fake User',
    avatar_url: 'https://i.pravatar.cc/48?u=499476',
    email: 'fake@test.com',
  };
  return (
    <div className="bg-clr-white-accent shadow-md rounded-lg p-4 space-y-2">
      <p className="text-sm text-clr-gray-accent">
        You must be signed in to add suggestion,upvote or comment
      </p>

      <div className="flex items-center justify-between">
        <Link
          to="/login"
          className="text-clr-blue-primary font-semibold text-sm"
        >
          Log in
        </Link>
        <button
          className="text-clr-blue-secondary font-semibold text-sm"
          onClick={() => onFakeLogin(fakeUser)}
        >
          Fake Login
        </button>
      </div>
    </div>
  );
}

export default LeftSide;
