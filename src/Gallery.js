import React from "react";
import PropTypes from "prop-types";
 import Slide from "./functionalcomponent/Slide";
export default class Gallery extends React.Component {
  render() {
    return (
      <Slide>
        <div
          style={{ width: "100%", height: "300px", backgroundColor: "red" }}
        />
        <div
          style={{ width: "100%", height: "300px", backgroundColor: "yellow" }}
        />
        <div
          style={{ width: "100%", height: "300px", backgroundColor: "black" }}
        />
      </Slide>
    );
  }
}
