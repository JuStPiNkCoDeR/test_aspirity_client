import {connect} from 'react-redux';

import WeekGraph from '../../components/WeekGraph';

const mapStateToProps = (state) => ({
  trainings: state.trainings,
});

export default connect(mapStateToProps)(WeekGraph);
