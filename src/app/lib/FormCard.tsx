import React from 'react';

import { Card as CardBS, ListGroup, ListGroupItem } from 'react-bootstrap';

interface CardItemsValues {
  label: string
  data: string | number
}

export const FormCard: React.FC <({
  title: string | number,
  subtitle?: string,
  values: CardItemsValues[],
  url?: string,
  buttonLabel?: string,
})> = ({ title, subtitle, values, url, buttonLabel }) => {
  return (
    <CardBS style={{ width: '18rem' }}>
      <CardBS.Body>
        <CardBS.Title>{title}</CardBS.Title>
        <CardBS.Subtitle className="mb-2 text-muted">{subtitle}</CardBS.Subtitle>
      </CardBS.Body>
      <ListGroup className="list-group-flush">
        {values.map((value, i) => {
          return (<ListGroupItem key={i}>{value.label}: {value.data}</ListGroupItem>)
        })}
      </ListGroup>
      {url && (
        <CardBS.Body>
          <CardBS.Link href={url}>{buttonLabel}</CardBS.Link>
        </CardBS.Body>
      )}
    </CardBS>
  );
};