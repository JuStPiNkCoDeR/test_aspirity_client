import React from 'react';
import PropTypes from 'prop-types';

const Training = ({ idx, data }) => {
    return (
        <tr>
            <th scope="row">{idx+1}</th>
        </tr>
    )
};

Training.propTypes = {
    idx: PropTypes.number.isRequired,
    data: PropTypes.shape({
        ID: PropTypes.string.isRequired,
        date: PropTypes.string.isRequired,
        fullName: PropTypes.string.isRequired,
        activityType: PropTypes.string.isRequired,
        distance: PropTypes.number.isRequired,
        comment: PropTypes.string,
    }).isRequired,
};

export default Training;