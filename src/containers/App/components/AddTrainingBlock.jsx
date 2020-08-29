import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Container,
  Row,
  Col,
} from 'reactstrap';
import {useForm} from 'react-hook-form';
import styled from 'styled-components';

const AddTrainingBlock = ({saveTraining}) => {
  const [showModal, setShowModal] = useState(false);
  const {register, handleSubmit} = useForm();

  const toggle = () => setShowModal(!showModal);

  const handleAddAction = (data) => {
    saveTraining(data);
    toggle();
  };

  return (
    <Container>
      <BlockWrapper>
        <Row>
          <Col xs={{size: 2, offset: 5}}>
            <Button
              outline
              color="primary"
              onClick={toggle}
            >
              Add training note
            </Button>
          </Col>
        </Row>
      </BlockWrapper>
      <Modal isOpen={showModal} toggle={toggle}>
        <ModalHeader toggle={toggle}>Add training note form</ModalHeader>
        <ModalBody>
          <Form onSubmit={handleSubmit(handleAddAction)}>
            <FormGroup>
              <Label for="input-full-name">Full name</Label>
              <Input
                type="text"
                name="fullName"
                innerRef={register({required: true})}
                id="input-full-name"
                placeholder="Enter runner name..."
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="input-date">Date</Label>
              <Input
                type="date"
                name="date"
                innerRef={register({required: true})}
                id="input-date"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="input-activity-type">Activity type</Label>
              <Input
                type="select"
                name="activityType"
                innerRef={register({required: true})}
                id="input-activity-type"
                required
              >
                <option value="RUN">run</option>
                <option value="BICYCLE">bicycle</option>
                <option value="SKIING">skiing</option>
                <option value="WALKING">walking</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="input-distance">Distance</Label>
              <Input
                type="number"
                name="distance"
                innerRef={register({required: true, min: 1, max: 99})}
                id="input-distance"
                required
              />
            </FormGroup>
            <FormGroup>
              <Label for="input-comment">Comment</Label>
              <Input
                type="textarea"
                name="comment"
                innerRef={register}
                id="input-comment"
              />
            </FormGroup>
            <Button color="success">Submit</Button>
          </Form>
        </ModalBody>
      </Modal>
    </Container>
  );
};

const BlockWrapper = styled.div`
  border: 2px solid #333;
  border-top: none;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  padding-bottom: 30px;
`;

AddTrainingBlock.propTypes = {
  saveTraining: PropTypes.func.isRequired,
};

export default AddTrainingBlock;
