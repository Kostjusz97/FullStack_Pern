import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Form } from 'react-bootstrap';
import { createBrand, destroyBrand } from '../../http/deviceAPI';

const ManagementBrand = ({show, onHide}) => {
  const [value, setValue] = useState('')

  const addBrand = () => {
    createBrand({name: value}).then(data => {
      setValue('')
      onHide()
    })
  }
  const deleteBrand = () => {
    destroyBrand({name: value}).then(data => {
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
          Management brand
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
        <Button variant="outline-success" onClick={addBrand}>Add</Button>
        <Button variant="outline-success" onClick={deleteBrand}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ManagementBrand;
