import { createStore } from 'redux';

const INITIAL_STATE = {
  data: [
    'Get up early',
    'Have Breakfast',
    'Start coding'
  ],
};

function tasks(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'ADD_TASK':
      return { 
        ...state, 
        data: [...state.data, action.title] 
      };
    case 'REMOVE_TASK':
      return {
        ...state,
        data: action.tasks
      }
    default:
      return state
  }
}

const store = createStore(tasks);

export default store;
