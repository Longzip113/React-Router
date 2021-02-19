import React, { Component } from "react";
import { Redirect } from "react-router-dom";

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      passWord: "",
    };
  }

  onChange = (event) => {
    var target = event.target;
    var name = target.name;
    var value = target.value;
    this.setState({
      [name]: value,
    });
  };

  onSummit = (event) => {
    event.preventDefault();
    var { userName } = this.state;
    var { passWord } = this.state;
    if (userName === "admin" && passWord === "admin") {
      localStorage.setItem("user", JSON.stringify(this.state));
    }
  };

  render() {

    var user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        var {location} = this.props;
        location.state = this.state;
        console.log(location);
        return <Redirect to={{
             pathname : "/products",
             state : {
                 form : location
             }
        }} />
    }
    
    return (
      <div className="container">
        <form>
          <legend>Login</legend>

          <div className="form-group">
            <label>User Name</label>
            <input
              type="text"
              name="userName"
              className="form-control"
              onChange={this.onChange}
            />
          </div>

          <div className="form-group">
            <label>PassWord</label>
            <input
              type="password"
              name="passWord"
              className="form-control"
              onChange={this.onChange}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={this.onSummit}
          >
            Login
          </button>
        </form>
      </div>
    );
  }
}

export default login;
