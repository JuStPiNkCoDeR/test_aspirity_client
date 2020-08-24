import React from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';

import FilterBlock from '../redux/containers/FilterActivityType';
import SortsSelector from '../redux/containers/SortsSelector';

const App = () => {
  return (
    <Provider store={store}>
      {/* Weeks graph */}
      <div>
        <FilterBlock />
        <SortsSelector />
      </div>
      {/* Trainings */}
    </Provider>
  );
};

export default App;
