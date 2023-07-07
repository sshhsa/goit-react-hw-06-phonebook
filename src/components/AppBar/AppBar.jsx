import { StatusFilter } from 'components/StatusFilter/StatusFilter';
import css from './AppBar.module.css';

export const AppBar = () => {
  return (
    <header className={css.wrapper}>
      <section className={css.section}>
        <h2 className={css.title}>Filter contacts by status</h2>
        <StatusFilter />
      </section>
    </header>
  );
};
