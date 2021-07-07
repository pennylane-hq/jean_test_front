import React from 'react';

import { Card as CardB, ListGroup, ListGroupItem } from 'react-bootstrap';

interface CardItemsValues {
  label: string
  data: string | number
}

export const Card: React.FC <({
  title: string | number,
  subtitle?: string,
  values: CardItemsValues[],
  url?: string,
  buttonLabel?: string,
})> = ({ title, subtitle, values, url, buttonLabel }) => {
  return (
    <CardB style={{ width: '18rem' }}>
      <CardB.Body>
        <CardB.Title>{title}</CardB.Title>
        <CardB.Subtitle className="mb-2 text-muted">{subtitle}</CardB.Subtitle>
      </CardB.Body>
      <ListGroup className="list-group-flush">
        {values.map((value, i) => {
          return (<ListGroupItem key={i}>{value.label}: {value.data}</ListGroupItem>)
        })}
      </ListGroup>
      {url && (
        <CardB.Body>
          <CardB.Link href={url}>{buttonLabel}</CardB.Link>
        </CardB.Body>
      )}
    </CardB>
  );
};