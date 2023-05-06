import React from "react";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import { Provider } from "react-redux";
import { Outlet } from "react-router-dom";

function App() {
  return <Container>
    <Header />
    <Outlet />
  </Container>;
}

export default App;
