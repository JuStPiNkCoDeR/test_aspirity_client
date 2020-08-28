import {connect} from 'react-redux';
import {addTraining} from '../actions';

import AddTrainingBlock from '../../components/AddTrainingBlock';

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch) => ({
  saveTraining(data) {
    dispatch(addTraining(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AddTrainingBlock);
