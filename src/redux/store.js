import { createStore } from 'redux';

const initialState = {
  destination: 'Discover Amazing Places',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    // Add any actions you might need in the future
    default:
      return state;
  }
}

const store = createStore(reducer);

export default store;