import React from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup, Input, Label} from 'reactstrap';
import {sortableParams, sortDirections} from '../redux/actions';

const SortsBlock = ({sorts, changeSort}) => {
  const handleDateSortChange = (event) => {
    const data = event.currentTarget.value;

    changeSort({param: sortableParams.DATE, direction: data});
  };

  const handleDistanceSortChange = (event) => {
    const data = event.currentTarget.value;

    changeSort({param: sortableParams.DISTANCE, direction: data});
  };

  return (
    <div>
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label className="mr-sm-2" for="date-select">
            Sort table by date
          </Label>
          <Input
            type="select"
            name="date"
            id="date-select"
            value={sorts.date}
            onChange={handleDateSortChange}
          >
            <option value="no" disabled>not used</option>
            <option value="DESC">descending</option>
            <option value="ASC">ascending</option>
          </Input>
        </FormGroup>
      </Form>
      <Form inline>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label className="mr-sm-2" for="distance-select">
            Sort table by distance
          </Label>
          <Input
            type="select"
            name="distance"
            id="distance-select"
            value={sorts.distance}
            onChange={handleDistanceSortChange}
          >
            <option value="no" disabled>not used</option>
            <option value="DESC">descending</option>
            <option value="ASC">ascending</option>
          </Input>
        </FormGroup>
      </Form>
    </div>
  );
};

SortsBlock.propTypes = {
  sorts: PropTypes.shape({
    date: PropTypes.oneOf([sortDirections.DESC, sortDirections.ASC, 'no']),
    distance: PropTypes.oneOf([sortDirections.DESC, sortDirections.ASC, 'no']),
  }).isRequired,
  changeSort: PropTypes.func.isRequired,
};

export default SortsBlock;
