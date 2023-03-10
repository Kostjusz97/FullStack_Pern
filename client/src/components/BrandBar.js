import { observer } from 'mobx-react-lite';
import React, { useContext }from 'react';
import { Card, Form } from 'react-bootstrap';
import { Context } from '..';

const BrandBar = observer(() => {
  const {device} = useContext(Context);
  return (
    <Form className="d-flex">
      {device.brands.map(brand => 
      <Card
        style={{cursor: 'pointer'}}
        onClick={() => device.setSelectedBrand(brand)}
        border={brand.id === device.selectedBrand.id ? 'danger ': 'light'}
        key={brand.id}
        className="p-3"
      >
        {brand.name}
      </Card>
      )}
    </Form>
  );
})

export default BrandBar;
