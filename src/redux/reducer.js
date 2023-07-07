import { createReducer } from '@reduxjs/toolkit';
import { statusFilters } from './constants';
import {
  addTask,
  deleteTask,
  setStatusFilter,
  toggleCompleted,
} from './actions';

const tasksInitialState = [
  { id: 0, text: 'Learn HTML and CSS', completed: true },
  { id: 1, text: 'Learn SCSS and SASS', completed: true },
  { id: 2, text: 'Learn React', completed: true },
  { id: 3, text: 'Learn Redux', completed: false },
  { id: 4, text: 'Learn Node.js and TypeScript', completed: false },
  { id: 5, text: 'Finish commercial project', completed: false },
];

export const tasksReducer = createReducer(tasksInitialState, {
  [addTask](state, action) {
    state.push(action.payload);
  },
  [deleteTask](state, action) {
    const index = state.findIndex(task => task.id === action.payload);
    state.splice(index, 1);
  },
  [toggleCompleted](state, action) {
    for (const task of state) {
      if (task.id === action.payload) {
        task.completed = !task.completed;
      }
    }
  },
});

const filtersInitialState = { status: statusFilters.all };

export const filtersReducer = createReducer(filtersInitialState, {
  [setStatusFilter]: (state, action) => {
    state.status = action.payload;
  },
});
