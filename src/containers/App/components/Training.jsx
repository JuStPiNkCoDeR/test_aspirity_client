import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Button, Input} from 'reactstrap';
import {useForm} from 'react-hook-form';

const Training = ({idx, data}) => {
  const [isEditing, setIsEditing] = useState(false);
  const {register, handleSubmit} = useForm();

  const handleDeleteAction = () => {
    // TODO delete action here
  };

  const handleEditAction = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveAction = (data) => {
    console.log(data);
    // TODO save action here
  };

  return (
    <tr>
      <th scope="row">{idx + 1}</th>
      <td>{isEditing ? (
            <Input
                type="date"
                name="date"
                defaultValue={data.date}
                innerRef={register}
            />
          ) : data.date}</td>
      <td>{data.fullName}</td>
      <td>{isEditing ? (
            <Input
                type="select"
                name="activityType"
                defaultValue={data.activityType}
                innerRef={register}
            >
                <option value="run">run</option>
                <option value="bicycle">bicycle</option>
                <option value="skiing">skiing</option>
                <option value="walking">walking</option>
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
      <td>
        <Button outline onClick={handleEditAction}>Edit</Button>
        <Button outline color="danger">Delete</Button>
        {isEditing && (
            <Button
                outline
                color="success"
                onClick={handleSubmit(handleSaveAction)}
            >
              Save
            </Button>
        )}
      </td>
    </tr>
  );
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
