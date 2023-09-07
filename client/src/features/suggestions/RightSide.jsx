import { FcFeedback } from 'react-icons/fc';
import { BiChevronUp, BiSolidMessageRounded } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import { useUser } from '../../context/user-context';
import { useGetSuggestions } from './useGetSuggestions';
import { Category } from './LeftSide';

function RightSide() {
  const { isLoadingSuggestions, suggestions } = useGetSuggestions();
  if (isLoadingSuggestions)
    return (
      <p className="text-lg font-bold text-clr-gray-accent">
        Loading Suggestions...
      </p>
    );
  return (
    <div className="space-y-6">
      <Header count={suggestions.length} />
      {suggestions.length > 0 ? (
        suggestions.map(suggestion => (
          <Suggestion key={suggestion.id} suggestion={suggestion} />
        ))
      ) : (
        <NoRecords />
      )}
    </div>
  );
}

function Header({ count }) {
  const { loggedInUser } = useUser();
  return (
    <header className="bg-clr-gray-secondary rounded-lg px-4 py-2 flex items-center justify-between text-clr-white-primary">
      <div className="flex items-center gap-4">
        <FcFeedback size={24} />
        <span className="text-lg font-semibold">
          {count || 0} {count > 1 ? 'Suggestions' : 'Suggestion'}
        </span>
      </div>
      <Link
        to="/new-suggestion"
        className={`btn ${
          !loggedInUser ? 'pointer-events-none opacity-50' : ''
        }`}
      >
        Add Suggestion
      </Link>
    </header>
  );
}

function Suggestion({ suggestion }) {
  return (
    <article className="bg-white rounded-lg shadow-md p-6 flex items-center gap-8">
      <UpVoteButton upvotes={suggestion.upvotes} />
      <SuggestionDetails
        id={suggestion.id}
        title={suggestion.title}
        description={suggestion.description}
        category={suggestion.category}
      />
      <div className="ml-auto text-gray-200 flex items-center gap-2">
        <BiSolidMessageRounded size={24} />
        <div className="text-2xl font-bold text-clr-gray-primary">
          {suggestion.comments.length}
        </div>
      </div>
    </article>
  );
}

function NoRecords() {
  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col gap-6 items-center py-6">
      <img src="./illustration-empty.svg" alt="Not found illustration" />
      <p className="text-lg font-bold text-clr-gray-primary">
        There is no feedback yet
      </p>
      <p className="text-xs text-clr-gray-accent max-w-md text-center">
        Got a suggestion? Found a bug that needs to be squashed? We love hearing
        about new ideas to improve our app.
      </p>
    </div>
  );
}

function UpVoteButton({ upvotes }) {
  return (
    <button
      type="button"
      className="bg-clr-white-secondary rounded-md text-clr-blue-primary h-16 w-12 flex flex-col items-center justify-center transition-colors hover:bg-clr-white-accent"
    >
      <BiChevronUp size={24} />
      <span className="inline-block text-sm font-semibold text-clr-gray-primary">
        {upvotes}
      </span>
    </button>
  );
}

function SuggestionDetails({ id, title, description, category }) {
  return (
    <div className="space-y-2">
      <Link
        to={`/suggestions/${id}`}
        className="font-bold text-clr-gray-primary text-lg transition-colors hover:text-clr-blue-primary"
      >
        {title}
      </Link>
      <p className="text-sm text-clr-gray-accent">{description}</p>
      <Category category={category} />
    </div>
  );
}

export default RightSide;
