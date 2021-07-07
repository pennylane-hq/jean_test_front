import React, { useState } from 'react';

import { Card } from '../../../lib/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

import { Definitions } from '../../../../api/gen/client';

import { getInvoiceValues, getInvoiceLineValues } from '../helpers/invoice_helpers';

export const InvoiceEditor: React.FC = () => {
  const invoice = {
    "id": 1751,
    "customer_id": 5,
    "finalized": false,
    "paid": true,
    "date": "2021-02-03",
    "deadline": "2021-03-05",
    "total": "130.0",
    "tax": "0.0",
    "customer": {
        "id": 5,
        "first_name": "Mallie",
        "last_name": "Breitenberg",
        "address": "260 Basilia Rest",
        "zip_code": "98509",
        "city": "South Edmond",
        "country": "Spain",
        "country_code": "ES"
    },
    "invoice_lines": [
        {
            "id": 2715,
            "invoice_id": 1751,
            "product_id": 1,
            "quantity": 1,
            "unit": "hour",
            "label": "Tesla Model S with Pennylane logo",
            "vat_rate": "0",
            "price": "130.0",
            "tax": "0.0",
            "product": {
                "id": 1,
                "label": "Audi S5",
                "vat_rate": "20",
                "unit": "piece",
                "unit_price": "24450.0",
                "unit_price_without_tax": "20375.0",
                "unit_tax": "4075.0"
            }
        },
        {
          "id": 2715,
          "invoice_id": 1751,
          "product_id": 1,
          "quantity": 1,
          "unit": "hour",
          "label": "Tesla Model S with Pennylane logo",
          "vat_rate": "0",
          "price": "130.0",
          "tax": "0.0",
          "product": {
              "id": 1,
              "label": "Audi S5",
              "vat_rate": "20",
              "unit": "piece",
              "unit_price": "24450.0",
              "unit_price_without_tax": "20375.0",
              "unit_tax": "4075.0"
          }
      }
    ]
  } 

  return (
    <Container>
      <h2>Details</h2>
      <Row>
        <Card
          key={invoice.id}
          title={invoice.id}
          subtitle={`${invoice.customer.first_name} ${invoice.customer.last_name}`}
          values={getInvoiceValues(invoice)}
        />
      </Row>
      <h2>Lines</h2>
      <Row>
        {invoice.invoice_lines.map((line, i) => (
          <Card
            key={i}
            title={line.label}
            subtitle={line.product.label}
            values={getInvoiceLineValues(line)}
          />
        ))}
      </Row>
    </Container>
  );
};