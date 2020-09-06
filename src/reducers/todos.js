import { todosAction } from '../actions';

function todos(state = { values: [] }, { type, payload }) {
  switch (type) {
    case todosAction.ADD: {
      return { values: [...state.values, payload] };
    }
    case todosAction.UPDATE: {
      return {
        values: [
          ...state.values.map((item) => {
            return item.id !== payload.id ? item : payload;
          }),
        ],
      };
    }
    case todosAction.DELETE: {
      return { values: [...state.values.filter((item) => item.id !== payload.id)] };
    }
    default: {
      return state;
    }
  }
}

export default todos;
