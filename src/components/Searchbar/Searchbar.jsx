import PropTypes from 'prop-types';
import { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import css from './Searchbar.module.css';

export default function Searchbar({ onSubmit }) {
  const [imageName, setImageName] = useState('');

  const onFormChange = evt => {
    setImageName(evt.currentTarget.value.toLowerCase());
  };

  const onFormSubmit = evt => {
    evt.preventDefault();

    if (imageName.trim() === '') {
      toast.error('Enter correct search query');
      return;
    }
    onSubmit(imageName);
    reset();
  };

  const reset = () => {
    setImageName('');
  };

  return (
    <header className={css.SearchBar}>
      <form className={css.SearchForm} onSubmit={onFormSubmit}>
        <button type="submit" className={css.SearchFormButton}>
          <span className={css.SearchFormButtonLabel}>Search</span>
        </button>
        <input
          className={css.SearchFormInput}
          name="imageName"
          type="text"
          value={imageName}
          onChange={onFormChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
