import { useFormik } from 'formik';
import Button from '../../ui/Button';
import FormControl from '../../ui/FormControl';
import FormSelect from '../../ui/FormSelect';
import { useGetCategories } from './useGetCategories';
import { validateAddSuggestion } from './validation';
import { useUser } from '../../context/user-context';
import { useAddSuggestion } from './useAddSuggestion';
import { useEditSuggestion } from './useEditSuggestion';

function SuggestionForm({ onSetDisplayForm, isEdit, suggestion }) {
  const { isLoadingCategories, categories } = useGetCategories();
  const { isAdding, addSuggestion } = useAddSuggestion();
  const { isEditing, editSuggestion } = useEditSuggestion();
  const { loggedInUser } = useUser();

  function onSubmit(values) {
    const formFields = {
      title: values.title,
      description: values.description,
      category_id: values.category,
      user_id: loggedInUser.id,
    };
    if (!isEdit) {
      addSuggestion(formFields, {
        onSuccess: () => {
          onSetDisplayForm(false);
        },
      });
    } else {
      editSuggestion(
        { id: suggestion.id, suggestionDetails: formFields },
        {
          onSuccess: () => {
            onSetDisplayForm(false);
          },
        }
      );
    }
  }

  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        title: isEdit ? suggestion.title : '',
        category: isEdit ? suggestion.category_id : '',
        description: isEdit ? suggestion.description : '',
      },
      onSubmit,
      validate: validateAddSuggestion,
    });

  if (isLoadingCategories) return null;

  const options = categories.map(category => ({
    value: category.id,
    label: category.category,
  }));

  return (
    <form
      className="bg-white rounded-lg overflow-hidden shadow-sm"
      onSubmit={handleSubmit}
    >
      <header className="p-4 bg-clr-purple text-clr-white-primary text-2xl text-center ">
        <h2>{isEdit ? 'Edit Suggestion' : 'Add Suggestion'}</h2>
      </header>
      <div className="p-4 space-y-4">
        <FormControl
          label="Title"
          id="title"
          name="title"
          placeholder="Eg Dark theme needed"
          value={values.title}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.title && errors.title}
        />
        <FormSelect
          label="Category"
          id="category"
          name="category"
          options={options}
          value={values.category}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.category && errors.category}
        />
        <FormControl
          label="Description"
          id="description"
          name="description"
          placeholder="Provide your description..."
          value={values.description}
          onBlur={handleBlur}
          onChange={handleChange}
          error={touched.description && errors.description}
        />
        <div className="space-x-2">
          <Button type="submit" isLoading={isAdding || isEditing}>
            {isEdit ? 'Edit Suggestion' : 'Add Suggestion'}
          </Button>
          <Button
            type="button"
            isLoading={isAdding || isEditing}
            isDelete={true}
            onClick={() => onSetDisplayForm(false)}
          >
            Cancel
          </Button>
        </div>
      </div>
    </form>
  );
}

export default SuggestionForm;
