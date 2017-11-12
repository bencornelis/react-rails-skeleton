import constants from './../constants';
const { defaultState, types } = constants;

export default (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
}