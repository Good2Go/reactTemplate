import { createStore } from 'redux';

import rootReducer from '../reducers/index.jsx';

export default function() {
  const store = createStore(rootReducer); // Reducers
  return store;
}
