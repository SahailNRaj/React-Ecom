import React, { Component, Fragment } from "react";
import withContext from "../withContext";
import { Redirect } from "react-router-dom";

const initState = {
  name: "",
  phone: "",
  address: "",
  Pincode: ""
};

class Location_Product extends Component {
  constructor(props) {
    super(props);
    this.state = initState;
  }

  save = e => {
    e.preventDefault();
    const { name, phone, address, Pincode} = this.state;
    if (name && phone) {
      this.props.context.location_product(
        {
          name,
          phone,
          address,
          Pincode
        },
        () => this.setState(initState)
      );
    } else {
      this.setState({ error: "Please Enter name and Address" });
    }
  };

  handleChange = e =>
    this.setState({ [e.target.name]: e.target.value, error: "" });

  render() {
    const { name, phone, address, Pincode} = this.state;
    const { user } = this.props.context;
    return (
      <Fragment>
        <div className="hero bg-secondary ">
          <div className="hero-body container">
            <h4 className="title text-white">Location</h4>
          </div>
        </div>
        <br />
        <br />
        <form onSubmit={this.save}>
          <div className="columns is-mobile is-centered">
            <div className="column is-one-third">
              <div className="field">
                <label className="label">Name: </label>
                <input
                  className="input"
                  type="text"
                  name="name"
                  value={name}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="field">
                <label className="label">Phone: </label>
                <input
                  className="input"
                  type="number"
                  name="phone"
                  value={phone}
                  onChange={this.handleChange}
                  required
                />
              </div>
              <div className="field">
                <label className="label">Address: </label>
                <input
                  className="input"
                  type="text"
                  name="address"
                  value={address}
                  onChange={this.handleChange}
                />
              </div>
              <div className="field">
                <label className="label">Pincode: </label>
                <input
                  className="input"
                  type="number"
                  name="Pincode"
                  value={Pincode}
                  onChange={this.handleChange}
                />
              </div>
              {this.state.error && (
                <div className="error">{this.state.error}</div>
              )}
              <div className="field is-clearfix">
                <button
                  className="button text-white bg-danger is-outlined is-pulled-right"
                  type="submit"
                  onClick={this.save}
                >
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

export default withContext(Location_Product);
