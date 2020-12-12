import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "../styles/App.css";

import { Viewer } from "../lib/types";
import { ErrorBanner } from "../lib/components/ErrorBanner";
import { QueryResult, useMutation, useQuery } from "@apollo/client";
import { Spin, Affix, Layout } from "antd";
import { AppHeaderSkeleton } from "../lib/components/AppHeaderSkeleton";
import {
  LogInVariables,
  LogIn as LogInData,
} from "../lib/graphql/mutations/LogIn/__generated__/LogIn";
import { LOG_IN } from "../lib/graphql/mutations";
import { AppHeader } from "./AppHeader";
import { Home } from "./Home";
import { Login } from "./Login";
import { NotFound } from "./NotFound";
import { User } from "./User";

import {
  GetListingVideo,
  GetListingVideoVariables,
} from "../lib/graphql/queries/Listings/__generated__/GetListingVideo";

import { LISTING, LISTINGS } from "../lib/graphql/queries";
import {
  SearchVideoVariables,
  SearchVideo,
} from "../lib/graphql/queries/Listing/__generated__/SearchVideo";

const initialViewer: Viewer = {
  id: null,
  token: null,
  avatar: null,
  didRequest: false,
};

const PAGE_LIMIT = 10;

const App = () => {
  const [viewer, setViewer] = useState<Viewer>(initialViewer);
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [listingsPage, setListingsPage] = useState(1);
  const [searchListingsPage, setSearchListingsPage] = useState("");

  const [logIn, { error }] = useMutation<LogInData, LogInVariables>(LOG_IN, {
    onCompleted: (data) => {
      if (data && data.logIn) {
        setViewer(data.logIn);

        data.logIn.token
          ? sessionStorage.setItem("token", data.logIn.token)
          : sessionStorage.removeItem("token");
      }
    },
  });

  const getSearchListingsData: QueryResult<
    SearchVideo,
    SearchVideoVariables
  > = useQuery<SearchVideo, SearchVideoVariables>(LISTING, {
    variables: {
      input: { title: searchListingsPage },
      page: listingsPage,
      limit: PAGE_LIMIT,
    },
    fetchPolicy: "cache-and-network",
  });

  const getListingsData: QueryResult<
    GetListingVideo,
    GetListingVideoVariables
  > = useQuery<GetListingVideo, GetListingVideoVariables>(LISTINGS, {
    variables: {
      page: listingsPage,
      limit: PAGE_LIMIT,
    },
    fetchPolicy: "cache-and-network",
  });

  const logInRef = useRef(logIn);

  useEffect(() => {
    logInRef.current();
  }, []);

  const isSearchAvailable = () => (searchListingsPage ? true : false);

  if (!viewer.didRequest && !error) {
    return (
      <Layout className="app-skeleton">
        <AppHeaderSkeleton />
        <div className="app-skeleton__spin-section">
          <Spin size="large" tip="Launching YouTubeShare" />
        </div>
      </Layout>
    );
  }

  const logInErrorBannerElement = error ? (
    <ErrorBanner description="We weren't able to verify if you were logged in. Please try again later!" />
  ) : null;

  return (
    <Router>
      <Layout id="app">
        {logInErrorBannerElement}
        <Affix offsetTop={0} className="app__affix-header">
          <AppHeader
            viewer={viewer}
            setViewer={setViewer}
            modalVisible={modalVisible}
            setModalVisible={setModalVisible}
            setSearchListingsPage={setSearchListingsPage}
          />
        </Affix>
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <Home
                listingsPage={listingsPage}
                pageLimit={PAGE_LIMIT}
                setListingsPage={setListingsPage}
                getListings={{
                  getListingsData: getListingsData.data,
                  getListingsLoading: getListingsData.loading,
                  getListingsError: getListingsData.error,
                }}
                searchListings={{
                  searchListingsData: getSearchListingsData.data,
                  searchListingLoading: getSearchListingsData.loading,
                  searchListingError: getSearchListingsData.error,
                }}
                isSearchAvailable={isSearchAvailable}
              />
            )}
          ></Route>
          <Route
            exact
            path="/login"
            render={(props) => <Login {...props} setViewer={setViewer} />}
          ></Route>
          <Route
            exact
            path="/user/:id"
            render={(props) => (
              <User
                {...props}
                viewer={viewer}
                setViewer={setViewer}
                searchListings={{
                  searchListingsData: getSearchListingsData.data,
                  searchListingLoading: getSearchListingsData.loading,
                  searchListingError: getSearchListingsData.error,
                }}
                isSearchAvailable={isSearchAvailable}
                listingsPage={listingsPage}
                pageLimit={PAGE_LIMIT}
                setListingsPage={setListingsPage}
              />
            )}
          ></Route>
          <Route component={NotFound}></Route>
        </Switch>
      </Layout>
    </Router>
  );
};

export default App;
