import React, { useState, useEffect } from 'react';
import { useApi } from 'api';

import { Container, Row, Col, Pagination } from 'react-bootstrap';

import { Card } from '../../../lib/Card';
import { Definitions } from '../../../../api/gen/client';
import { getInvoiceValues } from '../helpers/invoice_helpers';

const PAGE_SIZE = 6;

export const InvoicesDisplay: React.FC = () => {
  const api = useApi();
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [invoices, setInvoices] = useState<Definitions.Invoice[] | undefined>([]);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const { data : { invoices, pagination }} = await api.getInvoices({
          page: currentPage,
          per_page: PAGE_SIZE
        });
        setInvoices(invoices);
        setTotalPages(pagination?.total_pages??0);
      } catch (err) {
        console.log(err);
      }
    }
    fetchInvoices();
  }, [currentPage, setInvoices]);

  return (
    <Container className="mt-5">
      <Row>
        {invoices?.map((invoice, i) => (
          <Col md={4} key={i}>
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
        <Pagination className="d-flex justify-content-center mt-3">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <Pagination.Item
              key={page}
              active={page === currentPage}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Pagination.Item>
          ))}
        </Pagination>
    </Container>
  );
};