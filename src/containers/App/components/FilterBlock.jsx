import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import {
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  Container,
  Row,
  Col,
} from 'reactstrap';
import {useForm} from 'react-hook-form';
import styled from 'styled-components';

const FilterBlock = ({
  activityType,
  changeActivityTypeFilter,
  fetchTrainings,
}) => {
  useEffect(() => {
    fetchTrainings(activityType);
  }, [fetchTrainings, activityType]);

  const {register, handleSubmit} = useForm();

  const handleApplyAction = (data) => {
    changeActivityTypeFilter(data.activityType);
  };

  return (
    <Container>
      <Row>
        <Col>
          <StyledForm inline onSubmit={handleSubmit(handleApplyAction)}>
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
          </StyledForm>
        </Col>
      </Row>
    </Container>
  );
};

const StyledForm = styled(Form)`
  padding: 15px 15px 15px;
  border: 2px solid #333;
  border-bottom: none;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

FilterBlock.propTypes = {
  activityType: PropTypes.oneOf(
      ['ALL', 'RUN', 'WALKING', 'BICYCLE', 'SKIING'],
  ).isRequired,
  changeActivityTypeFilter: PropTypes.func.isRequired,
  fetchTrainings: PropTypes.func.isRequired,
};

export default FilterBlock;
