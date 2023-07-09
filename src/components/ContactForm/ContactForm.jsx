import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

import { Button } from 'components/Button/Button';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(
      addContact(
        form.elements.name.value.trim(),
        form.elements.number.value.trim()
      )
    );
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="name"
        name="name"
        placeholder="Add your contact..."
      />
      <input
        className={css.field}
        type="number"
        name="number"
        placeholder="Add your contact..."
      />
      <Button type="submit">Add contact</Button>
    </form>
  );
};
