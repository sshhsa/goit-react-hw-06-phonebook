import { useDispatch } from 'react-redux';
import { deleteContact, toggleMarked } from '../../../redux/contactsSlice';

import { MdClose } from 'react-icons/md';
import css from './ContactItem.module.css';

export const ContactItem = ({ contact }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleMarked(contact.id));
  };

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleToggle}
        checked={contact.marked}
      />
      <p className={css.text}>{contact.name}</p>
      <p className={css.text}>{contact.number}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
