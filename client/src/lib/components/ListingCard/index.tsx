import React from "react";
import { Card, Typography } from "antd";

interface Props {
  width: number | string;
  listing: {
    id: string;
    etag: string;
    kind: string;
    snippet: {
      title: string;
      description: string;
      channelId: string;
      channelTitle: string;
      categoryId: string;
      tags: string[];
      publishedAt: string;
      liveBroadcastContent: string;
    };
    contentDetails: {
      dimension: string;
      definition: string;
    };
    status: { license: string };
    player: { embedHtml: string };
  };
}

const { Title, Paragraph } = Typography;

export const ListingCard = ({ width, listing }: Props) => {
  const { snippet, player } = listing;
  const { title, description } = snippet;

  return (
    <Card
      hoverable
      style={{ width: width }}
      cover={<div dangerouslySetInnerHTML={{ __html: player.embedHtml }} />}
    >
      <div className="listing-card__details">
        <div className="listing-card__description">
          <Title level={4} className="listing-card__title">
            {title}
          </Title>
          <Paragraph className="listing-card__display-linebreak">
            {description}
          </Paragraph>
        </div>
      </div>
    </Card>
  );
};
