import ACTIONS from 'const/actions';

const {
  INCREMENT,
  DECREMENT,
  INCREMENT_IF_ODD,
} = ACTIONS;

const initState = 0

export default function counter(state = initState, action: {type: string}) {
  switch (action.type) {
    case INCREMENT:
      return state + 1;
    case INCREMENT_IF_ODD:
      return (state % 2 !== 0) ? state + 1 : state;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
}
