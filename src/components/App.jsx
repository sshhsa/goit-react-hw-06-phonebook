import { Layout } from 'components/Layout/Layout';
import { AppBar } from 'components/AppBar/AppBar';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/TaskList/ContactList';

export const App = () => {
  return (
    <Layout>
      <AppBar />
      <ContactForm />
      <ContactList />
    </Layout>
  );
};
