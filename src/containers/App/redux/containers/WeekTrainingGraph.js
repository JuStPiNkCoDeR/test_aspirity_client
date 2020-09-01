import {connect} from 'react-redux';

import WeekGraph from '../../components/WeekGraph';

const mapStateToProps = (state) => ({
  trainings: state.trainings,
  activityType: state.activityTypeFilter,
});

export default connect(mapStateToProps)(WeekGraph);
