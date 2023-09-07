import { useFormik } from 'formik';
import Button from '../../ui/Button';
import FormControl from '../../ui/FormControl';
import FormSelect from '../../ui/FormSelect';
import { useGetCategories } from './useGetCategories';
import { validateAddSuggestion } from './validation';
import { useUser } from '../../context/user-context';
import { useAddSuggestion } from './useAddSuggestion';

function SuggestionForm({ onSetDisplayForm }) {
  const { isLoadingCategories, categories } = useGetCategories();
  const { isAdding, addSuggestion } = useAddSuggestion();
  const { loggedInUser } = useUser();

  function onSubmit(values) {
    const formFields = {
      title: values.title,
      description: values.description,
      category_id: values.category,
      user_id: loggedInUser.id,
    };
    addSuggestion(formFields, {
      onSuccess: () => {
        onSetDisplayForm(false);
      },
    });
  }

  const { handleBlur, handleChange, handleSubmit, values, touched, errors } =
    useFormik({
      initialValues: {
        title: '',
        category: '',
        description: '',
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
        <h2>Add Suggestion</h2>
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
          label="Description"
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
        <Button type="submit" isLoading={isAdding}>
          Add Suggestion
        </Button>
      </div>
    </form>
  );
}

export default SuggestionForm;
