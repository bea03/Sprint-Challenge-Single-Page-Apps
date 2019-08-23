import React from "react";
import { Card } from 'semantic-ui-react';

export default function EpisodeCard({ name, airDate, episode }) {

  return (
    <Card>
        <Card.Content>
            <Card.Header>{name}</Card.Header>
            <Card.Meta>Air Date: {airDate}</Card.Meta>
            <Card.Description>Episode: {episode}</Card.Description>
        </Card.Content>
    </Card>
  );
}
