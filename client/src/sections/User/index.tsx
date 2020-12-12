import React from "react";
import { useParams } from "react-router-dom";
import { ApolloError, useQuery } from "@apollo/client";
import { Col, Layout, Row } from "antd";
import { USER } from "../../lib/graphql/queries";
import {
  User as UserData,
  UserVariables
} from "../../lib/graphql/queries/User/__generated__/User";
import { ErrorBanner, PageSkeleton, UserListings } from "../../lib/components";
import { useScrollToTop } from "../../lib/hooks";
import { Viewer } from "../../lib/types";
import { UserProfile } from "./components";
import { SearchVideo } from "../../lib/graphql/queries/Listing/__generated__/SearchVideo";
import { Listings } from "../Home/components";

interface Props {
  viewer: Viewer;
  setViewer: (viewer: Viewer) => void;
  listingsPage: number;
  pageLimit: number;
  setListingsPage: (listingsPage: number) => void;
  searchListings: {
    searchListingsData: SearchVideo | undefined;
    searchListingLoading: boolean;
    searchListingError: ApolloError | undefined;
  };
  isSearchAvailable: () => boolean;
}

interface MatchParams {
  id: string;
}

const { Content } = Layout;

export const User = ({ viewer, setViewer, listingsPage,
  pageLimit,
  setListingsPage,
  searchListings,
  isSearchAvailable, }: Props) => {

  const { id } = useParams<MatchParams>();

  const { data, loading, error } = useQuery<UserData, UserVariables>(USER, {
    variables: {
      id,
      page: listingsPage,
      limit: pageLimit
    },
    fetchPolicy: "cache-and-network"
  });

  useScrollToTop();

  if (loading) {
    return (
      <Content className="user">
        <PageSkeleton />
      </Content>
    );
  }

  if (error) {
    return (
      <Content className="user">
        <ErrorBanner description="This user may not exist or we've encountered an error. Please try again soon." />
        <PageSkeleton />
      </Content>
    );
  }

  const user = data ? data.user : null;
  const viewerIsUser = viewer.id === id;

  const userListings = user ? user.listings : null;

  const userProfileElement = user ? (
    <UserProfile
      user={user}
      viewerIsUser={viewerIsUser}
    />
  ) : null;

  const userListingsElement = userListings ? (
    <UserListings
      userListings={userListings}
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
    isSearchAvailable() === true ? searchListingsElement : userListingsElement;

  return (
    <Content className="user">
      <Row gutter={12} justify="space-between">
        <Col xs={24}>{userProfileElement}</Col>
        <Col xs={24}>
          {showElementFollowContext}
        </Col>
      </Row>
    </Content>
  );
};
