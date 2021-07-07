import React, { useState } from 'react';

import { Card } from '../../../lib/Card';
import { Container, Row, Col } from 'react-bootstrap';

import { Definitions } from '../../../../api/gen/client';

import { getInvoiceValues } from '../helpers/invoice_helpers';

export const InvoiceRow: React.FC<({
    invoices: Definitions.Invoice[]
})> = ({ invoices }) => {

   return (
    <Row>
      {invoices?.map((invoice, i) => (
        <Col md={4}>
          <Card
            key={i}
            title={`${invoice.id}`}
            subtitle={`${invoice?.customer?.first_name} ${invoice?.customer?.last_name}`}
            values={getInvoiceValues(invoice)}
            url={`invoice/${invoice.id}`}
            buttonLabel="View"
          />
        </Col>
      ))}
    </Row>
   )
};