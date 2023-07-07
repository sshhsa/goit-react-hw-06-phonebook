import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

import { Button } from 'components/Button/Button';
import css from './ContactForm.module.css';

export const ContactForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    dispatch(addContact(form.elements.text.value));
    form.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="text"
        placeholder="Add your contact..."
      />
      <Button type="submit">Add contact</Button>
    </form>
  );
};
