import React from "react";
import { Card } from 'semantic-ui-react';

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Card>
        <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>{dimension}</Card.Meta>
            <Card.Description>Type: {type} Residents: {residents}</Card.Description>
        </Card.Content>
    </Card>
  )
}
