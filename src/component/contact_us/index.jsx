import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React, { useState } from "react";


import "./style.scss"

import { useNavigate } from "react-router-dom";




const Contact = () => {

  // company_id uuid primary key DEFAULT uuid_generate_v4() null,
  // company_tin int not null,
// company_mfo char(10) not null,
// company_account char(30) not null,
// company_bank char(255) not null,
// company_type int2 not null, 
// company_director char(255) not null,
// company_adress  char(255) not null,
// company_phone char (20) not null,
// company_bill_id int not null
 

  return (
    <div className="contact py-5 px-2 mx-auto justify-content-center">
      <div className="container">
        <Form  >
          <h2 className="text-center mb-4 ">Company info</h2>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Kompaniya tin</Form.Label>
            <Form.Control
              type="number"
              placeholder="Company tin:"
              className="py-2 font-weight-bold"
np
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Kompaniya mfo</Form.Label>
            <Form.Control
              type="phone"
              placeholder="Company mfo:"
              className="py-2"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Kompaniya accaunt</Form.Label>
            <Form.Control
              type="phone"
              placeholder="Company accaunt:"
              className="py-2"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Kompaniya bank</Form.Label>
            <Form.Control
              type="phone"
              placeholder="Company bank:"
              className="py-2"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Kompaniya type</Form.Label>
            <Form.Control
            
              type="number"
              placeholder="Company type:"
              className="py-2"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Kompaniya director</Form.Label>
            <Form.Control
              type="phone"
              placeholder="Company director:"
              className="py-2"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Kompaniya adress</Form.Label>
            <Form.Control
              type="phone"
              placeholder="Company adress:"
              className="py-2"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Label>Kompaniya phone</Form.Label>
            <Form.Control
              type="phone"
              placeholder="Kompaniya telefon raqami masalan: 99 999 99 99"
              className="py-2"
            />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="btn btn-primary px-5  py-2 rounded-pill  mx-auto justify-content-center d-block"
          >
            Yuborish
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Contact;
