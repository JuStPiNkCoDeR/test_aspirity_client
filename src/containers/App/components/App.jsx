import React from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';

import FilterBlock from '../redux/containers/FilterActivityType';
import SortsSelector from '../redux/containers/SortsSelector';
import SortedTrainings from '../redux/containers/SortedTrainings';
import ActionableAddTrainingBlock from
  '../redux/containers/ActionableAddTrainingBlock';
import WeekTrainingGraph from '../redux/containers/WeekTrainingGraph';

const App = () => {
  return (
    <Provider store={store}>
      <WeekTrainingGraph />
      <div>
        <FilterBlock />
        <SortsSelector />
        <ActionableAddTrainingBlock />
      </div>
      <SortedTrainings />
    </Provider>
  );
};

export default App;
