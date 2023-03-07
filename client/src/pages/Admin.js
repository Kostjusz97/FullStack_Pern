import React, {useState}from 'react';
import { Button, Container } from 'react-bootstrap';
import ManagementBrand from '../components/modals/CreateBrand';
import CreateDevice from '../components/modals/CreateDevice';
import ManagementType from '../components/modals/CreateType';

const Admin = () => {
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);
  const [deviceVisible, setDeviceVisible] = useState(false);
    return (
      <Container className="d-flex flex-column">
        <Button 
        variant={"outline-dark"} 
        className="mt-4 p-2"
        onClick={() => setDeviceVisible(true)}
        >
          Management device
        </Button>
        <Button 
        variant={"outline-dark"} 
        className="mt-4 p-2"
        onClick={() => setBrandVisible(true)}
        >
          Management brand
        </Button>
        <Button 
        variant={"outline-dark"} 
        className="mt-4 p-2"
        onClick={() => setTypeVisible(true)}
        >
          Management type
        </Button>
        <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)}/>
        <ManagementBrand show={brandVisible} onHide={() => setBrandVisible(false)}/>
        <ManagementType show={typeVisible} onHide={() => setTypeVisible(false)}/>
      </Container>
    );
}

export default Admin;
