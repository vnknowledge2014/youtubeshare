import React from "react";
import { Link } from "react-router-dom";
import { Layout, Button, Input } from "antd";
import { Viewer } from "../../lib/types";
import { MenuItems } from "./components";

import logo from "./assets/tinyhouse-logo.png";
import { ShareVideoModal } from "../Home/components";

interface Props {
  viewer: Viewer;
  modalVisible: boolean;
  setViewer: (viewer: Viewer) => void;
  setSearchListingsPage: (searchListingsPage: string) => void;
  setModalVisible: (modalVisible: boolean) => void;
}

const { Header } = Layout;
const { Search } = Input;

export const AppHeader = ({ viewer, setViewer, modalVisible, setModalVisible, setSearchListingsPage }: Props) => {
  const onHome = () => {
    setSearchListingsPage("");
  };
  
  const onSearch = (value: string) => {
    setSearchListingsPage(value);
  };

  const clearListingData = () => {
    setModalVisible(false);
  }

  const shareVideoBtn = viewer.id ? (
    <>
      <Button type="primary" onClick={() => setModalVisible(true)}>
        Share Video Now !
      </Button>
      <ShareVideoModal
        showModal={modalVisible}
        setModalVisible={setModalVisible}
        clearListingData={clearListingData}
      />
    </>
  ) : null;

  return (
    <Header className="app-header">
      <div className="app-header__logo-search-section">
        <div className="app-header__logo" onClick={onHome}>
          <Link to="/">
            <img src={logo} alt="App logo" />
          </Link>
        </div>
        <Search placeholder="input search video" onSearch={onSearch} enterButton />
      </div>
      <div className="app-header__menu-section">
        <ul className="app-header__right-menu-section">
          <li>{shareVideoBtn}</li>
          <li>
            <MenuItems viewer={viewer} setViewer={setViewer} />
          </li>
        </ul>
      </div>
    </Header>
  );
};
