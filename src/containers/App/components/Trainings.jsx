import React from 'react';
import PropTypes from 'prop-types';
import {Table} from 'reactstrap';

import ActionableTraining from '../redux/containers/ActionableTraining';

/**
 * @description Function for sorting trainings by the given param
 * @param {'ASC'|'DESC'} direction
 * @param {'DATE'|'DISTANCE'} param
 * @return {function}
 */
function compareTraining(direction, param) {
  return function(a, b) {
    const firstParam =
        param === 'DATE' ? new Date(a.date).getTime() : a.distance;
    const secondParam =
        param === 'DATE' ? new Date(b.date).getTime() : b.distance;

    switch (direction) {
      case 'ASC':
        return firstParam - secondParam;
      case 'DESC':
        return secondParam - firstParam;
      default:
        return 0;
    }
  };
}

const Trainings = ({trainings, sortData}) => {
  const sortedTrainings = trainings.sort(
      compareTraining(sortData.direction, sortData.param),
  );

  return (
    <Table hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Date</th>
          <th>Full Name</th>
          <th>Activity Type</th>
          <th>Distance(km)</th>
          <th>Comment</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {sortedTrainings.map((training, index) => (
          <ActionableTraining key={training.ID} idx={index} data={training} />
        ))}
      </tbody>
    </Table>
  );
};

Trainings.propTypes = {
  trainings: PropTypes.arrayOf(
      PropTypes.shape({
        ID: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        fullName: PropTypes.string.isRequired,
        activityType: PropTypes.string.isRequired,
        distance: PropTypes.number.isRequired,
        comment: PropTypes.string,
      }),
  ).isRequired,
  sortData: PropTypes.shape({
    direction: PropTypes.oneOf(['ASC', 'DESC']),
    param: PropTypes.oneOf(['DATE', 'DISTANCE']),
  }).isRequired,
};

export default Trainings;
