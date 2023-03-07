import React from 'react';
import { Card, Col, Image } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Star1 from '../assets/Star1.png';
import { DEVICE_ROUTE } from '../utils/consts';

const DeviceItem = ({device}) => {
  const navigate = useNavigate()
  return (
    <Col md={3} className={"mt-3"} onClick={() => navigate(DEVICE_ROUTE + '/' + device.id)}>
      <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
        <Image width={150} height={150} src={process.env.REACT_APP_API_URL + device.img}/>
        <div className=" text-black-50 d-flex justify-content-between align-items-center mt-1">
          <div>Apple</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image src={Star1}/>
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
}

export default DeviceItem;
