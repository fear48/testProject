import * as types from "../actions/actiontypes";
import Immutable from "seamless-immutable";

const initialState = Immutable({
  users: [],
  isLoading: false,
  currentElement: {}
});

export function root(state = initialState, action = {}) {
  switch (action.type) {
    case types.GET_USERS:
      return state.merge({ isLoading: true });
    case types.GET_USER:
      return state.merge({ currentElement: action.user });
    case types.RECEIVE_USERS:
      return state.merge({ users: action.users, isLoading: false });

    default:
      return state;
  }
}
