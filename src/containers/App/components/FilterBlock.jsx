import React from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {useForm} from 'react-hook-form';
import {activityTypes} from '../redux/actions';

const FilterBlock = ({activityType, changeActivityTypeFilter}) => {
  const {register, handleSubmit} = useForm();

  const handleApplyAction = (data) => {
    changeActivityTypeFilter(data.activityType);
  };

  return (
    <div>
      <Form inline onSubmit={handleSubmit(handleApplyAction)}>
        <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
          <Label className="mr-sm-2" for="activity-type-select">
              The selected activity type is
          </Label>
          <Input
            type="select"
            name="activityType"
            id="activity-type-select"
            defaultValue={activityType}
            innerRef={register}
          >
            <option value="ALL">all</option>
            <option value="RUN">run</option>
            <option value="BICYCLE">bicycle</option>
            <option value="SKIING">skiing</option>
            <option value="WALKING">walking</option>
          </Input>
        </FormGroup>
        <Button color="success">Apply</Button>
      </Form>
    </div>
  );
};

FilterBlock.propTypes = {
  activityType: PropTypes.oneOf(Object.values(activityTypes)).isRequired,
  changeActivityTypeFilter: PropTypes.func.isRequired,
};

export default FilterBlock;
