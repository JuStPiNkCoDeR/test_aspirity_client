import {connect} from 'react-redux';

import Trainings from '../../components/Trainings';

const mapStateToProps = (state) => ({
  trainings: state.trainings,
  sortData: state.sorts,
});

export default connect(mapStateToProps)(Trainings);
