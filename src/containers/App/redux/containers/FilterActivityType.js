import {connect} from 'react-redux';
import {fetchTrainings, setActivityTypeFilter} from '../actions';

import FilterBlock from '../../components/FilterBlock';

const mapStateToProps = (state) => ({
  activityType: state.activityTypeFilter,
});

const mapDispatchToProps = (dispatch) => ({
  changeActivityTypeFilter(activityType) {
    dispatch(setActivityTypeFilter(activityType));
  },
  fetchTrainings(filter) {
    dispatch(fetchTrainings(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterBlock);
