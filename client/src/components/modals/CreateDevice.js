import React, { useContext, useState, useEffect} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Col, Dropdown, Form, Row } from 'react-bootstrap';
import { Context } from '../..';
import {observer} from "mobx-react-lite";
import {createDevice, fetchBrands,  fetchTypes, destroyDevice} from "../../http/deviceAPI";

const CreateDevice = observer(({show, onHide}) => {
  const {device} = useContext(Context)
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [file, setFile] = useState(null)
  const [info, setInfo] = useState([])

  useEffect(() => {
      fetchTypes().then(data => device.setTypes(data))
      fetchBrands().then(data => device.setBrands(data))
  }, [])

  const addInfo = () => {
      setInfo([...info, {title: '', description: '', number: Date.now()}])
  }
  const removeInfo = (number) => {
      setInfo(info.filter(i => i.number !== number))
  }
  const changeInfo = (key, value, number) => {
      setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
  }

  const selectFile = e => {
      setFile(e.target.files[0])
  }

  const addDevice = () => {
      const formData = new FormData()
      formData.append('name', name)
      formData.append('price', `${price}`)
      formData.append('img', file)
      formData.append('brandId', device.selectedBrand.id)
      formData.append('typeId', device.selectedType.id)
      formData.append('info', JSON.stringify(info))
      createDevice(formData).then(data => onHide())
  }
  const deleteDevice = () => {
    destroyDevice({name: name}).then(data => {
      setName('')
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
          Management device
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Dropdown className="mt-2">
            <Dropdown.Toggle>{device.selectedType.name || "Сhoose type"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.types.map(type => 
              <Dropdown.Item
                onClick={() => device.setSelectedType(type)} 
                key={type.id}
              >
                {type.name}
              </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Dropdown className="mt-2 mb-2">
            <Dropdown.Toggle>{device.selectedBrand.name || "Сhoose brand"}</Dropdown.Toggle>
            <Dropdown.Menu>
              {device.brands.map(brand => 
                <Dropdown.Item
                  onClick={() => device.setSelectedBrand(brand)}
                  key={brand.id}
                >
                  {brand.name}
                </Dropdown.Item>
              )}
            </Dropdown.Menu>
          </Dropdown>
          <Form.Control
              value={name}
              onChange={e => setName(e.target.value)}
              className="mt-3"
              placeholder="Enter name of device"
          />
          <Form.Control
              value={price}
              onChange={e => setPrice(Number(e.target.value))}
              className="mt-3"
              placeholder="Enter cost of device"
              type="number"
          />
          <Form.Control
              className="mt-3"
              type="file"
              onChange={selectFile}
          />
          <Button
            variant={"outline-dark"}
            onClick={addInfo}
            className="mt-3"
          >
          Add new properties
          </Button>
          {info.map(el =>
                <Row className="mt-3" key={el.number}>
                  <Col md={4}>
                    <Form.Control
                      value={el.title}
                      onChange={(e) => changeInfo('title', e.target.value, el.number)}
                      placeholder="Enter title of properties"
                    />
                  </Col>
                  <Col md={4}>
                    <Form.Control
                      value={el.description}
                      onChange={(e) => changeInfo('description', e.target.value, el.number)}
                      placeholder="Enter desciption of properties"
                    />
                  </Col>
                  <Col md={4}>
                    <Button 
                    onClick={() => removeInfo(el.number)}
                    varient={"outline-danger"}
                    >
                      Delete
                    </Button>
                  </Col>
                </Row>
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-danger" onClick={onHide}>Close</Button>
        <Button variant="outline-success" onClick={addDevice}>Add</Button>
        <Button variant="outline-success" onClick={deleteDevice}>Delete</Button>
      </Modal.Footer>
    </Modal>
  );
})

export default CreateDevice;
