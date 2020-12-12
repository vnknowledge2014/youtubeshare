import React from "react";
import { List, Typography } from "antd";
import { ListingCard } from "../../../../lib/components";
import { GetListingVideo } from "../../../../lib/graphql/queries/Listings/__generated__/GetListingVideo";
import { SearchVideo } from "../../../../lib/graphql/queries/Listing/__generated__/SearchVideo";

interface Props {
  listings: GetListingVideo["getListingVideo"] | SearchVideo["searchVideo"] | undefined;
  page: number;
  limit: number;
  setListingsPage: (page: number) => void;
}

const { Paragraph } = Typography;

export const Listings = ({
  listings,
  page,
  limit,
  setListingsPage,
}: Props) => {

  if(listings) {
    const { total, result } = listings;

    const listingsList = (
      <List
        dataSource={result}
        locale={{ emptyText: "We don't have any video on platform, Share your first video with ours!" }}
        pagination={{
          position: "bottom",
          current: page,
          total,
          defaultPageSize: limit,
          hideOnSinglePage: true,
          showLessItems: true,
          onChange: (page: number) => setListingsPage(page),
        }}
        renderItem={(userListing) => (
          <List.Item>
            <ListingCard width="100%" listing={userListing}/>
          </List.Item>
        )}
      />
    );

    return (
      <div className="user-listings">
        {listingsList}
      </div>
    );
  }
  return (
    <div className="user-listings">
      <Paragraph>
        Your listing is not available any videos!
      </Paragraph>
    </div>
  );
};
