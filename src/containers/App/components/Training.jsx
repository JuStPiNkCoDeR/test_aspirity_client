import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Input} from 'reactstrap';
import {useForm} from 'react-hook-form';
import styled from 'styled-components';

const Training = ({idx, data, deleteTraining, updateTraining}) => {
  const [isEditing, setIsEditing] = useState(false);
  const {register, handleSubmit} = useForm();

  const handleDeleteAction = () => {
    deleteTraining(data.ID);
  };

  const handleEditAction = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveAction = (modified) => {
    updateTraining({ID: data.ID, data: modified});
    setIsEditing(false);
  };

  const readableDateFormatString = new Date(data.date).toLocaleDateString();
  const inputDateFormat = new Date(data.date).toISOString().split('T')[0];

  return (
    <tr>
      <th scope="row">{idx + 1}</th>
      <td>{isEditing ? (
            <Input
              type="date"
              name="date"
              defaultValue={inputDateFormat}
              innerRef={register}
            />
          ) : readableDateFormatString}</td>
      <td>{data.fullName}</td>
      <td>{isEditing ? (
            <Input
              type="select"
              name="activityType"
              defaultValue={data.activityType}
              innerRef={register}
            >
              <option value="RUN">run</option>
              <option value="BICYCLE">bicycle</option>
              <option value="SKIING">skiing</option>
              <option value="WALKING">walking</option>
            </Input>
          ) : data.activityType}</td>
      <td>{isEditing ? (
            <Input
              type="number"
              name="distance"
              defaultValue={data.distance}
              innerRef={register({min: 0, max: 100})}
            />
          ) : data.distance}</td>
      <td>{isEditing ? (
            <Input
              type="textarea"
              name="comment"
              defaultValue={data.comment}
              innerRef={register}
            />
          ) : data.comment}</td>
      <ActionsField>
        <Button outline onClick={handleEditAction}>
          {isEditing ? 'Cancel' : 'Edit'}
        </Button>
        <Button
          outline
          color="danger"
          onClick={handleDeleteAction}
        >
          Delete
        </Button>
        {isEditing && (
          <Button
            outline
            color="success"
            onClick={handleSubmit(handleSaveAction)}
          >
              Save
          </Button>
        )}
      </ActionsField>
    </tr>
  );
};

const ActionsField = styled.td`
  display: flex;
  justify-content: space-evenly;
`;

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
  deleteTraining: PropTypes.func.isRequired,
  updateTraining: PropTypes.func.isRequired,
};

export default Training;
