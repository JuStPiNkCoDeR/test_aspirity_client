import React from 'react';
import PropTypes from 'prop-types';
import {Table} from 'reactstrap';

import Training from './Training';

const Trainings = ({trainings}) => {
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
        {trainings.map((training, index) => (
          <Training key={training.ID} idx={index} data={training} />
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
};

export default Trainings;
