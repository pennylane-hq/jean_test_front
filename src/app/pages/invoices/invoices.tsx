import React, { useState, useEffect } from 'react';
import { useApi } from 'api';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Definitions } from '../../../api/gen/client';
import { Paths } from '../../../api/gen/client';

import { InvoicesDisplay } from './components/invoicesDisplay';

export const Invoices: React.FC = () => {
  const api = useApi();
  

  return (
    <InvoicesDisplay />
  );
};