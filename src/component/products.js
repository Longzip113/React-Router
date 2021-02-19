import React, { Component } from "react";
import { NavLink } from "react-router-dom";

var data = [
  {
    id: 1,
    name: "Iphone 11",
    price: 15000000,
    Description: "Iphone",
  },
  {
    id: 2,
    name: "Iphone 11 Pro",
    price: 23000000,
    Description: "Iphone",
  },
  {
    id: 3,
    name: "Iphone 11 Pro Max",
    price: 28000000,
    Description: "Iphone",
  },
];

class products extends Component {
  render() {
    var {location} = this.props;
    console.log(location);
    return (
      <div className="row container">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
          <ul className="list-group">{this.showProduct(data)}</ul>
        </div>
      </div>
    );
  }

  showProduct = (Products) => {
    var result = null;
    result = Products.map((item, index) => {
      return (
        <NavLink to={`/products/detail/${item.id}`} key={index}>
          <li className="list-group-item" >
            {item.name} - {item.price} - {item.Description}
          </li>
        </NavLink>
      );
    });
    return result;
  };
}

export default products;
