import {connect} from 'react-redux';
import {modifyTraining, removeTraining} from '../actions';
import Training from '../../components/Training';

const mapStateToProps = (state, ownProps) => ({
  ...ownProps,
});

const mapDispatchToProps = (dispatch) => ({
  deleteTraining(data) {
    dispatch(removeTraining(data));
  },
  updateTraining(data) {
    dispatch(modifyTraining(data));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Training);
