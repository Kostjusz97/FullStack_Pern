import { observer } from 'mobx-react-lite';
import React, { useContext }from 'react';
import { Form } from 'react-bootstrap';
import { Context } from '..';
import DeviceItem from './DeviceItem';

const DeviceList = observer(() => {
  const {device} = useContext(Context);
  return (
    <Form className="d-flex">
      {device.devices.map(device =>
        <DeviceItem key={device.id} device={device}/>
      )}
    </Form>
  );
})

export default DeviceList;
