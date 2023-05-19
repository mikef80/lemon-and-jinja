import React from "react";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import { Provider, useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import { RootState } from "./app/store";
import Settings from "./components/Settings/Settings";
import MenuBar from "./components/MenuBar/MenuBar";


import { library } from '@fortawesome/fontawesome-svg-core';
import { faWeightScale, faHeart, faCheckCircle, faCirclePlus, faX } from '@fortawesome/free-solid-svg-icons';
import {  faHeart as farHeart } from '@fortawesome/free-regular-svg-icons';

library.add(faWeightScale, faHeart, faCheckCircle, faCirclePlus, farHeart, faX)






function App() {
  const isOpen = useSelector((state: RootState) => state.hamburgerState.open);

  return (
    <Container>
      <Header />
      {!isOpen && (
        <>
          <MenuBar />
          <Outlet />
        </>
      )}
      {isOpen && <Settings />}
    </Container>
  );
}

export default App;
