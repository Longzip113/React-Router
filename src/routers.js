import React, { Component } from "react";
import About from "./component/about";
import Contact from "./component/contact";
import Home from "./component/home";
import NotFound from "./component/notfound";
import Products from "./component/products";
import Detail from "./component/detail";
import Login from "./component/login";
import { Route, Switch } from "react-router-dom";

var routerList = [
  {
    path: "/",
    exect: true,
    main: () => <Home />,
  },
  {
    path: "/contact",
    exect: false,
    main: () => <Contact />,
  },
  {
    path: "/about",
    exect: false,
    main: () => <About />,
  },
  {
    path: "/products",
    exect: true,
    main: ({match, location}) => <Products match={match} location={location}/>,
  },
  {
    path: "/products/detail/:id",
    exect: false,
    main: ({match}) => <Detail match={match} />,
  },
  {
    path: "/login",
    exect: false,
    main: ({location}) => <Login location={location}/>,
  },
  {
    path: "",
    exect: false,
    main: () => <NotFound />,
  },
];

class routers extends Component {
  render() {
    return (
      <Switch>
        {this.showRouter(routerList)}
      </Switch>
    );
  }

  showRouter = (routers) => {
    var result = null;
    if (routers.length > 0) {
      result = routers.map((item, index) => {
        return (
          <Route
            key={index}
            path={item.path}
            exact={item.exect}
            component={item.main}
          />
        );
      });
    }
    return result;
  };
}

export default routers;
