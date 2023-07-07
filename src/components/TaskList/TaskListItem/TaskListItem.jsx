import { useDispatch } from 'react-redux';
import { toggleCompleted, deletetask } from 'redux/actions';

import { MdClose } from 'react-icons/md';
import css from './TaskListItem.module.css';

export const TaskListItem = ({ task }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleCompleted(task.id));
  };

  const handleDelete = () => {
    dispatch(deletetask(task.id));
  };

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        onChange={handleToggle}
        checked={task.completed}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
