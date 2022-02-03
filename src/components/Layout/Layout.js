import React from "react";
import Header from "../Header/Header";

const Layout = (props) => {
  return (
    <>
      <Header />
      <main className="min-h-screen p-10 ">{props.children}</main>
    </>
  );
};

export default Layout;
