import { FaSpinner } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import { useGetCategories } from './useGetCategories';
import { useUser } from '../../context/user-context';
import { Link, useSearchParams } from 'react-router-dom';
import { useLogout } from '../authentication/useLogout';

// function capitalize(word) {
//   return word.charAt(0).toUpperCase() + word.substring(1);
// }

function LeftSide() {
  const { loggedInUser } = useUser();
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
      {!loggedInUser ? <Login /> : <User loggedInUser={loggedInUser} />}
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
      } font-semibold cursor-pointer rounded-md text-xs`}
    >
      {String(category).toUpperCase()}
    </span>
  );
}

function Login() {
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
      </div>
    </div>
  );
}

function User({ loggedInUser }) {
  const { isLoggingOut, logout } = useLogout();
  return (
    <div className="bg-clr-white-accent shadow-md rounded-lg p-4 space-y-4">
      <div className="flex gap-2 items-center">
        <img
          src={loggedInUser.avatar_url}
          alt={loggedInUser.user_name}
          className="w-12 h-12 rounded-rounded"
        />
        <div>
          <h4 className="text-sm text-clr-gray-accent font-semibold capitalize">
            {loggedInUser.user_name}
          </h4>
          <p className="text-xs text-gray-400">Member Since 2023</p>
        </div>
      </div>
      <button
        disabled={isLoggingOut}
        onClick={logout}
        className="inline-flex items-center gap-2 justify-center px-4 py-2 border border-clr-purple rounded-md w-full transi hover:bg-gray-100 disabled:pointer-events-none"
      >
        <BiLogOut /> <span>Logout</span>
      </button>
    </div>
  );
}

export default LeftSide;
