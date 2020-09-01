import {connect} from 'react-redux';
import {setSort} from '../actions';

import SortsBlock from '../../components/SortsBlock';

const mapStateToProps = (state) => ({
  sorts: {
    date: state.sorts.param === 'DATE' ? state.sorts.direction : 'no',
    distance: state.sorts.param === 'DISTANCE' ? state.sorts.direction : 'no',
  },
});

const mapDispatchToProps = (dispatch) => ({
  changeSort(sortData) {
    dispatch(setSort(sortData));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(SortsBlock);
