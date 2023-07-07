import { useSelector } from 'react-redux';
import { TaskListItem } from 'components/TaskList/TaskListItem/TaskListItem';
import { getTasks, getStatusFilter } from '../../redux/selectors';

import { statusFilters } from '../../redux/constants';
import css from './TaskList.module.css';

const getVisibleTasks = (tasks, statusFilter) => {
  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);

    case statusFilters.completed:
      return tasks.filter(task => task.completed);

    default:
      return tasks;
  }
};

export const TaskList = () => {
  const tasks = useSelector(getTasks);
  const statusFilter = useSelector(getStatusFilter);

  const VisibleTasks = getVisibleTasks(tasks, statusFilter);

  return (
    <ul className={css.list}>
      {VisibleTasks.map(task => (
        <li className={css.listItem} key={task.id}>
          <TaskListItem task={task} />
        </li>
      ))}
    </ul>
  );
};
