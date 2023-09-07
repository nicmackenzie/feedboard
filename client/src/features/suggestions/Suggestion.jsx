import { Link } from 'react-router-dom';
import { BiChevronLeft } from 'react-icons/bi';
import Button from '../../ui/Button';
import FormControl from '../../ui/FormControl';
import { useGetSuggestion } from './useGetSuggestion';
import { useUser } from '../../context/user-context';
import { useFormik } from 'formik';
import { Suggestion as SuggestionComponent } from './RightSide';
import { validateComment } from './validation';
import { useAddComment } from './useAddComment';
function Suggestion() {
  const { isLoadingSuggestion, suggestion = {} } = useGetSuggestion();
  const { loggedInUser } = useUser();

  return (
    <div className="max-w-3xl mx-auto mt-12 space-y-6">
      <Header isLoading={isLoadingSuggestion} loggedInUser={loggedInUser} />
      <SuggestionComponent suggestion={suggestion} />
      <NewComment loggedInUser={loggedInUser} suggestionId={suggestion.id} />
    </div>
  );
}

function Header({ isLoading, loggedInUser }) {
  return (
    <header className="flex items-center justify-between">
      <Link to=".." className="flex items-center gap-1 text-clr-gray-primary">
        <BiChevronLeft size={24} />
        <span className="inline-block text-clr-gray-secondary font-semibold hover:underline">
          Go Back
        </span>
      </Link>
      <Button disabled={isLoading || !loggedInUser}>Edit Feedback</Button>
    </header>
  );
}

function NewComment({ loggedInUser, suggestionId }) {
  return (
    <div className="shadow-md bg-white rounded-lg p-6 space-y-2">
      <h4 className="text-clr-gray-secondary font-semibold">Add Comment</h4>
      {loggedInUser ? (
        <p className="text-sm text-clr-gray-accent text-center font-semibold">
          You must be logged in to comment
        </p>
      ) : (
        <NewCommentForm suggestionId={suggestionId} />
      )}
    </div>
  );
}

function NewCommentForm({ suggestionId }) {
  const { isCommenting, addComment } = useAddComment();

  function onSubmit(values) {
    const formFields = {
      suggestion_id: suggestionId,
      user_id: 1,
      comment: values.comment,
    };
    addComment(formFields);
    resetForm();
  }

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    resetForm,
    errors,
    touched,
    values,
  } = useFormik({
    initialValues: { comment: '' },
    validate: validateComment,
    onSubmit,
  });

  return (
    <form className="space-y-2" onSubmit={handleSubmit}>
      <FormControl
        label="Your Comment"
        id="comment"
        name="comment"
        onBlur={handleBlur}
        onChange={handleChange}
        error={touched.comment && errors.comment}
        value={values.comment}
      />
      <Button type="submit" disabled={isCommenting}>
        Add Comment
      </Button>
    </form>
  );
}

export default Suggestion;
