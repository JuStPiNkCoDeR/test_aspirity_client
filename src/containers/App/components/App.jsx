import React from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';

import FilterBlock from '../redux/containers/FilterActivityType';

const App = () => {
  return (
    <Provider store={store}>
      {/* Weeks graph */}
      <div>
        <FilterBlock />
        {/* Sorts */}
      </div>
      {/* Trainings */}
    </Provider>
  );
};

export default App;
