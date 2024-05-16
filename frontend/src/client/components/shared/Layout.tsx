import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Footer from "./Footer";
import Header from "./Header";
import Container from "./Container";

const Layout = () => {
  return (
    <main data-testid="main">
      <ToastContainer />
      <Header />
      <div data-testid="outlet_container" className="main-content">
        <Container>
          <Outlet />
        </Container>
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
