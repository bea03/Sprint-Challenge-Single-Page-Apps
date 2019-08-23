import React from "react";
import { Card, Image } from 'semantic-ui-react';

export default function CharacterCard({ name, status, species, origin, location, image }) {

  return (
    <Card>
        <Image src={image} alt={name}/>
        <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>Status: {status} Species: {species}</Card.Meta>
            <Card.Description>Origin: {origin} Location: {location}</Card.Description>
        </Card.Content>
    </Card>
  );
}
