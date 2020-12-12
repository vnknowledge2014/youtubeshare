import React from "react";
import { ApolloError } from "@apollo/client";
import { Col, Layout, Row } from "antd";
import { GetListingVideo } from "../../lib/graphql/queries/Listings/__generated__/GetListingVideo";
import { useScrollToTop } from "../../lib/hooks";
import { Listings } from "./components";
import { SearchVideo } from "../../lib/graphql/queries/Listing/__generated__/SearchVideo";
import { PageSkeleton, ErrorBanner } from "../../lib/components";

interface Props {
  listingsPage: number;
  pageLimit: number;
  setListingsPage: (listingsPage: number) => void;
  getListings: {
    getListingsData: GetListingVideo | undefined;
    getListingsLoading: boolean;
    getListingsError: ApolloError | undefined;
  };
  searchListings: {
    searchListingsData: SearchVideo | undefined;
    searchListingLoading: boolean;
    searchListingError: ApolloError | undefined;
  };
  isSearchAvailable: () => boolean;
}

const { Content } = Layout;

export const Home = ({
  listingsPage,
  pageLimit,
  setListingsPage,
  getListings,
  searchListings,
  isSearchAvailable,
}: Props) => {
  useScrollToTop();

  if (getListings.getListingsLoading) {
    return (
      <Content className="user">
        <PageSkeleton />
      </Content>
    );
  }

  if (getListings.getListingsError) {
    return (
      <Content className="user">
        <ErrorBanner description="We are maintaining. Please try again soon." />
        <PageSkeleton />
      </Content>
    );
  }

  const listingsElement = getListings ? (
    <Listings
      listings={getListings.getListingsData?.getListingVideo}
      page={listingsPage}
      limit={pageLimit}
      setListingsPage={setListingsPage}
    />
  ) : null;

  const searchListingsElement = searchListings ? (
    <Listings
      listings={searchListings.searchListingsData?.searchVideo}
      page={listingsPage}
      limit={pageLimit}
      setListingsPage={setListingsPage}
    />
  ) : null;

  const showElementFollowContext =
    isSearchAvailable() === true ? searchListingsElement : listingsElement;

  return (
    <Content className="user">
      <Row gutter={12} justify="space-between">
        <Col xs={24}>{showElementFollowContext}</Col>
      </Row>
    </Content>
  );
};
