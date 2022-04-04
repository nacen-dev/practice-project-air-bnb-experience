import React from "react";
import AirbnbLogo from "../../assets/airbnb-logo.png";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className="py-5 px-9 h-16 shadow flex">
      <img src={AirbnbLogo} alt="airbnb logo" className="max-w-[6.25rem]" />
    </nav>
  );
};

export { Navbar };
