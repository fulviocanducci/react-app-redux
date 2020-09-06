import { counterAction } from '../actions';

function counter(state = { value: 0 }, { type }) {
  switch (type) {
    case counterAction.INCREMENT: {
      return { value: state.value + 1 };
    }
    case counterAction.DECREMENT: {
      return { value: state.value - 1 };
    }
    default: {
      return state;
    }
  }
}

export default counter;



