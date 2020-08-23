import {connect} from 'react-redux';
import {setActivityTypeFilter} from '../actions';

import FilterBlock from '../../components/FilterBlock';

const mapStateToProps = (state) => ({
  activityType: state.activityTypeFilter,
});

const mapDispatchToProps = (dispatch) => ({
  changeActivityTypeFilter(activityType) {
    dispatch(setActivityTypeFilter(activityType));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(FilterBlock);
