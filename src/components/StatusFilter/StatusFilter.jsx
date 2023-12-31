import { useSelector, useDispatch } from 'react-redux';
import { setStatusFilter } from '../../redux/filtersSlice';

import { Button } from 'components/Button/Button';
import { statusFilters } from '../../redux/constants';
import { getStatusFilter } from 'redux/selectors';

import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(getStatusFilter);

  const handleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.wrapper}>
      <Button
        selected={filter === statusFilters.all}
        onClick={() => {
          handleFilterChange(statusFilters.all);
        }}
      >
        All contacts
      </Button>
      <Button
        selected={filter === statusFilters.active}
        onClick={() => {
          handleFilterChange(statusFilters.active);
        }}
      >
        Contacts
      </Button>
      <Button
        selected={filter === statusFilters.marked}
        onClick={() => {
          handleFilterChange(statusFilters.marked);
        }}
      >
        Marked
      </Button>
    </div>
  );
};
