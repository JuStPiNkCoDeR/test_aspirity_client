import React from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';

import FilterBlock from '../redux/containers/FilterActivityType';
import SortsSelector from '../redux/containers/SortsSelector';
import SortedTrainings from '../redux/containers/SortedTrainings';

const App = () => {
  return (
    <Provider store={store}>
      {/* Weeks graph */}
      <div>
        <FilterBlock />
        <SortsSelector />
      </div>
      <SortedTrainings />
    </Provider>
  );
};

export default App;
