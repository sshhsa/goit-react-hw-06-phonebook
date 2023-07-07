import { useSelector } from 'react-redux';
import { ContactItem } from './ContactItem/ContactItem';
import { getContacts, getStatusFilter } from '../../redux/selectors';

import { statusFilters } from '../../redux/constants';
import css from './ContactList.module.css';

const getVisibleTasks = (contacts, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return contacts.filter(contact => !contact.marked);

    case statusFilters.marked:
      return contacts.filter(contact => contact.marked);

    default:
      return contacts;
  }
};

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const statusFilter = useSelector(getStatusFilter);

  const VisibleTasks = getVisibleTasks(contacts, statusFilter);

  return (
    <ul className={css.list}>
      {VisibleTasks.map(contact => (
        <li className={css.listItem} key={contact.id}>
          <ContactItem contact={contact} />
        </li>
      ))}
    </ul>
  );
};
