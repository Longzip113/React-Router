import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

var menuList = [
  {
    label: "Home",
    to: "/",
    activeOnlyWhenExact: true,
  },
  {
    label: "About",
    to: "/about",
    activeOnlyWhenExact: false,
  },
  {
    label: "Contact",
    to: "/contact",
    activeOnlyWhenExact: false,
  },
  {
    label: "Products",
    to: "/products",
    activeOnlyWhenExact: false,
  },
  {
    label: "Login",
    to: "/login",
    activeOnlyWhenExact: false,
  }
];

//Custom Link active
const MenuLink = ({ label, to, activeOnlyWhenExact }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? "active abc" : "";
        return (
          <li className={`my-li ${active}`}>
            <Link to={to}>{label}</Link>
          </li>
        );
      }}
    />
  );
};

class menu extends Component {
  render() {
    return (
      <nav className="navbar navbar-inverse">
        <a className="navbar-brand">DEMO</a>
        <ul className="nav navbar-nav">
            {this.showMenu(menuList)}
        </ul>
      </nav>
    );
  }
  showMenu = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((item, index) => {
        return (
          <MenuLink
            key={index}
            to={item.to}
            label={item.label}
            activeOnlyWhenExact={item.activeOnlyWhenExact}
          />
        );
      });
      return result;
    }
  };
}

export default menu;
