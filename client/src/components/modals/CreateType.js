import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { createType, destroyType } from '../../http/deviceAPI';

const ManagementType = ({show, onHide}) => {
  const [value, setValue] = useState('')

  const addType = () => {
    createType({name: value}).then(data => {
      setValue('')
      onHide()
    })
  }
  const deleteType = () => {
    destroyType({name: value}).then(data => {
      setValue('')
      onHide()
    })
  }

  return (
    <Modal
      show={show}
      onHide={onHide}
      size="lg"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Management type
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            value={value}
            onChange={e => setValue(e.target.value)}
            placeholder={"Enter name of type"}
          />
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={addType}>Add</Button>
        <Button variant="outline-success" onClick={deleteType}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ManagementType;
