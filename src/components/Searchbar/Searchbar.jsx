import { Formik, ErrorMessage } from 'formik';
// import { toast } from 'react-toastify';
// import PropTypes from 'prop-types';
import { Forma, Input, SearchButton, SearchLabel } from './Searchbar.styled';

const initialValues = {
  search: '',
};

export const Searchbar = ({ onSubmit }) => {
  const handleSubmit = async (values, actions) => {
    if (values.search.trim() === '') {
      // toast.warning('Please input name for search.');
      alert('Please input name for search.');
      return;
    }

    await onSubmit(values.search.trim());
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Forma>
        <Input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
        />
        <ErrorMessage name="search" />

        <SearchButton type="submit">
          <SearchLabel />
        </SearchButton>
      </Forma>
    </Formik>
  );
};

// Searchbar.propTypes = {
//   onSubmit: PropTypes.func.isRequired,
// };
