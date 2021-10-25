import React from "react";
import "../index.css";
import { MenuIcon } from "@heroicons/react/solid";

function Header() {
  // const navItems = [];

  return (
    <header className="flex justify-between shadow-md md:shadow-none h-20 max-w-7xl m-auto px-8 sm:px-12">
      <img
        className="md:hidden lg:inline-flex"
        src="./images/logo-full.svg"
        alt=""
        width="180"
      />
      <img
        className="hidden md:inline-block lg:hidden"
        src="./images/logo.svg"
        alt=""
        width="45"
      />
      <div className="flex items-center">
        <MenuIcon className="h-10 md:hidden" />
        <div className="hidden md:flex items-center space-x-3 lg:space-x-8">

          {/* <div className="hidden max-w-xl md:grid gap-4 grid-cols-4 text-right"> */}
            <p className="nav-item">Product</p>
            <p className="nav-item">Customers</p>
            <p className="nav-item">Pricing</p>
            <p className="nav-item">Resouces</p>
          {/* </div> */}

          <button className="secondary-button">Sign in</button>
          <button className="primary-button">Sign up</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
